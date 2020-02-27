export default {
  title: 'Footer',
  parameters: {
    componentSubtitle: 'Footer site section. Contains about information and '
    + 'navigation.'
  }
}

export const Footer = function () {
  return `
  <section class="footer">
    <section class="footer-container offset offset-start">
      <section class="content content-dark">
        <h1 class="content-title">
          Longer Section Title
        </h1>
        <p class="content-text">
          This is a short bit of sample text. This side should be a little bit
          longer so it wraps.
        </p>
      </section>
      <section class="content content-dark">
        <p class="content-text">
          This is a short bit of sample text.
        </p>
      </section>
    </section>
  </section>
  `
}
