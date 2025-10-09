import AuthorPage from '@/components/AuthorPage.vue';
import BookPage from '@/components/BookPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import BookCollectionPage from '@/components/BookCollectionPage.vue';
import AuthenticationPage from '@/components/AuthenticationPage.vue';

const routes = [
  { path: '/', redirect: '/authors' },
  { path: '/authors', component: AuthorPage },
  { path: '/books', component: BookPage },
  { path: '/book-collections', component: BookCollectionPage },
  { path: '/connect', component: AuthenticationPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
