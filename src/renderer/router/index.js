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
      path: '/used',
      name: 'main-page',
      component: require('@/components/MainPage').default,
      children: [

        {
          path: 'useddetail/radar',
          name: 'used-detail-radar',
          component: require('@/components/MainPageComponents/Radar').default

        },
        {
          path: 'useddetail/groundmissile',
          name: 'used-detail-groundmissile',
          component: require('@/components/MainPageComponents/GroundMissile').default

        },
        {
          path: 'useddetail/warplane',
          name: 'used-detail-warplane',
          component: require('@/components/MainPageComponents/WarPlane').default

        }
      ]
    },
    // {
    //   path: '/useddetail/radar',
    //   name: 'used-detail-radar',
    //   component: require('@/components/MainPageComponents/Radar').default

    // },
    // {
    //   path: '/useddetail/radar',
    //   name: 'used-detail-radar',
    //   component: require('@/components/MainPageComponents/Radar').default

    // },
    // {
    //   path: '/useddetail/groundmissile',
    //   name: 'used-detail-groundmissile',
    //   component: require('@/components/MainPageComponents/GroundMissile').default

    // },
    // {
    //   path: '/useddetail/warplane',
    //   name: 'used-detail-warplane',
    //   component: require('@/components/MainPageComponents/WarPlane').default

    // },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      redirect: '/used'
    },
    {
      path: '/testpage',
      name: 'test-page',
      component: require('@/components/LandingPage').default
    }

  ]
});
