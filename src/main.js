// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Axios.defaults.withCredentials=true
import {axiosGet,axiosPost} from './public/axios.js';
import Global from '@/components/TheCommon' //公用变量  方法
//import './config/rem'  PC端不引入 rem
import { Popover,Tooltip,Radio,RadioGroup,RadioButton,Button, Select,Input ,Row,Col,Form,FormItem, Icon,InputNumber,Message,ColorPicker ,Container, Header, Aside,Main,Footer,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui'
Vue.config.productionTip = false
Vue.prototype.$axios=Axios;
Vue.use(Button);
Vue.use(Select);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon); 
Vue.use(ColorPicker);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer); 
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Tooltip);
Vue.use(Popover); 
Vue.prototype.axiosGet = axiosGet   //放入全局 
Vue.prototype.axiosPost = axiosPost   //放入全局 
Vue.prototype.Global = Global   //公用方法 变量
Vue.prototype.$message = Message   //放入全局 

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
