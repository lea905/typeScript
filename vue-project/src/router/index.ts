import AuthorPage from '@/components/AuthorPage.vue';
import BookPage from '@/components/BookPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/authors' },
  { path: '/authors', component: AuthorPage },
  { path: '/books', component: BookPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
