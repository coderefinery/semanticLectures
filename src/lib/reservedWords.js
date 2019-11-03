const reservedWords = ['null', 'undefined', 'true', 'false', 'isNan', 'NaN', 'Infinity', 'eval', 'arguments', 'alert', 'document', 'window', 'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'class', 'const', 'enum', 'export', 'extends', 'import', 'super', 'implements', 'interface', 'let', 'package', 'private', 'protected', 'public', 'static', 'yield']

export function isReserved(name) {
  return !reservedWords.indexOf(name) < 0
}

export default reservedWords
