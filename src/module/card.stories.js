export default {
  title: 'Card',
  parameters: {
    componentSubtitle: 'Slightly elevated cards for displaying content.'
  }
}

export const Card = function () {
  return `
  <section class="card">
    <h1 class="card-title">
      Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
  </section>
  `
}

export const AnchorCard = function () {
  return `
  <a href class="card">
    <h1 class="card-title">
        Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
  </a>
  `
}

export const ManyParagraphs = function () {
  return `
  <section class="card">
    <h1 class="card-title">
      Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
  </section>
  `
}

export const ManyTitles = function () {
  return `
  <section class="card">
    <h1 class="card-title">
      Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
    <h1 class="card-title">
      Another Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
    <h1 class="card-title">
      An Even Longer Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
  </section>
  `
}

export const ContentCard = function () {
  return `
  <section class="card content">
    <h1 class="content-title">
      Content Module Title
    </h1>
    <p class="content-text">
      Content module text based paragraph.
    </p>
  </section>
  `
}

export const Centered = function () {
  return `
  <section class="card card-centered">
    <h1 class="card-title">
      Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
  </section>
  `
}
