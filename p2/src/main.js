import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from '../src/components/pages/HomePage.vue';
import SPRsPage from '../src/components/pages/SPRsPage.vue';
import DashboardPage from '../src/components/pages/DashboardPage.vue';
import AdminPage from '../src/components/pages/AdminPage.vue';

Vue.use(VueRouter);
const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/sprs', component: SPRsPage, name: 'sprs' },
  { path: '/dashboard', component: DashboardPage, name: 'dashboard' },
  { path: '/admin', component: AdminPage, name: 'admin' },
]

Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode:'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
