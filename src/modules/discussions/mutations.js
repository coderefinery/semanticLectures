import * as discussion from "./types";

export default {
  [discussion.GET_LIST](state, items) {
    state.items = items
  },
  [discussion.POST](state, item) {
    state.items.push(item)
  },
  [discussion.PUT_DISPLAYNAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].displayName = updatedValue
  },
  [discussion.PUT_DESCRIPTION](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].description = updatedValue
  },
  [discussion.PUT_VARIABLENAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].variableName = updatedValue
  },
  [discussion.DELETE](state, deletedId) {
    let i = state.items.map(item => item._id).indexOf(deletedId)
    state.items.splice(i, 1)
  },

}
