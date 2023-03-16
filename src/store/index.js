import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    key: 'store',
    storage: window.sessionStorage,
  });

const store = createStore({
    state,
    actions,
    mutations,
    getters,
    plugins: [vuexLocal.plugin],
})

export default store