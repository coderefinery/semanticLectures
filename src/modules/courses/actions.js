import * as model from './types'

export default {
  [model.POST]({commit}, reST) {
    commit(model.POST, {
      courses: [reST]
    })
  },
  [model.GET_LIST]({commit}) {
    commit(model.GET_LIST, [])
  },
  [model.GET_POINTS]({commit}) {
    commit(model.GET_POINTS, [
      {
        'git is a version control system': 'Git is a *version control system*: can record snapshots and track the content of a folder as it changes over time.'
      }
    ])
  }
}
