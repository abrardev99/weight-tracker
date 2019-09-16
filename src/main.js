import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'
import "@/plugins/echarts";
import Datatable from 'vue2-datatable-component'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Datatable) // done!

// using bootstrap for vue.js 
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
