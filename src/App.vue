<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				
			}
		},
		components: {
			
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
	
	.el-main {
		background-color:#585F66;
		color: #333;
		line-height: 160px;
	}
	
	.el-header {
		background-color:#545c64;
		color: #fff; 
	}
	.mainBox{ 
		width: 100%;
		height: 100%;
		background: #fff;
		border-radius: 10px;
	}
</style>