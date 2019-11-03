import applicationNamespace, * as application from './types'
import APIRequest, { getRequestContext } from '../APIRequest'

// context === {dispatch: ƒ, commit: ƒ, getters: {…}, state: {…}, rootGetters: {…},…}

export default {
  [application.GET_LIST]({commit}) {
    APIRequest(
        getRequestContext(
            applicationNamespace,
            application.GET_LIST,
        ),
        {},
        items => {
          commit(application.GET_LIST, items)
        }
    )
  },
  [application.POST]({commit}, unsavedItem) {
    APIRequest(
        getRequestContext(
            applicationNamespace,
            application.POST,
        ),
        { newItem: unsavedItem },
        savedItem => {
          commit(application.POST, savedItem)
        }
    )
  },
  [application.PUT_DISPLAYNAME]({commit}, { updatedValue, appId }) {
    APIRequest(
        getRequestContext(
            applicationNamespace,
            application.PUT_DISPLAYNAME,
            appId
        ),
        {updatedValue},
        () => {
          commit(application.PUT_DISPLAYNAME, { updatedValue, appId })
        }
    )
  },
  [application.PUT_DESCRIPTION]({commit}, { updatedValue, appId }) {
    APIRequest(
        getRequestContext(
            applicationNamespace,
            application.PUT_DESCRIPTION,
            appId
        ),
        {updatedValue},
        () => {
          commit(application.PUT_DESCRIPTION, { updatedValue, appId })
        }
    )
  },
  [application.PUT_VARIABLENAME]({commit}, { updatedValue, appId }) {
    APIRequest(
        getRequestContext(
            applicationNamespace,
            application.PUT_VARIABLENAME,
            appId
        ),
        {updatedValue},
        () => {
          commit(application.PUT_VARIABLENAME, { updatedValue, appId })
        }
    )
  },
  [application.DELETE]({commit}, appId) {
    APIRequest(
        getRequestContext(
            applicationNamespace,
            application.DELETE,
            appId
        ),
        { },
        deletedId => {
          commit(application.DELETE, deletedId)
        }
    )
  },
}
