import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import SearchResults from './components/SearchResults.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  { path: '/search/:term',
    component: SearchResults,
    props: true },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
