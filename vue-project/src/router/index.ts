import AuthorCard from '@/components/AuthorCard.vue';
import AuthorPage from '@/components/AuthorPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/authors' },
  { path: '/authors', component: AuthorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
