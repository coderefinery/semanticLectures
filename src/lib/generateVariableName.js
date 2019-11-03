import reservedWords from "./reservedWords"

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

export default function generateJSName(v) {
  // todo: redo with ES9 (named unicode blocks in regular expressions)
  let parts = []
  if (v) {
    v = v.trim()
    const startsWithNumber = v.match(/^\d/)
    if (startsWithNumber) {
      parts.push(numbers[parseInt(v[0])])
      v = v.substr(1)
    }
    const isReservedWord = reservedWords.indexOf(v) >= 0
    if (isReservedWord) {
      parts.push('_')
      v = v.substr(1)
    }
    const startsWithUnsupportedChar = v.match(/^[^\w$]/)
    if (startsWithUnsupportedChar) {
      parts.push('_')
      v = v.substr(0, v.length - 1)
    }
    const endsWithUnsupportedChar = v.match(/[^\w$]$/)
    if (endsWithUnsupportedChar) {
      parts.push('_')
    }
    const containsUnsupportedChars = v.match(/[^\w$]/)
    if (containsUnsupportedChars) {
      parts = parts.concat(v.split(/[^\w$]/g))
    }
  }
  parts = parts.filter(p => p)
  v = parts.join('_')
  return v
}
