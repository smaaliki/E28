import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router';
import AdminPage from '@/components/pages/AdminPage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import HomePage from '@/components/pages/HomePage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import ProductCreatePage from '@/components/pages/ProductCreatePage.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/admin', component: AdminPage, name: 'admin' },
  { path: '/products', component: ProductsPage, name: 'products'},
  { path: '/product/:slug', component: ProductPage, name: 'product', props: true },
  { path: '/categories', component: CategoriesPage, name: 'categories' },
  { path: '/products/create', component: ProductCreatePage, name: 'add a product' },
]

const router = new VueRouter({
  routes: routes,
  mode:'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
