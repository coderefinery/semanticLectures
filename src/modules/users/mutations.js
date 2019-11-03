import * as users from "./types";

export default {
  [users.PUT_EMAILS](state, newVal) {
    state.user.emails = [ ...newVal ]
  },
  [users.SET_USER](state, user) {
    state.user = { ...user }
  }
}
