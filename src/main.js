import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as firebase from 'firebase'
import {store} from './store'
import DateFilter from './filters/date'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyB0_eWgQxyQRZ0bsQ6NghDEFDQfX_yQ0tY",
      authDomain: "meetup-vue-d3599.firebaseapp.com",
      databaseUrl: "https://meetup-vue-d3599.firebaseapp.com",
      projectId: "meetup-vue-d3599",
      storageBucket: "meetup-vue-d3599.appspot.com",
    })
  }
}).$mount('#app')
