// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);
Axios.defaults.withCredentials=true
import {axiosGet,axiosPost} from './public/axios.js';
import Global from '@/components/TheCommon' //公用变量  方法
//import './config/rem'  PC端不引入 rem
import {Select,Option,OptionGroup,Loading,Table, TableColumn, Breadcrumb,BreadcrumbItem,Popover,Tooltip,Radio,RadioGroup,RadioButton,Button,Input,Row,Col,Form,FormItem,Icon,InputNumber,Message,MessageBox,ColorPicker ,Container, Header, Aside,Main,Footer,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui'
Vue.config.productionTip = false
Vue.prototype.$axios=Axios;
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
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
Vue.use(Breadcrumb); 
Vue.use(BreadcrumbItem); 
Vue.use(Table); 
Vue.use(TableColumn); 
Vue.use(Loading); 
Vue.prototype.$message = Message   //放入全局 
Vue.prototype.$confirm  = MessageBox.confirm    //放入全局 
Vue.prototype.axiosGet = axiosGet   //放入全局 
Vue.prototype.axiosPost = axiosPost   //放入全局 
Vue.prototype.Global = Global   //公用方法 变量

sessionStorage.setItem("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImFkYTE4Y2Y3NDkxZTc0YjdlNWNlMGJiMGQwNGE1YjkwIiwibWVyY2hhbnRpZCI6IkFCQyIsImlzcyI6ImF1dGgwIiwibmFtZSI6InJvb3QiLCJhaWQiOiIxIn0.k5QhXOQCRhyU-jflANLXzDgDgpXTVthLbvveo_0XH3o");


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
