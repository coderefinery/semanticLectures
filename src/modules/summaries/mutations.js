import * as summary from "./types";

export default {
  [summary.GET_LIST](state, items) {
    state.items = items
  },
  [summary.POST](state, item) {
    state.items.push(item)
  },
  [summary.PUT_DISPLAYNAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].displayName = updatedValue
  },
  [summary.PUT_DESCRIPTION](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].description = updatedValue
  },
  [summary.PUT_VARIABLENAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].variableName = updatedValue
  },
  [summary.DELETE](state, deletedId) {
    let i = state.items.map(item => item._id).indexOf(deletedId)
    state.items.splice(i, 1)
  },

}
