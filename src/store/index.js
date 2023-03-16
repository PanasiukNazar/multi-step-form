import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';
import form from './modules/form/index.js'

const vuexLocal = new VuexPersistence({
    key: 'store',
    storage: window.sessionStorage,
  });

const store = createStore({
    modules: {
        form
    },
    plugins: [vuexLocal.plugin],
})

export default store