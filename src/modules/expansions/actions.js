import expansionNamespace, * as expansion from './types'
import APIRequest, { getRequestContext } from '../APIRequest'

export default {
  [expansion.GET_LIST]({commit}) {
    APIRequest(
        getRequestContext(
            expansionNamespace,
            expansion.GET_LIST,
        ),
        {},
        items => {
          commit(expansion.GET_LIST, items)
        }
    )
  },
  [expansion.POST]({commit}, unsavedItem) {
    APIRequest(
        getRequestContext(
            expansionNamespace,
            expansion.POST,
        ),
        { newItem: unsavedItem },
        savedItem => {
          commit(expansion.POST, savedItem)
        }
    )
  },
  [expansion.PUT_DISPLAYNAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            expansionNamespace,
            expansion.PUT_DISPLAYNAME,
            id
        ),
        {updatedValue},
        () => {
          commit(expansion.PUT_DISPLAYNAME, { updatedValue, id })
        }
    )
  },
  [expansion.PUT_DESCRIPTION]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            expansionNamespace,
            expansion.PUT_DESCRIPTION,
            id
        ),
        {updatedValue},
        () => {
          commit(expansion.PUT_DESCRIPTION, { updatedValue, id })
        }
    )
  },
  [expansion.PUT_VARIABLENAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            expansionNamespace,
            expansion.PUT_VARIABLENAME,
            id
        ),
        {updatedValue},
        () => {
          commit(expansion.PUT_VARIABLENAME, { updatedValue, id })
        }
    )
  },
  [expansion.DELETE]({commit}, id) {
    APIRequest(
        getRequestContext(
            expansionNamespace,
            expansion.DELETE,
            id
        ),
        { },
        deletedId => {
          commit(expansion.DELETE, deletedId)
        }
    )
  },
}
