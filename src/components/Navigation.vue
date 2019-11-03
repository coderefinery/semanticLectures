<template>
  <div class="navigation">
    <v-toolbar id="navigation">
      <v-toolbar-items>
        <v-btn
          v-show="$vuetify.breakpoint.mdAndDown"
          @click.stop="drawer = !drawer"
        >
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title>
        <span
          class="hidden-md-and-down"
          @click="$router.push('/')"
        >
          Semantic Lectures
        </span>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          v-for="(route, index) in navBarRoutes"
          :key="index"
          text
          :value="isActivePath(route.path)"
          @click="push(route.path)"
        >
          {{route.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer class="hidden-md-and-up" />
      <auth />
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      disable-resize-watcher
    >
      <v-list
        class="pt-0"
        dense
      >
        <v-list-item
          v-for="route in menuRoutes"
          :key="route.title"
          @click="push(route.path)"
        >
          <v-list-item-action class="text-left">
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content class="text-right">
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Auth from './Auth/Auth'
import {routes} from '../router'

export default {
  name: 'Navigation',
  components: {
    Auth
  },
  data() {
    return {
      routes,
      menuRoutes: routes.filter(r => r.inMenu),
      drawer: false
    }
  },
  computed: {
    navBarRoutes() {
      const currentBreakpoint = this.$vuetify.breakpoint.name
      const viewportBreakpointRoutes = {
        xs: ['/courses'],
        sm: ['/search', '/courses'],
        md: ['/search', '/courses'],
        lg: ['/search', '/courses'],
        xl: ['/search', '/courses'],
      }
      const navBarLinks = this.routes.filter(r => viewportBreakpointRoutes[currentBreakpoint].indexOf(r.path) >= 0)
      return navBarLinks
    }
  },
  methods: {
    isActivePath(path) {
      return this.$router.currentRoute.path === path
    },
    push(url) {
      this.drawer = false
      this.$router.push(url)
    },
    onInput(v) {
      console.log('oninput', v)

    }
  }
}
</script>
