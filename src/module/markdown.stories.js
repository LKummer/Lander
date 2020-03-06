export default {
  title: 'Markdown',
  parameters: {
    componentSubtitle: 'Styles markdown rendered to HTML.'
  }
}

export const Article = function () {
  return `
  <article class="article">
    <!-- The article-content class extends markdown. -->
    <section class="article-content">
      <p>
        This article offers a sample of basic Markdown syntax that can be used in
        Hugo content files, also it shows whether basic HTML elements are
        decorated with CSS in a Hugo theme.
      </p>
      <h2 id="headings">Headings</h2>
      <p>
        The following HTML <code>&lt;h1&gt;</code>—<code>&lt;h6&gt;</code>
        elements represent six levels of section headings. <code>&lt;h1&gt;
        </code> is the highest section level while <code>&lt;h6&gt;</code> is the
        lowest.
      </p>
      <h1 id="h1">H1</h1>
      <h2 id="h2">H2</h2>
      <h3 id="h3">H3</h3>
      <h4 id="h4">H4</h4>
      <h5 id="h5">H5</h5>
      <h6 id="h6">H6</h6>
      <h2 id="paragraph">Paragraph</h2>
      <p>
        Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum,
        voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate
        ma dolestendit peritin re plis aut quas inctum laceat est volestemque
        commosa as cus endigna tectur, offic to cor sequas etum rerum idem
        sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus
        ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique
        molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum
        fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus
        es exerum sitate dolores editium rerore eost, temped molorro ratiae
        volorro te reribus dolorer sperchicium faceata tiustia prat.
      </p>
      <p>
        Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis
        ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
      </p>
      <h2 id="blockquotes">Blockquotes</h2>
      <p>
        The blockquote element represents content that is quoted from another
        source, optionally with a citation which must be within a <code>footer
        </code> or <code>cite</code> element, and optionally with in-line changes
        such as annotations and abbreviations.
      </p>
      <h4 id="blockquote-without-attribution">Blockquote without attribution</h4>
      <blockquote>
        <p>Tiam, ad mint andaepu dandae nostion secatur sequo quae.
        <strong>Note</strong> that you can use <em>Markdown syntax</em>
        within a blockquote.</p>
      </blockquote>
      <h4 id="blockquote-with-attribution">Blockquote with attribution</h4>
      <blockquote>
        <p>
          Don&rsquo;t communicate by sharing memory, share memory by
          communicating.<!-- raw HTML omitted -->
          — <!-- raw HTML omitted -->Rob Pike<sup id="fnref:1">
          <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
          </sup><!-- raw HTML omitted -->
        </p>
      </blockquote>
      <h2 id="tables">Tables</h2>
      <p>
        Tables aren&rsquo;t part of the core Markdown spec, but Hugo supports
        supports them out-of-the-box.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bob</td>
            <td>27</td>
          </tr>
          <tr>
            <td>Alice</td>
            <td>23</td>
          </tr>
        </tbody>
      </table>
      <h4 id="inline-markdown-within-tables">Inline Markdown within tables</h4>
      <table>
        <thead>
            <tr>
            <th>Inline   </th>
            <th>Markdown   </th>
            <th>In   </th>
            <th>Table</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><em>italics</em></td>
            <td><strong>bold</strong></td>
            <td><del>strikethrough</del>   </td>
            <td><code>code</code></td>
          </tr>
        </tbody>
      </table>
      <h2 id="code-blocks">Code Blocks</h2>
      <h4 id="code-block-with-backticks">Code block with backticks</h4>
      <h2 id="code-blocks">Code Blocks</h2>
      <h4 id="code-block-with-backticks">Code block with backticks</h4>
<pre><code>html
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title&gt;Example HTML5 Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Test&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
  <h4 id="code-block-indented-with-four-spaces">
    Code block indented with four spaces
  </h4>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title&gt;Example HTML5 Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Test&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<h4 id="code-block-with-hugos-internal-highlight-shortcode">
  Code block with Hugo&rsquo;s internal highlight shortcode
</h4>
<div class="highlight"><pre style="color:#f8f8f2;background-color:#272822;
-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code
class="language-html"data-lang="html"><span style="color:#75715e"
>&lt;!DOCTYPE html&gt;</span>
&lt;<span style="color:#f92672">html</span> <span style="color:#a6e22e"
>lang</span><span style="color:#f92672">=</span><span style="color:#e6db74"
>&#34;en&#34;</span>&gt;
&lt;<span style="color:#f92672">head</span>&gt;
  &lt;<span style="color:#f92672">meta</span> <span style="color:#a6e22e"
  >charset</span><span style="color:#f92672">=</span><span style="color:#e6db74"
  >&#34;UTF-8&#34;</span>&gt;
  &lt;<span style="color:#f92672">title</span
  >&gt;Example HTML5 Document&lt;/<span style="color:#f92672">title</span>&gt;
&lt;/<span style="color:#f92672">head</span>&gt;
&lt;<span style="color:#f92672">body</span>&gt;
  &lt;<span style="color:#f92672">p</span>&gt;Test&lt;/<span
  style="color:#f92672">p</span>&gt;
&lt;/<span style="color:#f92672">body</span>&gt;
&lt;/<span style="color:#f92672">html</span>&gt;</code></pre></div>
      <h2 id="list-types">List Types</h2>
      <h4 id="ordered-list">Ordered List</h4>
      <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
      </ol>
      <h4 id="unordered-list">Unordered List</h4>
      <ul>
      <li>List item</li>
      <li>Another item</li>
      <li>And another item</li>
      </ul>
      <h4 id="nested-list">Nested list</h4>
      <ul>
      <li>Item</li>
      </ul>
      <ol>
      <li>First Sub-item</li>
      <li>Second Sub-item</li>
      </ol>
      <section class="footnotes" role="doc-endnotes">
      <hr>
      <ol>
      <li id="fn:1" role="doc-endnote">
      <p>
        The above quote is excerpted from Rob Pike&rsquo;s
        <a href="https://www.youtube.com/watch?v=PAAkCSZUG1c">
          talk
        </a>
        during Gopherfest, November 18, 2015.
        <a href="#fnref:1" class="footnote-backref" role="doc-backlink">
          &#x21a9;&#xfe0e;
        </a>
      </p>
      </li>
      </ol>
      </section>
  </article>
  `
}
