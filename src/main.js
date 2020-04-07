/*Bootstrap v4.4.1*/
import 'bootstrap'

/*VueJs*/
import Vue from 'vue'
import App from './App.vue'

/*Router & Store*/
import router from './router'
import store from './store'

/*Syncfusion*/
import { GridPlugin } from '@syncfusion/ej2-vue-grids'
Vue.use(GridPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')