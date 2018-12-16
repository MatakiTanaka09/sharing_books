// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from '@/App'
import router from '@/router/router'
import store from '@/store/'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Firebase.init()
Firestore.init()
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
