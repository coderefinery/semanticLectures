import courseNamespace, * as course from './types'
import APIRequest, { getRequestContext } from '../APIRequest'

export default {
  [course.GET_LIST]({commit}) {
    APIRequest(
        getRequestContext(
            courseNamespace,
            course.GET_LIST,
        ),
        {},
        items => {
          commit(course.GET_LIST, items)
        }
    )
  },
  [course.POST]({commit}, unsavedItem) {
    APIRequest(
        getRequestContext(
            courseNamespace,
            course.POST,
        ),
        { newItem: unsavedItem },
        savedItem => {
          commit(course.POST, savedItem)
        }
    )
  },
  [course.PUT_DISPLAYNAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            courseNamespace,
            course.PUT_DISPLAYNAME,
            id
        ),
        {updatedValue},
        () => {
          commit(course.PUT_DISPLAYNAME, { updatedValue, id })
        }
    )
  },
  [course.PUT_DESCRIPTION]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            courseNamespace,
            course.PUT_DESCRIPTION,
            id
        ),
        {updatedValue},
        () => {
          commit(course.PUT_DESCRIPTION, { updatedValue, id })
        }
    )
  },
  [course.PUT_VARIABLENAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            courseNamespace,
            course.PUT_VARIABLENAME,
            id
        ),
        {updatedValue},
        () => {
          commit(course.PUT_VARIABLENAME, { updatedValue, id })
        }
    )
  },
  [course.DELETE]({commit}, id) {
    APIRequest(
        getRequestContext(
            courseNamespace,
            course.DELETE,
            id
        ),
        { },
        deletedId => {
          commit(course.DELETE, deletedId)
        }
    )
  },
}
