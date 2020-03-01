export default {
  title: 'Offset',
  parameters: {
    componentSubtitle: 'Offset grid layout.'
  }
}

export const OffsetStart = function () {
  return `
  <section class="l-offset l-offset-start">
    <section class="card">
      <h1 class="card-title">
        Start Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
    <section class="card">
      <h1 class="card-title">
        End Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
  </section>
  `
}

export const OffsetEnd = function () {
  return `
  <section class="l-offset l-offset-end">
    <section class="card">
      <h1 class="card-title">
        Start Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
    <section class="card">
      <h1 class="card-title">
        End Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
  </section>
  `
}

export const OffsetItemStart = function () {
  return `
  <section class="l-offset l-offset-end">
    <section class="card l-offset-item-start">
      <h1 class="card-title">
      Start Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
    <section class="card l-offset-item-start">
      <h1 class="card-title">
        Second Start Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
  </section>
  `
}

export const OffsetItemEnd = function () {
  return `
  <section class="l-offset l-offset-end">
    <section class="card l-offset-item-end">
      <h1 class="card-title">
      End Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
    <section class="card l-offset-item-end">
      <h1 class="card-title">
        Second End Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
  </section>
  `
}

export const ListBased = function () {
  return `
  <ul class="l-offset l-offset-end">
    <li>
      <section class="card">
        <h1 class="card-heading">
          First Card
        </h1>
        <p class="card-text">
          Some filler text.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Second Card
        </h1>
        <p class="card-text">
          Some filler text.
        </p>
      </section>
    </li>
    <li>
      <section class="card">
        <h1 class="card-heading">
          Third Card
        </h1>
        <p class="card-text">
          Some filler text.
        </p>
      </section>
    </li>
  </ul>
  `
}
