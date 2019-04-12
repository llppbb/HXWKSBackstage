<template>
	<el-container style="height: 100%;" id="TheMain">
			<el-header>
				<TheHeader/>
			</el-row>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<TheAside/>
				</el-aside>
				<el-main>
					<div class="mainBox">
						<router-view></router-view>
					</div>
				</el-main>
			</el-container>
		</el-container>
</template>

<script>
	import TheAside from "@/views/TheAside"; // 首页侧边栏
	import TheHeader from "@/views/TheHeader"; // 首页侧边栏
	export default {
		name: 'TheMain',
		data() {
			return {
				 activeIndex: '1',
				activeIndex2: '1'
			}
		},
		components: {
			TheHeader,
			TheAside
		},
		methods: {
			submitForm() {
				this.axiosGet("http://app.dev.huaxiweiying.com/HXXCServiceAdmin/admin/login", {
					name: this.userForm.name,
					password: this.userForm.pass,
					code: this.userForm.code
				}).then((response) => {
					 this.Message({
			          message: '警告哦，这是一条警告消息',
			          type: 'warning'
			       });
				});
			},
			onMouseOver(){
				console.log("yiru")
			},
			onMouseOut(){
				console.log("yichu")
			},
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    }
		}
	}
</script>


<style scoped>
 /*header start*/
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
    /*header end*/
</style>