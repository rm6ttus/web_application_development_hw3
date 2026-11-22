import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './HomeView.vue';
import SignupView from './SignupView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/signup', name: 'Signup', component: SignupView }
  ]
});
