1.引用Element组件
    1.1 下载组件 
       npm i element-ui -S
    1.2 引用Element
       
		1.2.1完整引入
			在 main.js 中写入以下内容：
			import Vue from 'vue';
			import ElementUI from 'element-ui';
			import 'element-ui/lib/theme-chalk/index.css';
			import App from './App.vue';
			
			Vue.use(ElementUI);
			
			new Vue({
			  el: '#app',
			  render: h => h(App)
			});
			以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。
		
        1.2.1
				按需引入
				借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
				首先，安装 babel-plugin-component：
				npm install babel-plugin-component -D
				然后，将 .babelrc 修改为：
				{                 
				  "presets": [
				    ["env", {
				      "modules": false,
				      "targets": {
				        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
				      }
				    }],
				    "stage-2"
				  ],
				  "plugins": ["transform-vue-jsx", "transform-runtime",[
				      "component",
				      {
				        "libraryName": "element-ui",
				        "styleLibraryName": "theme-chalk"
				      }
				    ]
				  ]
				}
				
    1.3 使用
           main.js:
          	import Vue from 'vue';
			import { Button, Select } from 'element-ui';
			import App from './App.vue';
			
			Vue.component(Button.name, Button);
			Vue.component(Select.name, Select);
			/* 或写为
			 * Vue.use(Button)
			 * Vue.use(Select)
			 */
			
			new Vue({
			  el: '#app',
			  render: h => h(App)
			});
			
			<el-row>
			  <el-button>默认按钮</el-button>
			  <el-button type="primary">主要按钮</el-button>
			  <el-button type="success">成功按钮</el-button>
			  <el-button type="info">信息按钮</el-button>
			  <el-button type="warning">警告按钮</el-button>
			  <el-button type="danger">危险按钮</el-button>
			</el-row>
			




