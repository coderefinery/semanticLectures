import namespace, * as model from './types'

export default {
  [model.POST]({commit}, reST) {
    commit(model.POST, {
      courses: [reST]
    })
  },
  [model.GET_LIST]({commit}) {
    commit(model.GET_LIST, [])
  }
}
