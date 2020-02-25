export default {
  title: 'Offset',
  parameters: {
    componentSubtitle: 'Offset grid layout.'
  }
}

export const OffsetStart = function () {
  return `
  <section class="offset offset-start">
    <section class="card">
      <h1 class="card-heading">
        Start Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
    <section class="card">
      <h1 class="card-heading">
        Start Card
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
  <section class="offset offset-end">
    <section class="card">
      <h1 class="card-heading">
        Start Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
    <section class="card">
      <h1 class="card-heading">
        Start Card
      </h1>
      <p class="card-text">
        Some filler text.
      </p>
    </section>
  </section>
  `
}
