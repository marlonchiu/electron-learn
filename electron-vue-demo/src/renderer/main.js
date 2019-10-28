import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
import {
  Container,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  Icon
} from 'element-ui'
Vue.use(Container).use(Aside).use(Menu).use(Submenu).use(MenuItem).use(Icon)

// 引入socket.io配置连接
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://118.123.14.36:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.config.devtools = true // ==> This line is needed for VueTools <<===

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
