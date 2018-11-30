import Vue from 'vue'
import router from './router'
import Antd from 'ant-design-vue'
import App from './App'
import './theme/common.less'

Vue.use(Antd)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
