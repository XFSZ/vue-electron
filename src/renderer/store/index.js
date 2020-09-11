import Vue from 'vue'
import Vuex from 'vuex'

// {{#isEnabled plugins 'vuex-electron'}}
// import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  // {{#isEnabled plugins 'vuex-electron'}}
  // plugins: [
  //   createPersistedState(),
  //   createSharedMutations()
  plugins: process.env.IS_WEB ? [] : [
    require('vuex-electron').createPersistedState(),
    require('vuex-electron').createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
