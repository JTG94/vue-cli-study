//main.js 는 기본적으로 애플리케이션의 설정들 플러그인과 라이브러리, 구조들을 파악할수 있는 청사진 역할
//여기서 router를 설정하면 너무 router 편향적으로 되기때문에 따로 router폴더를 만들어 관리
import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
