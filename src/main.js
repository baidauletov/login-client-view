import Vue from 'vue'
import App from './App.vue'
import i18n from './js/i18n/i18n.js'

import VueMask from 'v-mask'
Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
