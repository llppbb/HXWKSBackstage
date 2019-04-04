<template>
	<div id="app">
		<TheLogin v-if="isShowTheLogin"/>
		<el-container v-else style="height: 100%;">
			<el-header>Header
				<ThemePicker/>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<TheAside/>
				</el-aside>
				<el-main>
					<!--<router-view/>-->
					中间区域
				</el-main>
			</el-container>
		</el-container> 
	</div>
</template>

<script>
	import ThemePicker from "@/components/ThemePicker";//颜色选择器
	import TheLogin from "@/components/TheLogin";//登录页面
	import TheAside from "@/components/TheAside";// 首页侧边栏
	export default {
		name: 'App',
	  data() {
			return {
				isShowTheLogin:false
			}
		},
		components: {
			ThemePicker,
			TheLogin,
			TheAside
		}
	}
</script>

<style>
	@import url("//at.alicdn.com/t/font_1123180_uk6kojzc5q.css");
	* {
		margin: 0px;
		padding: 0px;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
	}
	
	#app {
		width: 100%;
		height: 100%;
	}
	body> .el-container {
		height: 100%;
		margin-bottom: 40px;
	}
	.el-header{
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		line-height: 160px;
	}
	
</style>