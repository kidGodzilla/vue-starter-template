import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueBootstrap from 'bootstrap-vue'

import HelloWorld from './components/HelloWorld.vue'
import Location from './components/Location.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueBootstrap)

const routes = [
    { path: '*', redirect: '/hello' },
    { path: '/hello', component: HelloWorld, name: 'Hello World' },
    { path: '/location', component: Location, name: 'Location' },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
