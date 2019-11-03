import namespace, * as auth from './types'
import authGetters, { GET_USER } from "./getters"
import APIRequest, { getRequestContext } from '../APIRequest'

// context === {dispatch: ƒ, commit: ƒ, getters: {…}, state: {…}, rootGetters: {…},…}

export default {
  [auth.POST_LOGIN]({commit}, {email, password}) {
    APIRequest(
      getRequestContext(
        namespace,
        auth.POST_LOGIN,
      ),
      {
        email,
        password
      },
      user => { // uid, email
        if (user && user.uid) {
          commit(auth.SET_USER, user)
        } else {
          commit(auth.SET_USER, null)
        }
      }
    )
  },
  [auth.DELETE_LOGIN]({commit}) {
    const currentUser = authGetters.GET_USER()
    if (currentUser) {
      commit(auth.SET_USER, null)
      APIRequest(
        getRequestContext(
          namespace,
          auth.DELETE_LOGIN,
          currentUser.uid
        ),
      )
    }
  },
}
