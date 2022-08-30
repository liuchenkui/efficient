<template>
	<div>
		<fullscreen :fullscreen.sync="fullscreen">
			<el-container>
				<el-aside :width="isCollapse ? '60px' : '200px'">
					<Side :isCollapse="isCollapse"></Side>
				</el-aside>
				<el-container>
					<!-- 头部 -->
					<el-header>
						<Header @changeIsCollapse="changeIsCollapse" @toggle="toggle" :isCollapse="isCollapse"></Header>
					</el-header>
					<el-main>
						<!-- 路由容器 -->
						<router-view />
					</el-main>
				</el-container>
			</el-container>
		</fullscreen>
	</div>
</template>

<script>
import Side from '../components/SideCom.vue'
import Header from '../components/headerCom.vue'
import { getToken } from '../../utils/auth'
export default {
	components: {
		Side,
		Header
	},
	data() {
		return {
			isCollapse: false,
			fullscreen: false, // 全屏状态
			menusData: [] // 侧边栏数据
		}
	},
	created() {
		this.$http('/effect/home/menus/', { params: { Authorization: getToken() } }).then((res) => {
			console.log(res.data.MenusData.data)
			this.menusData = res.data.MenusData.data
		})
	},
	methods: {
		changeIsCollapse() {
			this.isCollapse = !this.isCollapse
		},
		// 切换全屏状态
		toggle() {
			this.fullscreen = !this.fullscreen
		}
	}
}
</script>

<style scoped lang="scss">
.fullscreen {
	background-color: #fff;
}
.el-header {
	color: #ceced7;
	height: 50px;
	border-top: 1px solid #ceced7;
	line-height: 50px;
	border-bottom: 1px solid #ceced7;
}

.el-aside {
	background-color: #7aabf6;
	color: #fff;
	height: 100vh;
}

.el-main {
	color: #333;
	height: calc(100vh - 60px);
}
</style>
