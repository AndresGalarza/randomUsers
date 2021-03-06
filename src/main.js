import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
Vue.use(VueMaterial);
Vue.use(require('vue-moment'));
Vue.filter('yearsOld', require('./filters/yearsOld.js'));
Vue.filter('upperCase', require('./filters/upperCase.js'));


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
