import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import './request'; // axios请求相关配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/index.less';
import './components';

// Vue.use(ElementUI);

Vue.use(ElementUI, {
  size: 'small' // set element-ui default size
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
