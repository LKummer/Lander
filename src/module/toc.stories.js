export default {
  title: 'TOC',
  parameters: {
    componentSubtitle: 'Styles the Hugo generated table of contents.'
  }
}

export const TOC = function () {
  return `
  <aside class="toc" height="150%">
    <nav id="TableOfContents">
      <ul>
        <li><a href="#headings">Headings</a></li>
      </ul>

      <ul>
        <li><a href="#h2">H2</a>
          <ul>
            <li><a href="#h3">H3</a></li>
          </ul>
        </li>
        <li><a href="#paragraph">Paragraph</a></li>
        <li><a href="#blockquotes">Blockquotes</a>
          <ul>
            <li>
              <a href="#blockquote-without-attribution">
                Blockquote without attribution
              </a>
            </li>
            <li>
              <a href="#blockquote-with-attribution">
                Blockquote with attribution
              </a>
            </li>
          </ul>
        </li>
        <li><a href="#tables">Tables</a>
          <ul>
            <li>
              <a href="#inline-markdown-within-tables">
                Inline Markdown within tables
              </a>
            </li>
          </ul>
        </li>
        <li><a href="#code-blocks">Code Blocks</a>
          <ul>
            <li>
              <a href="#code-block-with-backticks">
                Code block with backticks
              </a>
            </li>
            <li>
              <a href="#code-block-indented-with-four-spaces">
                Code block indented with four spaces
              </a>
            </li>
            <li>
              <a href="#code-block-with-hugos-internal-highlight-shortcode">
                Code block with Hugo&rsquo;s internal highlight shortcode
              </a>
            </li>
          </ul>
        </li>
        <li><a href="#list-types">List Types</a>
          <ul>
            <li><a href="#ordered-list">Ordered List</a></li>
            <li><a href="#unordered-list">Unordered List</a></li>
            <li><a href="#nested-list">Nested list</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
  `
}
