import Vue from 'vue'
import App from './App'
import router from './components/router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)


var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
