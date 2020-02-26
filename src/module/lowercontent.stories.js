export default {
  title: 'Lower Content',
  parameters: {
    componentSubtitle: 'Site section that displays text content and a button.'
  }
}

export const Content = function () {
  return `
  <section class="lowercontent">
    <section class="content content-light content-centered">
      <h1 class="content-title">
        This is the title
      </h1>
      <p class="content-text">
        This is a bit of sample text.
      </p>
      <button class="button button-primary">
        A Button To Press
      </button>
    </section>
  </section>
  `
}
