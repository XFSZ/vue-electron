import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init-page',
      component: require('@/components/InitPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
