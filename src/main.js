import Vue from 'vue'
import App from './App'
import router from './router'
import store from './modules'
import moment from 'moment'
import _ from 'lodash'
import vuetify from '@/plugins/vuetify'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import VueSimpleMarkdown from 'vue-simple-markdown'

Vue.config.productionTip = false

Vue.use(VueSimpleMarkdown)

// prefetch self-nested components
Vue.component('ReStructuredTextOutput', () => import('./components/ReStructuredText/ReStructuredTextOutput'))

Vue.prototype.moment = moment
Vue.prototype._ = _

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  icons: {
    iconfont: 'fa' // 'mdi'
  },
  store,
  router,
  vuetify,
}).$mount('#app')
