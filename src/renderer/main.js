import Vue from 'vue';
import Element from 'element-ui';
import axios from 'axios';
import echarts from 'echarts';

import App from './App';
import router from './router';
import store from './store';

import './assets/font/stheitisc.css';
// if (!process.env.IS_WEB) Vue.use(require('vue-electron')) //源
if (!process.env.IS_WEB) Vue.use(VUE_ELECTRON); // 改
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.use(Element);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app');
