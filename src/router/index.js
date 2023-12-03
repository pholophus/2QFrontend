import { createRouter, createWebHistory } from 'vue-router';
import CompanyList from '../views/CompanyList.vue';
import AddCompany from '../views/AddCompany.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'CompanyList',
    component: CompanyList,
  },
  {
    path: '/add',
    name: 'AddCompany',
    component: AddCompany,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
