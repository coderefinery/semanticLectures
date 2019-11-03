import episodeNamespace, * as episode from './types'
import APIRequest, { getRequestContext } from '../APIRequest'

export default {
  [episode.GET_LIST]({commit}) {
    APIRequest(
        getRequestContext(
            episodeNamespace,
            episode.GET_LIST,
        ),
        {},
        items => {
          commit(episode.GET_LIST, items)
        }
    )
  },
  [episode.POST]({commit}, unsavedItem) {
    APIRequest(
        getRequestContext(
            episodeNamespace,
            episode.POST,
        ),
        { newItem: unsavedItem },
        savedItem => {
          commit(episode.POST, savedItem)
        }
    )
  },
  [episode.PUT_DISPLAYNAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            episodeNamespace,
            episode.PUT_DISPLAYNAME,
            id
        ),
        {updatedValue},
        () => {
          commit(episode.PUT_DISPLAYNAME, { updatedValue, id })
        }
    )
  },
  [episode.PUT_DESCRIPTION]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            episodeNamespace,
            episode.PUT_DESCRIPTION,
            id
        ),
        {updatedValue},
        () => {
          commit(episode.PUT_DESCRIPTION, { updatedValue, id })
        }
    )
  },
  [episode.PUT_VARIABLENAME]({commit}, { updatedValue, id }) {
    APIRequest(
        getRequestContext(
            episodeNamespace,
            episode.PUT_VARIABLENAME,
            id
        ),
        {updatedValue},
        () => {
          commit(episode.PUT_VARIABLENAME, { updatedValue, id })
        }
    )
  },
  [episode.DELETE]({commit}, id) {
    APIRequest(
        getRequestContext(
            episodeNamespace,
            episode.DELETE,
            id
        ),
        { },
        deletedId => {
          commit(episode.DELETE, deletedId)
        }
    )
  },
}
