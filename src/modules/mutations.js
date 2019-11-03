import { SET_USER } from './mutation-types'

const mutations = {
  [SET_USER](state, payload) {
    if (payload) {
      state.user = {
        email: payload.user.email,
        uid: payload.user.uid
      }
    } else {
      state.user = null
    }
  },
}

export default mutations
