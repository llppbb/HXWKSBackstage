import Vue from 'vue'
import Router from 'vue-router'
import auctionList from '@/components/auctionList' 
import TheLogin from '@/views/TheLogin' //登录页面
import TheMain from '@/views/TheMain'  //首页
Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'Login',
      component: TheLogin 
    },
    {
      path: '/TheMain',
      name: 'TheMain',
      component: TheMain 
    },
//  {
//      path: '/main',
//      component: TheMain,
//      name: '导航一',
//      iconCls: 'el-icon-message',//图标样式class
//      children: [
//          { path: '/form', component: Form, name: 'Form' }
//      ]
//  }
  ]
})
