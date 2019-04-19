<template>
	<el-row id="PermissionNodeDetails" type="flex" justify="center" :gutter="10">
		<!--{{ msgF }}-->
		<el-col :span="4">
			<el-input placeholder="权限名称" v-model="permissionName" clearable></el-input>
		</el-col>
		<el-col :span="3">
			<el-input placeholder="模块" v-model="modular" clearable></el-input>
		</el-col>
		<el-col :span="3">
			<el-input placeholder="控制器" v-model="controller" clearable></el-input>
		</el-col>
		<el-col :span="3">
			<el-input placeholder="方法" v-model="method" clearable></el-input>
		</el-col>
		<!-- 后期最好修改接口返回形式  -->
		<el-col :span="4">
			<el-select v-model="privilegeListInput" value-key="id" @change="currentSel">
				<el-option v-for="item in privilegeDownList" :label="item.privilegeName" :key="item.id" :value="item">
					<span>├{{ item.name }}</span>
					<!--<span v-for="childsItem in item.childs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├{{ childsItem.parentId }}</span>-->
				</el-option>
			</el-select>
		</el-col>
		<el-col :span="3">
			<el-button type="primary" @click="addPrivilege()">添加分组</el-button>
		</el-col>
	</el-row>
</template>
<!--数据存贮交互，事件控制地区-->
<script>
	export default {
		name: 'PermissionNodeDetails',
		data() {
			return {
				permissionName: "", //权限名称
				modular: "", //模块
				controller: "", //控制器
				method: "", //方法
				privilegeListInput: '', //权限分组
				privilegeDownList:[]
			}
		},
		props: ['privilegeList'],
		mounted: function() {
				console.log("渲染默认数据");
				this.getPrivilegeDownList();
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleClick(row) {
				console.log(row);
			},
			currentSel(selVal) {
				console.log(selVal);
			},
			addPrivilege() {
				console.log(this.privilegeListInput);
				if(this.permissionName == "") {
					console.log(1);
					this.$message({
						type: 'info',
						message: '请添加权限名称！'
					});
					return false;
				} else {
					console.log(2);
					this.$confirm('确认添加分组?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						const sendDate = new Object;
						sendDate.parentId = this.privilegeListInput.parentId;
						sendDate.privilegeName = this.permissionName;
						sendDate.modelName = this.modular;
						sendDate.controllerName = this.controller;
						sendDate.actionName = this.method;
						this.addPrivilegeAjax(sendDate);
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消'
						});
					});
				}
			},
			addPrivilegeAjax(sendData) {
				console.log(sendData);
				//privilegeName权限名称  parentId权限id  modelName模块  controllerName控制器   actionName方法   token

				this.axiosPost(this.Global.httpUrl + "admin/addPrivilege", sendData).then((response) => {
					if(parseInt(response.data.state) == 0) {
						this.$message({
							message: '添加成功！',
							type: 'success'
						});
					} else {
						this.$message({
							message: response.data.message,
							type: 'warning'
						});
					}
				})

			},
			getPrivilegeDownList() {
				const that = this;
				this.axiosGet(this.Global.httpUrl + "admin/getPrivilegeDownList",{}).then((response) => {
					
					if(parseInt(response.data.state) == 0) {
//						that.$message({
//							message: '查询成功',
//							type: 'success'
//						});
						//数组赋值
						that.privilegeDownList = response.data.result;
					} else {
						that.$message({
							message: response.data.message,
							type: 'warning'
						});
					}
					
					
					
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#PermissionNodeDetails {
		margin-bottom: 20px;
		margin-top: 10px;
	}
</style>