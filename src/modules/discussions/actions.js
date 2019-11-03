import discussionNamespace, * as discussion from './types'
import APIRequest, { getRequestContext } from '../APIRequest'

export default {
  [discussion.GET_LIST]({commit}) {
    APIRequest(
        getRequestContext(
            discussionNamespace,
            discussion.GET_LIST,
        ),
        {},
        items => {
          commit(discussion.GET_LIST, items)
        }
    )
  },
  [discussion.POST]({commit}, unsavedItem) {
    APIRequest(
        getRequestContext(
            discussionNamespace,
            discussion.POST,
        ),
        { newItem: unsavedItem },
        savedItem => {
          commit(discussion.POST, savedItem)
        }
    )
  },
  [discussion.PUT_DISPLAYNAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            discussionNamespace,
            discussion.PUT_DISPLAYNAME,
            id
        ),
        {updatedValue},
        () => {
          commit(discussion.PUT_DISPLAYNAME, { updatedValue, id })
        }
    )
  },
  [discussion.PUT_DESCRIPTION]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            discussionNamespace,
            discussion.PUT_DESCRIPTION,
            id
        ),
        {updatedValue},
        () => {
          commit(discussion.PUT_DESCRIPTION, { updatedValue, id })
        }
    )
  },
  [discussion.PUT_VARIABLENAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            discussionNamespace,
            discussion.PUT_VARIABLENAME,
            id
        ),
        {updatedValue},
        () => {
          commit(discussion.PUT_VARIABLENAME, { updatedValue, id })
        }
    )
  },
  [discussion.DELETE]({commit}, id) {
    APIRequest(
        getRequestContext(
            discussionNamespace,
            discussion.DELETE,
            id
        ),
        { },
        deletedId => {
          commit(discussion.DELETE, deletedId)
        }
    )
  },
}
