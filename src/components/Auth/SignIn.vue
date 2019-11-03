<template>
  <v-container fill-height>
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-text-field
                v-model="email"
                prepend-icon="person"
                name="email"
                label="Email"
                type="email"
                :rules="emailRules"
                required
              />
              <v-text-field
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                :rules="passwordRules"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              :disabled="!valid"
              @click.stop="login"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "../../modules/auth"
import * as actions from "../../modules/auth/types"

export default {
  name: 'Signin',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v =>
          v.length >= 8 ||
          'Password must be longer than 7 characters'
      ]
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions([
        actions.POST_LOGIN,
      ]
    ),
    login() {
      const method = this[actions.POST_LOGIN]

      if (this.$refs.form.validate()) {
        method({
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
