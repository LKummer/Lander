+++
title = "Quick Start Guide"
date = "2020-03-05"
description = "A succinct guide to get new users up and going quickly."
categories = [
    "User Guides"
]
+++

By the end of this guide you should have a Hugo site ready to be generated.

# Creating the Site

```python
@mixin('mixin!')
class Some(Object):
    """
    Hello Class Docstring!
    """
    def __init__(self):
        print('Hello {}'.format('world'))

    def hello(self):
        pass
    
    def throw(self):
        raise Exception('Just an error!')
```

{{< highlight python "linenos=inline" >}}
@mixin('mixin!')
class Some(Object):
    """
    Hello Class Docstring!
    """
    def __init__(self):
        print('Hello {}'.format('world'))

    def hello(self):
        pass
    
    def throw(self):
        raise Exception('Just an error!')
{{< / highlight >}}

```json
{
    "string": "Hello World",
    "boolean": true,
    "number": 7,
    "array": [
        "Hello",
        "Array"
    ],
    "object": {
        "nested": "Hello Nested",
        "otherNested": 12
    }
}
```

# Setting Up the Theme

```cpp
namespace hello {
    
    class HelloWorld {
    public:
        HelloWorld();

        float get_value(float&& value) const {
            const std::string hello = "world"s;
            if (variable == 1.f) {
                const template = std::vector<float>{};
                return variable;
            }
        };

        virtual ~HelloWorld() = 0;
    }

}
```

``` bash
#!/bin/bash

# start first script
some.script &

# start second script
some.other.script
```

# Structuring the Content

```js
// Highlights the TOC anchors and keeps track of the current highlighted anchor.
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

// Used to observe and unobserve headings for highlihgting.
class HeadingObserver {
  constructor (toc, headings) {
    this.headings = headings
    const highlighter = new Highlighter(toc)
    this.observer = new IntersectionObserver(entries => {
      const active = entries.filter(entry => entry.isIntersecting)
      // Only find the active anchor when there is at least one intersecting
      // Entry.
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

// Sets up TOC highlight and enables or disables it based on it's visibility.
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
```