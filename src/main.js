import 'font-awesome/css/font-awesome.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router'
import store from './config/store'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App)
.use(store)
.use(router)
.use(BootstrapVue3)
.mount('#app')
