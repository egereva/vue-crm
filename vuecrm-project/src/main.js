import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyDmVbJQcHRV2YbBSLlsLq7WHJe_ScJvlYo',
  authDomain: 'vue-crm-a23f1.firebaseapp.com',
  databaseURL: 'https://vue-crm-a23f1.firebaseio.com',
  projectId: 'vue-crm-a23f1',
  storageBucket: 'vue-crm-a23f1.appspot.com',
  messagingSenderId: '439331743332',
  appId: '1:439331743332:web:35bff74581fb44a41b6171'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
