import { html } from  '../../../lib/escape'

const pTag = '[^\\},]+'
const pFirstTag = `(?:${pTag})`
const pTrailingTags = `(?:\\s*,\\s*${pTag})`
const matchPattern = `^\\{(\\s*${pFirstTag}${pTrailingTags}\\s*)\\}:::$`
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
    return '</excursions>\n'
  }
}
export default {
  validate,
  render
}
