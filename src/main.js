import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import './request'; // axios请求相关配置
import './assets/styles/index.less';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

/* new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app'); */

let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 通过window.__POWERED_BY_QIANKUN__判断是否是接入qiankun方式启动服务
if (window.__POWERED_BY_QIANKUN__) {
  // __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}

// 导出给主应用接入的三个接口
export async function bootstrap(props) {}
export async function mount(props) {
  render(props);
}
export async function unmount(props) {
  instance.$destroy()
}
