import namespace, * as model from './types'

export default {
  [model.POST]({commit}, reST) {
    commit(model.POST, {
      courses: [reST]
    })
  }
}
