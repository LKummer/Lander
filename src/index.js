import 'typeface-open-sans'
import 'typeface-fira-code'

import './index.scss'


import managedHighlight from './highlight'

const toc = document.getElementById('TableOfContents')
if (toc) {
  const targets = document.querySelectorAll(
    '.article-content h1, .article-content h2,'
    + ' .article-content h3, .article-content h4,'
    + ' .article-content h5, .article-content h6')
  managedHighlight(toc, targets)
}
