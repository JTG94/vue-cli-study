import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'

Vue.use(VueRouter)

//라우터 정보를 관리하는 객체
//path : url 주소에 대한 정보
//componet : url 주소로 갔을 때 표시 될 컴포넌트 
export const router = new VueRouter({
  routes: [
    {
      path: '/news',
      component: NewsView
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: '/jobs',
      component: JobsView
    }
  ]
});