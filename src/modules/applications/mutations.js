import * as application from "./types";

export default {
  [application.GET_LIST](state, items) {
    state.items = items
  },
  [application.POST](state, item) {
    state.items.push(item)
  },
  [application.PUT_DISPLAYNAME](state, { appId, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(appId)
    state.items[i].displayName = updatedValue
  },
  [application.PUT_DESCRIPTION](state, { appId, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(appId)
    state.items[i].description = updatedValue
  },
  [application.PUT_VARIABLENAME](state, { appId, updatedValue }) {
    let i = state.items.map(item => item._id).indexOf(appId)
    state.items[i].variableName = updatedValue
  },
  [application.DELETE](state, deletedId) {
    let i = state.items.map(item => item._id).indexOf(deletedId)
    state.items.splice(i, 1)
  },

}
