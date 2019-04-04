import Vue from 'vue'
import Router from 'vue-router'
import auctionList from '@/components/auctionList' 

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/auctionList',
      name: 'auctionList',
      component: auctionList
    }
  ]
})
