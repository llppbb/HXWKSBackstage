<template>
	<div id="TheAside">
		<!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			<el-radio-button :label="false">展开</el-radio-button>
			<el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group>-->
		<el-col :span="12" class="submenuS">
			<el-menu default-active="2" class="el-menu-vertical-demo" background-color="#585F66" text-color="#fff" active-text-color="#fff">
				<el-submenu index="item.id" v-for="(item, index) in asideArr" :key="item.id">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>{{item.name}}</span>
					</template>
					<el-menu-item-group>
						<router-link :to="{path:childsItem.modelName}" style="color: #fff;text-decoration:none;out-line: none" v-for="(childsItem, childsItemIndex) in item.childs" :key="item.id+childsItem.id" >
							<el-menu-item index="item.id-childsItem.id">
								 {{childsItem.privilegeName}}
							</el-menu-item>
						</router-link>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name: "TheAside",
		data() {
			return {
				isCollapse: true,
				asideArr: [{
					"id": 1,
					"name": "RBAC管理",
					"childs": [{
						"id": 2,
						"privilegeName": "权限节点",
						"modelName": "PermissionNode",
						"controllerName": "Administrators",
						"actionName": "admin-permission",
						"parentId": 1,
						"addTime": "2018-07-05 19:05:32.0",
						"modifyTime": "2018-07-05 19:05:32.0",
						"deleteStatus": 1,
						"roleToPrivilege": null
					}, {
						"id": 3,
						"privilegeName": "权限分组",
						"modelName": "PrivilegeGrouping",
						"controllerName": "Administrators",
						"actionName": "admin-role",
						"parentId": 1,
						"addTime": "2018-07-05 19:05:32.0",
						"modifyTime": "2018-07-05 19:05:32.0",
						"deleteStatus": 1,
						"roleToPrivilege": null
					}, {
						"id": 4,
						"privilegeName": "管理员",
						"modelName": "RBACAdministrators",
						"controllerName": "Administrators",
						"actionName": "admin-list",
						"parentId": 1,
						"addTime": "2018-07-05 19:05:32.0",
						"modifyTime": "2018-07-05 19:05:32.0",
						"deleteStatus": 1,
						"roleToPrivilege": null
					}],
					"roleToPrivilege": null
				}]
			};
		},
		mounted: function() {
//			console.log("渲染默认数据");
		},
		methods: {

		}
	}
</script>
<style scoped>
	#TheAside {
		height: 100%;
	}
	
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		height: 100%;
	}
	
	.submenuS {
		width: 100%;
		height: 100%;
	}
	
	.el-menu {
		border: none;
	}
	
	.el-aside {
		width: 200px;
		height: 100%;
	}
</style>