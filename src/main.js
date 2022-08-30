import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fullscreen from 'vue-fullscreen'
import http from '../utils/http'
Vue.use(fullscreen)
Vue.prototype.$http = http

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUi)
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
