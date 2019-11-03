import exampleNamespace, * as example from './types'
import APIRequest, { getRequestContext } from '../APIRequest'

export default {
  [example.GET_LIST]({commit}) {
    APIRequest(
        getRequestContext(
            exampleNamespace,
            example.GET_LIST,
        ),
        {},
        items => {
          commit(example.GET_LIST, items)
        }
    )
  },
  [example.POST]({commit}, unsavedItem) {
    APIRequest(
        getRequestContext(
            exampleNamespace,
            example.POST,
        ),
        { newItem: unsavedItem },
        savedItem => {
          commit(example.POST, savedItem)
        }
    )
  },
  [example.PUT_DISPLAYNAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            exampleNamespace,
            example.PUT_DISPLAYNAME,
            id
        ),
        {updatedValue},
        () => {
          commit(example.PUT_DISPLAYNAME, { updatedValue, id })
        }
    )
  },
  [example.PUT_DESCRIPTION]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            exampleNamespace,
            example.PUT_DESCRIPTION,
            id
        ),
        {updatedValue},
        () => {
          commit(example.PUT_DESCRIPTION, { updatedValue, id })
        }
    )
  },
  [example.PUT_VARIABLENAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            exampleNamespace,
            example.PUT_VARIABLENAME,
            id
        ),
        {updatedValue},
        () => {
          commit(example.PUT_VARIABLENAME, { updatedValue, id })
        }
    )
  },
  [example.DELETE]({commit}, id) {
    APIRequest(
        getRequestContext(
            exampleNamespace,
            example.DELETE,
            id
        ),
        { },
        deletedId => {
          commit(example.DELETE, deletedId)
        }
    )
  },
}
