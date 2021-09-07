import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import './request'; // axios请求相关配置
import './assets/styles/index.less';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
