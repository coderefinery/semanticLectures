
function resolvePath(origin, path) {
  console.log('resolving path', origin, path)

  let ancestor = origin
  let isArrayOrObject = false
  let fails = false
  let isId = false
  let step = ''
  for (let c = 0; c < path.length; c++) {
    isArrayOrObject = typeof ancestor === 'object'
    fails = !isArrayOrObject
    if (fails) {
      // eslint-disable-next-line
      console.warn('origin', origin)
      throw Error(`the path cannot be resolved: ${path}`)
    }
    step = path[c]
    isId = step[0] === '#'
    if (isId) {
      step = step.substring(1)
      ancestor = ancestor.find(item => item._id === step)
    } else {
      ancestor = ancestor[step]
    }
  }
  return ancestor
}

export const RESOLVE_PATH = 'RESOLVE_PATH'

export default {
  isAuthenticated: state => state.user !== null && state.user !== undefined,
  [RESOLVE_PATH]: state => (origin, path) => {
    return resolvePath(origin, path)
  }
}

