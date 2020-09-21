import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/initpage',
      name: 'init-page',
      component: require('@/components/InitPage').default
    },
    {
      path: '/qualitymaintenance',
      name: 'quality-maintenance',
      component: require('@/components/QualityMaintenance').default
    },
    {
      path: '/',
      name: 'main-page',
      component: require('@/components/MainPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/testpage',
      name: 'test-page',
      component: require('@/components/LandingPage').default
    }

  ]
});
