import Vue from 'vue'
import Application from './Application.vue'
import './assets/index.css';

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(Application) },
}).$mount('#app')
