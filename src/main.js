import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'
import "@/plugins/echarts";
import Datatable from 'vue2-datatable-component'

Vue.use(Datatable) // done!

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
