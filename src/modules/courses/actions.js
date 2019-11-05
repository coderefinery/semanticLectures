import namespace, * as model from './types'

import reST from '../../../data/reStructuredText'

let items = []
for (let name in reST) {
  items.push({
    id: name,
    displayName: name,
    variableName: name,
    body: reST[name]
  })
}

const debug = {
  items
}
export default {
  [model.POST]({commit}, reST) {
    commit(model.POST, {
      courses: [reST]
    })
  },
  [model.GET_LIST]({commit}) {
    commit(model.GET_LIST, debug.items)
  }
}
