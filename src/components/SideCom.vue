<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<div class="logo">
			<img src="/v2_rgsxtp.png" alt="" />
			<p v-if="!isCollapse">OA管理系</p>
		</div>
		<el-menu
			default-active="2"
			:collapse="isCollapse"
			class="el-menu-vertical-demo"
			background-color="#7aabf6"
			text-color="#fff"
			active-text-color="#fff"
			router
			:collapse-transition="false"
		>
			<el-menu-item index="/index">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title"> <i class="el-icon-setting"></i> <span>基础配置</span> </template>
				<el-menu-item-group>
					<el-menu-item index="/user">用户管理</el-menu-item>
					<el-menu-item index="/role">角色管理</el-menu-item>
					<el-menu-item index="/menu">菜单管理</el-menu-item>
					<el-menu-item index="/job">岗位管理</el-menu-item>
					<el-menu-item index="/rank">职级管理</el-menu-item>
					<el-menu-item index="/operationlog">操作日志</el-menu-item>
					<el-menu-item index="/loginlog">登录日志</el-menu-item>
					<el-menu-item index="/department">部门管理</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title"> <i class="el-icon-tickets"></i> <span>配置工作流</span> </template>
				<el-menu-item-group>
					<el-menu-item index="/approvalprocess">配置审批流程</el-menu-item>
					<el-menu-item index="/approvaltype">配置审批类型</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title"> <i class="el-icon-c-scale-to-original"></i> <span>材料管理</span> </template>
				<el-menu-item-group>
					<el-menu-item index="/materials">材料管理</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title"> <i class="el-icon-phone-outline"></i><span>企业通讯</span> </template>
				<el-menu-item-group>
					<el-menu-item index="/mail">邮件处理</el-menu-item>
					<el-menu-item index="/payslip">工资条录入</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="/index">
				<i class="el-icon-folder-opened"></i> <span slot="title">合同管理</span>
			</el-menu-item>
			<el-submenu index="7">
				<template slot="title"> <i class="el-icon-user"></i> <span>OA审批</span> </template>
				<el-menu-item-group>
					<el-menu-item index="/agency">待办事项</el-menu-item>
					<el-menu-item index="/done">已办事项</el-menu-item>
					<el-menu-item index="/launch">我发起的</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
	props: ['isCollapse']
}
</script>
<style scoped lang="scss">
.logo {
	display: flex;
	align-items: center;
	font-size: 20px;
	justify-content: center;
	height: 60px;
	img {
		width: 40px;
	}
	p {
		margin: 0 10px;
	}
}
.el-menu {
	height: calc(100vh - 60px);
	i {
		color: #fff !important;
	}
	.el-icon-arrow-down:before {
		color: #fff !important;
	}
	.el-menu-item.is-active {
		background-color: #f4c438 !important;
	}
}
</style>
