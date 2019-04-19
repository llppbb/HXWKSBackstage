<template>
	<el-row id="PermissionNode">
		<PermissionNodeDetails :privilege-list="tableData" />
		<el-table :data="tableData" stripe border style="width: 100%" v-loading="loading2" 
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)" height="80%">
			<el-table-column prop="id" label="ID" width="40">
			</el-table-column>
			<el-table-column label="权限名类别" width="130">
				<template slot-scope="scope">
					{{ scope.row.parentId!=0?"&nbsp;&nbsp;--":'' }}{{ scope.row.privilegeName }}
				</template>
			</el-table-column>
			<el-table-column prop="modelName" label="模型控制器" width="100">
			</el-table-column>
			<el-table-column prop="controllerName" label="控制器" >
			</el-table-column>
			<el-table-column prop="actionName" label="方法" >
			</el-table-column>
			<el-table-column width="160" label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-row>
</template>
<!--数据存贮交互，事件控制地区-->
<script>
	import PermissionNodeDetails from "@/views/RBACAdministration/PermissionNodeDetails"; //添加 编辑   权限节点
	export default {
		name: 'PermissionNode',
		data() {
			return {
				tableData: [],
				loading2:true
			}
		},
		mounted: function() {
			console.log("渲染默认数据");
			this.getPrivilegeList();
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

			getPrivilegeList(){
				const that=this;
				this.axiosGet(this.Global.httpUrl+"admin/getPrivilegeList", {
				}).then((response) => {
						that.loading2=false;
				        if( parseInt(response.data.state) ==0){
					        that.$message({
					            message: '查询成功',
          						type: 'success'
					        });
					        //数组赋值
					        that.tableData=response.data.result; 
				        }else{
				        	that.$message({
					          message: response.data.message,
					          type: 'warning'
					        });
				        }
					})
			}
		},
		components: {
			PermissionNodeDetails
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#PermissionNode {
		padding: 10px;
		height: 100%;
	}
</style>