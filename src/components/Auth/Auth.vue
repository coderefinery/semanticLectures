<template>
  <span>
    <div v-if="!user"><!-- todo: use {routes} of router.js for stability -->
      <v-btn-toggle>
        <v-btn
          text
          title="join"
          to="/join"
        >
          <v-icon>person_add</v-icon>
        </v-btn>
        <v-btn
          text
          title="sign in"
          to="/signin"
        >
          <v-icon>fingerprint</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
    <div v-else>
      <v-btn-toggle>
        <v-btn
          text
          data-cy="logout"
          @click="logout"
        >fas fa-power-off</v-btn>
      </v-btn-toggle>
    </div>
  </span>
</template>

<script>
import { mapState } from "../../modules/auth"
import { DELETE_LOGIN } from '../../modules/auth/types'

export default {
  name: 'Auth',
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    logout() {
      this.$store.dispatch(DELETE_LOGIN)
    }
  }
}
</script>

<style scoped>

</style>
