import Vue from 'vue'
import Router from 'vue-router'
import auctionList from '@/components/auctionList'
import TheLogin from '@/views/TheLogin' //登录页面
import TheMain from '@/views/TheMain' //首页
import PermissionNode from '@/views/RBACAdministration/PermissionNode' //RBACA管理-权限节点
import PrivilegeGrouping from '@/views/RBACAdministration/PrivilegeGrouping' //RBACA管理-权限分组
import RBACAdministrators from '@/views/RBACAdministration/RBACAdministrators' //RBACA管理-管理员
Vue.use(Router)

export default new Router({
	routes: [{
			//登录页
			path: '/Login',
			name: 'Login',
			component: TheLogin
		}, {
			path: '/',
			component: TheMain,
			children: [{
				path: '/TheMain',
				component: TheMain,
				name: 'TheMain',
				hidden: true
			}, {
				//RBACA管理-权限节点
				path: '/PermissionNode',
				component: PermissionNode,
				name: 'PermissionNode'
			}, {
				//RBACA管理-权限分组
				path: '/PrivilegeGrouping',
				component: PrivilegeGrouping,
				name: 'PrivilegeGrouping'
			}, {
				////RBACA管理-管理员
				path: '/RBACAdministrators',
				component: RBACAdministrators,
				name: 'RBACAdministrators'
			}]
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