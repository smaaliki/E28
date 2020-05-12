import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from '../src/components/pages/HomePage.vue';
import SPRsPage from '../src/components/pages/SPRsPage.vue';
import DashboardPage from '../src/components/pages/DashboardPage.vue';
import AdminPage from '../src/components/pages/AdminPage.vue';
import SPRPage from '@/components/pages/SPRPage.vue';
import CreateSPRPage from '@/components/pages/CreateSPRPage.vue';

Vue.use(VueRouter);
const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/sprs', component: SPRsPage, name: 'SPRs' },
  { path: '/dashboard', component: DashboardPage, name: 'Dashboard' },
  { path: '/admin', component: AdminPage, name: 'admin' },
  { path: '/spr/:slug', component: SPRPage, name: 'spr', props: true },
  { path: '/sprs/create', component: CreateSPRPage, name: 'add an spr' },
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
