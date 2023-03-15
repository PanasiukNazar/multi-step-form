import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';
import form from './modules/form/index.js'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    key: 'store',
    storage: window.sessionStorage,
  });

const store = new Vuex.Store({
    modules: {
        form
    },
    plugins: [vuexLocal.plugin],
})

export default store