export default {
  title: 'Navigation Bar',
  parameters: {
    componentSubtitle: 'Main navigation bar.'
  }
}

export const Navigation = function () {
  return `
  <section class="navbar">
    <h1 class="navbar-logo">
      Logo
    </h1>
    <span class="navbar-spacer"></span>
    <nav>
      <ul class="navbar-navigation">
        <li>
          <a href class="navbar-navigation-item">
            Home
          </a>
        </li>
        <li>
          <a href class="navbar-navigation-item">
            Guides
          </a>
        </li>
      </ul>
    </nav>
  </section>
  `
}
