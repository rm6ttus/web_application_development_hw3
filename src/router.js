import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './HomeView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeView }
  ]
});

