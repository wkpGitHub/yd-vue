# yd-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 关于axios
```
axios配置放在src/request文件, 使用实例
this.$axios.get(`url`).then(res => {
  console.log(res.data)
})
```

### 各个文件说明
|文件夹|说明|
|--|--|
|assets/imgs|放图片|
|assets/styles|放样式文件|
|config|配置文件，写在config里，包含下拉选项固定数据等等|
|components|放公用组件，不要放router组件|
|directives|全局directive注册，在这里注册|
|filters| 全局filters注册，在这里注册|
|mixins| 全局mixins注册，在这里注册|
|pages| router页面的vue文件，在这里写，不建议按照菜单嵌套文件夹，以router页面为维度平铺|
|request|请求相关配置，接口写在request/apis.js里|
|utils|其他的工具函数写在这里面|

