export default {
  title: 'Button',
  parameters: {
    componentSubtitle: 'Styled button that can be used with <button> and <a> '
      + 'tags.'
  }
}

export const Semantic = function () {
  return `
  <button class="button button-primary">
    Semantic Button
  </button>
  `
}

export const Anchor = function () {
  return `
  <a href class="button button-primary">
    Link Button
  </a>
  `
}

export const PrimaryColored = function () {
  return `
  <button class="button button-primary">
    Primary Button
  </button>
  `
}

export const AccentColored = function () {
  return `
  <button class="button button-accent">
    Accent Button
  </button>
  `
}
