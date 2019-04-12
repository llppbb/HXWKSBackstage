<template>
	<div id="theHeader" class="theHeader">
		<el-row class="theHeader" type="flex" justify="space-around" align="middle">
			<el-col>华熙五棵松文体</el-col>
			<el-col style="text-align: right;">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="#545c64" text-color="#fff" active-text-color="#fff">
				   <el-menu-item index="3"><ThemePicker/></el-menu-item>
				  <el-submenu index="2">
				    <template slot="title"><span>用户名称</span></template>
				    <el-menu-item index="2-1">修改密码</el-menu-item>
				    <el-menu-item index="2-2">退出</el-menu-item> 
				  </el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import ThemePicker from "@/components/ThemePicker"; //颜色选择器
	export default {
		name: "theHeader",
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			onMouseOver(){
				console.log("yiru")
			},
			onMouseOut(){
				console.log("yichu")
			},
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    }
		},
		components: {
			ThemePicker
		}
	}
</script>
<style scoped>
	.theHeader {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.userBoxMes{
		background: #ccc;
		position: absolute;
		color: #000000;
		top: 60px;
		right: 30px;
	}
	.el-menu--horizontal>.el-submenu {
	    float: right;
	}
	.el-menu--horizontal>.el-menu-item {
    	float: right;
    }
    .el-menu--horizontal { 
    	background: none;
    	border: none;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
    	color:#fff;
    }
</style>