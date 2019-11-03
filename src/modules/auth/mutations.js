import * as auth from "./types";

export default {
  [auth.SET_USER](state, user) {
    state.user = { ...user }
  }
}
