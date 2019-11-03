import namespace, * as users from './types'
import { DELETE_LOGIN } from '../auth/types'
import { GET_USER } from '../auth/getters'
import APIRequest, { getRequestContext } from '../APIRequest_depr'

// context === {dispatch: ƒ, commit: ƒ, getters: {…}, state: {…}, rootGetters: {…},…}

export default {
  [users.POST]({commit}, user) {
    APIRequest(
        getRequestContext(
          namespace,
          users.POST,
        ),
        {
          user
        },
        user => {
          commit(users.POST, user)
        }
    )
  },
  [users.PUT_EMAILS]({commit}, { uid, newVal }) {
    APIRequest(
        getRequestContext(
          namespace,
          users.PUT_EMAILS,
          uid
        ),
        {
          newVal
        },
        () => {
          commit(users.PUT_EMAILS, { uid, newVal })
        }
    )
  },
  [users.PUT_DESCRIPTION]({commit}, { uid, newVal }) {
    APIRequest(
        getRequestContext(
          namespace,
          users.PUT_EMAILS,
          uid
        ),
        {
          newVal
        },
        () => {
          commit(users.PUT_DESCRIPTION, { uid, newVal })
        }
    )
  },
  [users.DELETE]({commit, dispatch}, uid) {
    APIRequest(
      getRequestContext(
        namespace,
        users.DELETE,
        uid
      ),
      {},
      () => {
        const currentUserId = GET_USER().uid
        if (uid === currentUserId) {
          dispatch(DELETE_LOGIN, null)
        }
        commit(users.DELETE, {uid})
      }
    )
  },
}
