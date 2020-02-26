export default {
  title: 'Content',
  parameters: {
    componentSubtitle: 'Text content module without external margins for '
    + 'placement inside other modules.'
  }
}

export const Short = function () {
  return `
  <section class="content content-light">
    <h1 class="content-title">
      This is a short title.
    </h1>
    <p class="content-text">
      This is a short piece of sample text.
    </p>
    <p class="content-text">
      This is a second paragraph of sample text to see how content is handled.
    </p>
  </section>
  `
}

export const MultipleParagraphs = function () {
  return `
  <section class="content content-light">
    <h1 class="content-title">
      This is a short title.
    </h1>
    <p class="content-text">
      This is a short piece of sample text.
    </p>
    <p class="content-text">
      This is a second paragraph of sample text to see how content is handled.
    </p>
    <p class="content-text">
      This is a third paragraph of sample text.
    </p>
  </section>
  `
}

export const BottomTitle = function () {
  return `
  <section class="content content-light">
    <h1 class="content-title">
      This is a short title.
    </h1>
    <p class="content-text">
      This is a short piece of sample text.
    </p>
    <p class="content-text">
      This is a second paragraph of sample text to see how content is handled.
    </p>
    <h1 class="content-title">
      This is a title at the bottom.
    </h1>
  </section>
  `
}

export const Dark = function () {
  return `
  <section class="content content-dark">
    <h1 class="content-title">
      This is a short title.
    </h1>
    <p class="content-text">
      This is a short piece of sample text.
    </p>
    <p class="content-text">
      This is a second paragraph of sample text to see how content is handled.
    </p>
  </section>
  `
}
