import summaryNamespace, * as summary from './types'
import APIRequest, { getRequestContext } from '../APIRequest'

export default {
  [summary.GET_LIST]({commit}) {
    APIRequest(
        getRequestContext(
            summaryNamespace,
            summary.GET_LIST,
        ),
        {},
        items => {
          commit(summary.GET_LIST, items)
        }
    )
  },
  [summary.POST]({commit}, unsavedItem) {
    APIRequest(
        getRequestContext(
            summaryNamespace,
            summary.POST,
        ),
        { newItem: unsavedItem },
        savedItem => {
          commit(summary.POST, savedItem)
        }
    )
  },
  [summary.PUT_DISPLAYNAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            summaryNamespace,
            summary.PUT_DISPLAYNAME,
            id
        ),
        {updatedValue},
        () => {
          commit(summary.PUT_DISPLAYNAME, { updatedValue, id })
        }
    )
  },
  [summary.PUT_DESCRIPTION]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            summaryNamespace,
            summary.PUT_DESCRIPTION,
            id
        ),
        {updatedValue},
        () => {
          commit(summary.PUT_DESCRIPTION, { updatedValue, id })
        }
    )
  },
  [summary.PUT_VARIABLENAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            summaryNamespace,
            summary.PUT_VARIABLENAME,
            id
        ),
        {updatedValue},
        () => {
          commit(summary.PUT_VARIABLENAME, { updatedValue, id })
        }
    )
  },
  [summary.DELETE]({commit}, id) {
    APIRequest(
        getRequestContext(
            summaryNamespace,
            summary.DELETE,
            id
        ),
        { },
        deletedId => {
          commit(summary.DELETE, deletedId)
        }
    )
  },
}
