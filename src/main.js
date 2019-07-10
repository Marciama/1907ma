import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/flexble'
import axios from 'axios'
Vue.prototype.$axios=axios;
Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)

import "./module/module"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
