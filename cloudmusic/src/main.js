import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Elementui from 'element-ui'
// import '../swiper1/swiper-bundle.min.css'
// import '../swiper1/swiper-bundle.min.js'
import 'element-ui/lib/theme-chalk/index.css'
import flex from '../node_modules/flexible.js'

import axios from '../axios-0.18.0.js'
// import axios from '../axios-0.18.0'

axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

// Vue.config.productionTip = false

// setup() {
//   return{
//     Avatar,
//     Lock
//   }
// }

Vue.use(Elementui)
flex(1920,1920)
// Vue.use(Search)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
