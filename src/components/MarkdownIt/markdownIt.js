import MarkdownIt from 'markdown-it'
import excursion from './plugins/excursions'
import highlightjs from 'highlightjs'
import { html } from '../../lib/escape'

function createHighlightJSCodeBlock(str, lang) {
  if (lang && highlightjs.getLanguage(lang)) {
    try {
      return '<pre class="hljs"><code>' +
        highlightjs.highlight(lang, str, true).value +
        '</code></pre>';
    } catch (e) {
      console.error(e)
    }
  }
  return '<pre class="hljs"><code>' + html.escape(str) + '</code></pre>';
}

export default new MarkdownIt({
  highlight: createHighlightJSCodeBlock,
  linkify: true,
  typographer: true
})
  .use(require('markdown-it-ins'))
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-sup'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-container'), 'excursion', excursion)
