export default function resolvePath(origin, path) {
  let ancestor = origin
  let hasDescendants = true
  let isArrayOrObject = false
  let fails = false
  for (let c = 0; c < path.length; c++) {
    hasDescendants = c < path.length - 1
    isArrayOrObject = typeof ancestor === 'object'
    fails = hasDescendants && !isArrayOrObject
    if (fails) {
      // eslint-disable-next-line
      console.warn('origin', origin)
      throw Error(`the path cannot be resolved: ${path}`)
    }
    ancestor = ancestor[path[c]]
  }
  return ancestor
}
