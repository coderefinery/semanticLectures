import * as point from "./types";

export default {
  [point.GET_LIST](state, items) {
    state.items = items
  },
  [point.POST](state, item) {
    state.items.push(item)
  },
  [point.PUT_DISPLAYNAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].displayName = updatedValue
  },
  [point.PUT_DESCRIPTION](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].description = updatedValue
  },
  [point.PUT_VARIABLENAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].variableName = updatedValue
  },
  [point.DELETE](state, deletedId) {
    let i = state.items.map(item => item._id).indexOf(deletedId)
    state.items.splice(i, 1)
  },

}
