export default {
  title: 'Card',
  parameters: {
    componentSubtitle: 'Slightly elevated cards for displaying content.'
  }
}

export const Card = function () {
  return `
  <section class="card">
    <h1 class="card-heading">
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
    <h1 class="card-heading">
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
    <h1 class="card-heading">
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

export const ManyHeadings = function () {
  return `
  <section class="card">
    <h1 class="card-heading">
      Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
    <h1 class="card-heading">
      Another Card Title
    </h1>
    <p class="card-text">
      This is a bit of placeholder text for card content. This paragraph should
      contain a couple of sentences to wrap around. The card should contain about
      this much text in a paragraph.
    </p>
    <h1 class="card-heading">
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