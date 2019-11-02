import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      count: 0,
      header: '',
      imageUrl: '',
      blurb: ''
  },
  mutations: {
    increment (state) {
      state.count++
    },
    updateBanner (state, payload) {
      state.header = payload.payload.en['banner-1']['jcr:content'].data.master.header;
      state.imageUrl = payload.payload.en['banner-1']['jcr:content'].data.master.image;
      state.blurb = payload.payload.en['banner-1']['jcr:content'].data.master.blurb;
    }
  },
  actions: {
    increment (context) {
        context.commit('increment')
    },
    updateBanner (context, payload) {
        context.commit('updateBanner', payload)
    }
}
});

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({routes});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
