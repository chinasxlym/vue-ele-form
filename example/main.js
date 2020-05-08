import Vue from 'vue'
import App from './App.vue'
import VueRunSfc from 'vue-run-sfc'
import { Link } from 'element-ui'

Vue.use(Link)
Vue.use(VueRunSfc, {
  jsLabs: [
    'https://unpkg.com/element-ui@2.13.1/lib/index.js',
    'https://unpkg.com/vue-ele-form'
  ],
  cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css']
})

new Vue({
  render: h => h(App)
}).$mount('#app')
