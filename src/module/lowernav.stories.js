export default {
  title: 'Lower Navigation',
  parameters: {
    componentSubtitle: 'Navigation in the footer of the site.'
  }
}

export const navigation = function () {
  return `
  <section class="footer">
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
