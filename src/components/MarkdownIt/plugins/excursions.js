import { html } from  '../../../lib/escape'
import state from '../../../modules/state'

const pScopeName = `(${state.scopeNames.join('|')})`
const pTrackId = '[^,]+'
const pTrackIds = `(${pTrackId}(?:\\s*,\\s*${pTrackId})?)`
const pFileReference = `['"]([\\s\\S]+)(?:\\.md)?['"]`
const matchPattern = `^\\s*${pScopeName}\\s+${pFileReference}(?:\\s+${pTrackIds})?\\s*$`
const matchExpression = new RegExp(matchPattern)

function validate(params) {
  return params.trim().match(matchExpression)
}
function render(tokens, idx) {
  const match = tokens[idx].info.trim().match(matchExpression)
  if (tokens[idx].nesting === 1) {
    const tags = match[1].split(',')
    const trimmedTags = tags.map(t => t.trim())
    const jsonTags = JSON.stringify(trimmedTags)

    // opening tag
    return `<excursions tagString="${html.escape(jsonTags)}">`
  } else {
    // closing tag
    return '</excursions>'
  }
}
export default {
  validate,
  render
}
