export default {
  title: 'Grid',
  parameters: {
    componentSubtitle: 'Tight grid for cards.'
  }
}

export const Even = function () {
  return `
  <ul class="grid">
    <li>
      <section class="card">
        <h1 class="card-heading">
          First Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Second Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
  </ul>
  `
}

export const Uneven = function () {
  return `
  <ul class="grid">
    <li>
      <section class="card">
        <h1 class="card-heading">
          First Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Second Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Third Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
  </ul>
  `
}

export const HeightDifference = function () {
  return `
  <ul class="grid">
    <li>
      <section class="card">
        <h1 class="card-heading">
          First Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Second Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller. This one has more text
          to make it bigger so the way cards inside grids behave can be observed.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Third Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
  </ul>
  `
}

export const Many = function () {
  return `
  <ul class="grid">
    <li>
      <section class="card">
        <h1 class="card-heading">
          First Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Second Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Third Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Fourth Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Fifth Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Sixth Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Seventh Card
        </h1>
        <p class="card-text">
          Some filler text to make the card look fuller.
        </p>
      </section>
    </li>
  </ul>
  `
}
