import _ from 'lodash'
import Vue from 'vue'
import Router from 'vue-router'
import store from './modules'
import { SET_BOX_FACE } from './modules/box/types'
import Home from './components/Home.vue'
import Courses from './components/Courses/Courses.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/join',
    title: 'join',
    icon: 'person_add',
    component: () => import(/* webpackChunkName: "auth" */ './components/Auth/Join.vue')
  },
  {
    path: '/signin',
    title: 'signin',
    icon: 'fingerprint',
    component: () => import(/* webpackChunkName: "auth" */ './components/Auth/SignIn.vue')
  },
  {
    path: '/',
    title: 'Welcome',
    icon: 'home',
    inMenu: true,
    component: Home
  },
  {
    path: '/courses',
    title: 'Courses',
    icon: 'dashboard',
    inMenu: true,
    component: Courses
  },
  {
    path: '/search',
    title: 'Search',
    icon: 'search',
    inMenu: true,
    component: () => import(/* webpackChunkName: "search" */ './components/Search.vue')
  },
  {
    path: '*',
    title: 'notFound',
    component: () => import('./components/notFound.vue')
  }
]

const router = new Router({routes})
const boxFaces = ['front', 'back', 'right', 'left', 'top', 'bottom']
const pathFaces = {
  '/': 'front',
  '/courses': 'top',
  '/login': 'right',
  '/search': 'back',
}

function getComponent(route) {
  let component = route.matched[0]
  const path = component.path || '/' // home path is just empty, but route configured with /
  if (component) {
    const matchingRoute = router.options.routes.find(route => route.path === path)
    if (matchingRoute) {
      component = matchingRoute.component
    }
  }
  return component
}
function maintainViews(to, from) {
  if (from.matched[0]) {
    _.assign(to.matched[0].components, from.matched[0].components)
  }
}
function setToFaceComponents(to, from, toFace) {
  maintainViews(to, from)
  let faces = getOtherFaces()
  faces.splice(toFace)
  to.matched[0].components[toFace] = getComponent(to)
}

function findRenderedViewFace(to, from) {
  let routeViews = from.matched[0]
  let componentView
  if (routeViews) {
    routeViews = routeViews.components
    for (let view in routeViews) {
      console.log('routeViews[view]', routeViews[view])
      console.log('to', to)

      if (routeViews[view].title.toLowerCase() === to.path) { // todo: smell: obscure dependency of title and route
        componentView = view
      }
    }
  }
  return componentView
}
function getRandomOtherFace() {
  let otherFaces = getOtherFaces()
  return otherFaces.splice(Math.floor(Math.random() * otherFaces.length), 1)[0]
}
function getOtherFaces() {
  let fromFace = 0
  if (store.state) fromFace = store.state.box.face
  let otherFaces = _.clone(boxFaces)
  if (boxFaces.indexOf(fromFace) !== -1) {
    otherFaces.splice(boxFaces.indexOf(fromFace), 1)
  }
  return otherFaces
}
function getViewFace(to, from) {
  let toFace = pathFaces[to.path]
  if (!toFace) {
    toFace = findRenderedViewFace(to, from)
  }
  if (!toFace) {
    toFace = getRandomOtherFace(to, from)
  }
  return toFace
}
function turnBoxToShowView(toFace) {
  store.commit('box/' + SET_BOX_FACE, toFace) // turn router-view box to requested view
}
function mapViewsToBoxFaces(to, from, next) {
  const toFace = getViewFace(to, from)
  setToFaceComponents(to, from, toFace)
  turnBoxToShowView(toFace)
  next()
}

router.beforeEach(mapViewsToBoxFaces)
export default router
