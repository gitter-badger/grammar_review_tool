'use strict'

import Vue from 'vue'
import 'bootstrap/dist/js/bootstrap'
import './messenger-setup'
import './ajax-setup'
import App from 'Components/App'
import GrammarView from 'Components/GrammarView'

Vue.component('app', App)
Vue.component('grammar-view', GrammarView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
})
