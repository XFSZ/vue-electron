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
      path: '/comprehensivesituation',
      name: 'comprehensive-situation',
      component: require('@/components/ComprehensiveSituation').default
    },
    {
      path: '/qualitymaintenance',
      name: 'quality-maintenance',
      component: require('@/components/QualityMaintenance').default
    },
    {
      path: '/supplyguarantee',
      name: 'supply-guarantee',
      component: require('@/components/SupplyGuarantee').default
    },
    {
      path: '/',
      name: 'main-page',
      component: require('@/components/MainPage').default
      // children: [
      //   {
      //     path: 'radar',
      //     component: require('@/components/LandingPage').default
      //   },
      //   {

      //     path: 'groundmissile',
      //     component: require('@/components/LandingPage').default
      //   }
      // ]
    },
    {
      path: '/useddetail/radar',
      name: 'used-detail-page1',
      component: require('@/components/MainPageComponents/Radar').default

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
