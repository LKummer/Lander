export default {
  title: 'Cards View',
  parameters: {
    componentSubtitle: 'Site section that displays cards and a title.'
  }
}

export const Cards = function () {
  return `
  <section class="cardsview">
    <div class="cardsview-container">
      <section class="l-offset l-offset-end cardsview-top">
        <section class="content content-dark">
          <h1 class="content-title">
            You should use our solution!
          </h1>
        </section>
        <section class="content content-dark">
          <p class="content-text">
            This bit of sample text explains that you should definitely use our
            product because reasons! Yes! Any reasonable person would use our
            product.
          </p>
        </section>
      </section>
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
    </div>
  </section>
  `
}
