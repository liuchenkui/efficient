import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/home',
		name: 'Home',
		component: HomeView,
		children: [
			{
				// 首页
				path: '/index',
				name: 'Index',
				component: () => import('../views/indexView.vue')
			},
			// 用户管理
			{
				path: '/user',
				name: 'user',
				component: () => import('../views/UserView.vue')
			},
			// 角色管理
			{
				path: '/role',
				name: 'role',
				component: () => import('../views/RoleView.vue')
			},
			{
				// 菜单管理
				path: '/menu',
				name: 'Menu',
				component: () => import('../views/MenuView.vue')
			},
			{
				// 岗位管理
				path: '/job',
				name: 'Job',
				component: () => import('../views/JobView.vue')
			},
			{
				// 职级岗位
				path: '/rank',
				name: 'Rank',
				component: () => import('../views/JobView.vue')
			},
			// 操作日志
			{
				path: '/operationlog',
				name: 'Operationlog',
				component: () => import('../views/Operationlog.vue')
			},
			// 登录日志
			{
				path: '/loginlog',
				name: 'Loginlog',
				component: () => import('../views/Loginlog.vue')
			},
			{
				// 部门管理
				path: '/department',
				name: 'Department',
				component: () => import('../views/DepartmentView.vue')
			},
			// 配置审批流程
			{
				path: '/approvalprocess',
				name: 'Approvalprocess',
				component: () => import('../views/ApprovalprocessView.vue')
			},
			// 配置审批类型
			{
				path: '/approvaltype',
				name: 'Approvaltype',
				component: () => import('../views/ApprovaltypeView.vue')
			},
			// 我发起的
			{
				path: '/launch',
				name: 'Launch',
				component: () => import('../views/LaunchView.vue')
			},
			// 材料管理
			{
				path: '/materials',
				name: 'Material',
				component: () => import('../views/MaterialView.vue')
			},
			// 邮件处理
			{
				path: '/mail',
				name: 'Mail',
				component: () => import('../views/MailView.vue')
			},
			// 工资条录入
			{
				path: '/payslip',
				name: 'Payslip',
				component: () => import('../views/PayslipView.vue')
			},
			{
				// 待办事项
				path: '/agency',
				name: 'Agency',
				component: () => import('../views/AgencyView.vue')
			},
			// 已办事项
			{
				path: '/done',
				name: 'Done',
				component: () => import('../views/DoneView.vue')
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/loginView.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
