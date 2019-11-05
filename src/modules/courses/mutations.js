import * as course from "./types";

export default {
  [course.GET_LIST](state, items) {
    state.items = [...items]
  },
  [course.POST](state, item) {
    state.items.push(item)
  },
  [course.PUT_DISPLAYNAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].displayName = updatedValue
  },
  [course.PUT_DESCRIPTION](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].description = updatedValue
  },
  [course.PUT_VARIABLENAME](state, { id, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(id)
    state.items[i].variableName = updatedValue
  },
  [course.DELETE](state, deletedId) {
    let i = state.items.map(item => item._id).indexOf(deletedId)
    state.items.splice(i, 1)
  },

}
