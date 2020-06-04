import Vue from 'vue'
import App from './App.vue'
import store from '@/common/store'
import {Tabs, Tab} from 'vue-tabs-component';
 
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
