<template>
  <div id="app">
    <header-page/>
    <!-- <main-page/> -->
    <router-view></router-view>
    <init-page/>
   
  </div>
</template>

<script>

import InitPage from './components/InitPage';
import HeaderPage from './components/HeaderPage';
import MainPage from './components/MainPage';
export default {
  name: 'kj',
  components: {
    InitPage,
    HeaderPage,
    MainPage
  }
};
</script>

<style>
  /* CSS */
</style>
