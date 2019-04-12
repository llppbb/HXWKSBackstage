<template> 
</template>

<script>
import Vue from 'vue'
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

Vue.prototype.$message = Message   //放入全局 
</script>

<style>
 
</style>