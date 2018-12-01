// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuex, { Store } from 'vuex'
import store from './store'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Store(store),
  components: { App },
  template: '<App/>'
})
