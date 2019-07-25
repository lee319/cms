/* eslint-disable*/
import Vue from 'vue'
import App from './App'
import store from './vuex' // vuex
import Bus from './utils/bus'
import router from './router' // 路由
import ElementUi from 'element-ui'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from './utils/axios'; // axios请求方法
import i18n from './lang';
// import locale from 'iview/dist/locale/en-US';
// import './utils/rem' 移动端项目请解开注释
// Vue.use(iView, {locale})
Vue.use(ElementUi, {
  i18n: (key, value) => i18n.t(key, value)
})
// Vue.use(iView);
Vue.use(iView, {
  transfer: true,
  size: 'large',
  select: {
      arrow: 'md-arrow-dropdown',
      arrowSize: 20
  }
});
Vue.prototype.$bus = Bus // vue原型挂载bus

// Vue.prototype.$axios = axios 
Vue.prototype.$http = axios // vue原型挂载axios
Vue.prototype.baseURL = process.env.BASE_API;


Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
})
