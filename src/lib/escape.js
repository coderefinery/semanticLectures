function HTML() {
  const pControlChar = '[<>&"]'
  const eControlChar = new RegExp(pControlChar)
  const eControlChars = new RegExp(pControlChar, 'g')

  const escapes = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
  }
  const pEscapedChar = '(&(?:lt|gt|amp|quot);)'
  const eEscapedChar = new RegExp(pEscapedChar)
  const eEscapedChars = new RegExp(pEscapedChar, 'g')

  const unescapes = {
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&quot;': '"',
  }
  return {
    escape(html) {
      if (eControlChar.test(html)) {
        html = html.replace(eControlChars, (c => escapes[c]))
      }
      return html
    },
    unescape(string) {
      if (eEscapedChar.test(string)) {
        string = string.replace(eEscapedChars, (c => unescapes[c]))
      }
      return string
    }
  }
}
export const html = new HTML()
