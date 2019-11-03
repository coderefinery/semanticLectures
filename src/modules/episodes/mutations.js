import * as episode from "./types";

export default {
  [episode.GET_LIST](state, items) {
    state.items = items
  },
  [episode.POST](state, item) {
    state.items.push(item)
  },
  [episode.PUT_DISPLAYNAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].displayName = updatedValue
  },
  [episode.PUT_DESCRIPTION](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].description = updatedValue
  },
  [episode.PUT_VARIABLENAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].variableName = updatedValue
  },
  [episode.DELETE](state, deletedId) {
    let i = state.items.map(item => item._id).indexOf(deletedId)
    state.items.splice(i, 1)
  },

}
