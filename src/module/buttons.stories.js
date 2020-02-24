export default {
  title: 'Buttons',
  parameters: {
    componentSubtitle: 'Use to group multiple buttons together with organized '
      + 'wrapping and margins.'
  }
}

export const FewButtons = function () {
  return `
  <ul class="buttons">
    <li>
      <button class="buttons-button button button-primary">
        First Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-accent">
        Second Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-primary">
        Third Button
      </button>
    </li>
  </ul>
  `
}

export const ManyButtons = function () {
  return `
  <ul class="buttons">
    <li>
      <button class="buttons-button button button-primary">
        First Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-accent">
        Second Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-primary">
        Third Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-accent">
        Fourth Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-primary">
        Fifth Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-accent">
        Sixth Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-primary">
        Seventh Button
      </button>
    </li>
    <li>
      <button class="buttons-button button button-accent">
        Eighth Button
      </button>
    </li>
  </ul>
  `
}

export const InsideNav = function () {
  return `
  <nav>
    <ul class="buttons">
      <li>
        <button class="buttons-button button button-primary">
          First Button
        </button>
      </li>
      <li>
        <button class="buttons-button button button-accent">
          Second Button
        </button>
      </li>
      <li>
        <button class="buttons-button button button-primary">
          Third Button
        </button>
      </li>
    </ul>
  </nav>
  `
}
