<template>
	<el-row id="login" type="flex" justify="center" align="middle">
		<el-col class="loginBox" style="max-width:440px;min-width:300px;max-height: 400px;">
			<el-form ref="userForm" :model="userForm" status-icon label-width="100px" class="demo-ruleForm">
				<el-input placeholder="请输入用户名" type="text" v-model="userForm.name" prefix-icon="iconfont icon-yonghu" style="margin-bottom: 30px;"></el-input>
				<el-col style="position: relative;">
					<el-input :type="userForm.showPass?'text':'password'" v-model="userForm.pass" placeholder="请输入密码" prefix-icon="iconfont icon-mima"></el-input>
					<i class="el-input__icon el-icon-view el-input__clear" style="" @click="userForm.showPass=!userForm.showPass"></i>
				</el-col>
				<el-col style="position: relative;margin-top: 30px;" :span="10">
					<el-input type="number" v-model="userForm.code" placeholder="请输入验证码" prefix-icon="iconfont icon-yanzhengma"></el-input>
				</el-col>
				<el-col style="position: relative;margin-top: 30px;" :span="7" :offset="1">
					<img :src="codeImg" style="width: 100%;height: 40px;" />
				</el-col>
				<el-col style="position: relative;margin-top: 30px;" :span="5" :offset="1">
					<el-button type="primary" @click="changeCodeImg()">换一张</el-button>
				</el-col>
				<el-col style="text-align: center;margin-top: 30px;">
					<el-button type="primary" @click="submitForm()">提交</el-button>
					<el-button @click="resetForm()">重置</el-button>
				</el-col>
			</el-form>
		</el-col> 
		
	</el-row>
</template>
<!--数据存贮交互，事件控制地区-->
<script> 
	export default {
		name: 'TheLogin',
		data() {
			return {
				globalHttpUrl: this.Global.httpUrl,
				userForm: {
					name: '',
					pass: '',
					code: '',
					showPass: false,
				},
//				codeImg: this.Global.httpUrl+"admin/getVerify"
				codeImg:  "http://app.dev.huaxiweiying.com/zxy/HXXCServiceAdmin/admin/getVerify"
			}
		},
		methods: {
			submitForm: function() {
				if(this.userForm.name==""){
					this.$message({
			          message: "请输入用户名！",
			          type: 'warning'
			        });
			        return false;
				}
				if(this.userForm.pass==""){
					this.$message({
			          message: "请输入密码！",
			          type: 'warning'
			        });
			        return false;
				}else if(this.userForm.pass.length!=9){
					this.$message({
			          message: "请输入9位密码！",
			          type: 'warning'
			        });
			        return false;
				}
//				if(this.userForm.code==""){
//					this.$message({
//			          message: "请输入验证码！",
//			          type: 'warning'
//			        });
//			        return false;
//				}
				this.axiosGet( this.Global.httpUrl+"HXXCServiceAdmin/admin/login", {
					name: this.userForm.name,
					password: this.userForm.pass,
					code:  this.userForm.code
				}).then((response) => {
					 this.$message({
			          message: response.data.message,
			          type: 'warning'
			        });
				});
			},
			resetForm() {
				this.userForm.name = "";
				this.userForm.pass = "";
				this.userForm.showPass = false; 
				this.$router.push({ path: '/TheMain' });
			},
			changeCodeImg() {
				//切换验证吗
				var timestamp = new Date().getTime();
				this.codeImg = "http://app.dev.huaxiweiying.com/HXXCServiceAdmin/admin/getVerify?" + timestamp;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#login {
		width: 100%;
		height: 100%;
		background: url(../pic/loginBg.jpg) no-repeat;
		background-size: 100% 100%;
	}
	
	.loginBox {
		padding: 40px;
		background: url(../pic/loginBox.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.el-input__icon {
		position: absolute;
		right: 5px;
		top: 0;
	}
</style>