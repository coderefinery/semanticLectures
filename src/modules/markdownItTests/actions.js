import * as model from './types'

import tests from '../../../data/markdownIt'

let items = []
for (let name in tests) {
  items.push({
    id: name,
    displayName: name,
    variableName: name,
    body: tests[name]
  })
}

const debug = {
  items
}
export default {
  [model.POST]({commit}, reST) {
    commit(model.POST, {
      markdownItTests: [reST]
    })
  },
  [model.GET_LIST]({commit}) {
    commit(model.GET_LIST, debug.items)
  }
}
