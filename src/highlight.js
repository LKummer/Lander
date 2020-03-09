class Highlighter {
  constructor (toc, initial = null) {
    this.toc = toc
    this.current = initial
    if (initial) {
      this.highlight(initial)
    }
  }

  highlight (anchor) {
    this.reset()
    anchor.classList.add('is-active')
    this.current = anchor
  }

  highlightByID (id) {
    const anchor = this.toc.querySelector(`[href="#${id}"]`)
    if (anchor) {
      this.highlight(anchor)
    }
  }

  reset () {
    if (this.current) {
      this.current.classList.remove('is-active')
    }
  }
}

class HeadingObserver {
  constructor (toc, headings) {
    this.headings = headings
    const highlighter = new Highlighter(toc)
    this.observer = new IntersectionObserver(entries => {
      // Filter for the intersecting entries.
      const active = entries.filter(entry => entry.isIntersecting)
      // Only find the active anchor when there is at least one entry.
      if (active.length > 0) {
        highlighter.highlightByID(active[0].target.id)
      }
    },
    {
      // Set margins for the observer so it only observes the top of the page.
      rootMargin: '0px 0px -85% 0px',
      threshold: 0.8
    })
  }

  connect () {
    this.headings.forEach(heading => {
      this.observer.observe(heading)
    })
  }

  disconnect () {
    this.observer.disconnect()
  }
}

export default function managedHighlight (toc, headings) {
  const headingObserver = new HeadingObserver(toc, headings)
  const tocObserver = new IntersectionObserver(entries => {
    // Connect or disconnect the observer whether the TOC is intersecting or not.
    const anyIntersecting = entries.some(entry => entry.isIntersecting)
    if (anyIntersecting) {
      headingObserver.connect()
    } else {
      headingObserver.disconnect()
    }
  })
  tocObserver.observe(toc)
}
