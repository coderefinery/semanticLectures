import {SET_FLAVOR} from './types'
const mutations = {
  [SET_FLAVOR](state, value){
    state.preferredFlavor = value
  }
}

export default mutations
