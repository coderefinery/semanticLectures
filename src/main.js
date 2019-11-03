import Vue from 'vue'
import App from './App'
import router from './router'
import store from './modules'
import moment from 'moment'
import _ from 'lodash'
import vuetify from '@/plugins/vuetify'
import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false

Vue.prototype.moment = moment
Vue.prototype._ = _

/* eslint-disable no-new */
new Vue({
  components: {
    VueMarkdown
  },
  render: h => h(App),
  icons: {
    iconfont: 'fa' // 'mdi'
  },
  store,
  router,
  vuetify,
}).$mount('#app')
