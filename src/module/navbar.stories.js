/* eslint-disable max-len */
export default {
  title: 'Navigation Bar',
  parameters: {
    componentSubtitle: 'Main navigation bar.'
  }
}

export const Navigation = function () {
  return `
  <section class="navbar">
    <a class="navbar-logo-link">
      <h1 class="navbar-logo-title">
        Logo
      </h1>
    </a>
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

export const WithLogo = function () {
  return `
  <section class="navbar">
    <a href="#" class="navbar-logo-link">
      <svg class="navbar-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 48">
        <defs>
          <style>
            .logo-fill {
              fill: var(--color-primary-600);
              transition: fill 0.25s;
            }
            .navbar-logo-link:hover {
              --color-primary-600: var(--color-primary-400);
            }
          </style>
        </defs>
        <path class="logo-fill" d="M42.2,11.7C42.2,11.7,42.2,11.7,42.2,11.7C38.5,6.2,32.4,2.5,25.3,2h0c-2.4,1-5.8,2.6-10.4,5.3
          c-5.1,3-8.5,5.3-10.7,7.1C2.8,17.3,2,20.5,2,24c0,3.5,0.8,6.9,2.3,9.8c2.1,1.6,5.1,3.7,9.8,6.4c5.1,2.9,8.9,4.7,11.5,5.7
          c7-0.5,13.1-4.3,16.8-9.8c0,0,0,0,0,0c0.4-2.6,0.6-6.3,0.6-11.6C43,18.6,42.6,14.5,42.2,11.7z M24,37c-7.2,0-13-5.8-13-13
          s5.8-13,13-13s13,5.8,13,13S31.2,37,24,37z"/>
      </svg>
      <h1 class="navbar-logo-title">
        Logo
      </h1>
    </a>
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
  </section>`
}
