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
          longer so it wraps. It needs to be longer so here is more text to make
          it wrap.
        </p>
      </section>
      <nav>
        <ul class="lowernav">
          <li>
            <a href class="lowernav-item">
              First Link
            </a>
          </li>
          <li>
            <a href class="lowernav-item">
              Second Link
            </a>
          </li>
          <li>
            <a href class="lowernav-item">
              Third Link
            </a>
          </li>
        </ul>
      </nav>
  </section>
  `
}
