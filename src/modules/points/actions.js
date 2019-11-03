import pointNamespace, * as point from './types'
import APIRequest, { getRequestContext } from '../APIRequest'

export default {
  [point.GET_LIST]({commit}) {
    APIRequest(
        getRequestContext(
            pointNamespace,
            point.GET_LIST,
        ),
        {},
        items => {
          commit(point.GET_LIST, items)
        }
    )
  },
  [point.POST]({commit}, unsavedItem) {
    APIRequest(
        getRequestContext(
            pointNamespace,
            point.POST,
        ),
        { newItem: unsavedItem },
        savedItem => {
          commit(point.POST, savedItem)
        }
    )
  },
  [point.PUT_DISPLAYNAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            pointNamespace,
            point.PUT_DISPLAYNAME,
            id
        ),
        {updatedValue},
        () => {
          commit(point.PUT_DISPLAYNAME, { updatedValue, id })
        }
    )
  },
  [point.PUT_DESCRIPTION]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            pointNamespace,
            point.PUT_DESCRIPTION,
            id
        ),
        {updatedValue},
        () => {
          commit(point.PUT_DESCRIPTION, { updatedValue, id })
        }
    )
  },
  [point.PUT_VARIABLENAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            pointNamespace,
            point.PUT_VARIABLENAME,
            id
        ),
        {updatedValue},
        () => {
          commit(point.PUT_VARIABLENAME, { updatedValue, id })
        }
    )
  },
  [point.DELETE]({commit}, id) {
    APIRequest(
        getRequestContext(
            pointNamespace,
            point.DELETE,
            id
        ),
        { },
        deletedId => {
          commit(point.DELETE, deletedId)
        }
    )
  },
}
