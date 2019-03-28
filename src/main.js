// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import {api} from './api/api.js'
import 'mint-ui/lib/style.css'

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.api = api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
