export default {
  title: 'Masthead',
  parameters: {
    componentSubtitle: 'Main introduction of visitors to the site.'
  }
}

export const Normal = function () {
  return `
  <section class="masthead">
    <h1 class="masthead-title">
      This is the masthead title.
    </h1>
    <h2 class="masthead-subtitle">
      This is the masthead's subtitle, which will contain a little bit more
      text.
    </h2>
    <nav>
      <ul class="buttons">
        <li>
          <a href class="buttons-button button button-primary">
            First Button
          </a>
        </li>
        <li>
          <a href class="buttons-button button button-accent">
            Second Longer Button
          </a>
        </li>
      </ul>
    </nav>
  </section>
  `
}
