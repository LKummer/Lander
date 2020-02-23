export default {
  title: 'Navigation Bar'
}

export const Normal = function () {
  return `
  <nav class="navbar">
    <ul class="navbar-container">
      <li class="navbar-logo">
        Logo
      </li>
      <li class="navbar-spacer"></li>
      <li>
        <a href class="navbar-item navbar-item-active">Home</a>
      </li>
      <li>
        <a href class="navbar-item">Guides</a>
      </li>
    </ul>
  </nav>
  `
}
