<template>
	<div class="header">
		<div class="header-left">
			<i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="changeIsCollapse"></i>
		</div>
		<div class="header-right">
			<div class="header-icon">
				<span class="one">1</span>
				<i class="el-icon-s-flag"></i>
			</div>
			<div class="header-icon">
				<span class="two">1</span>
				<i class="el-icon-message-solid"></i>
			</div>
			<div class="header-icon">
				<span class="three">1</span>
				<i class="el-icon-message"></i>
			</div>
			<i class="el-icon-full-screen" @click="toggle"></i>
			<div class="superAdmin"><i class="el-icon-user-solid"></i>超级管理员</div>
		</div>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: '',
	props: ['isCollapse'],
	data() {
		return {}
	},
	methods: {
		// 切换全屏状态
		toggle() {
			this.$emit('toggle')
		},
		// 改变侧边状态
		changeIsCollapse() {
			this.$emit('changeIsCollapse')
		}
	}
}
</script>
<style scoped lang="scss">
i:hover {
	cursor: pointer;
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	.header-left {
		font-size: 25px;
	}
	.header-right {
		height: 60px;
		display: flex;
		align-items: center;
		.header-icon {
			position: relative;
			span {
				position: absolute;
				top: 0;
				right: 0;
				padding: 2px 5px;
				border-radius: 5px;
				text-align: center;
				line-height: 15px;
				color: #fff;
			}
			.one {
				background-color: #f77d6c;
			}
			.two {
				background-color: #f4c438;
			}
			.three {
				background-color: #c2c2fb;
			}
		}
		color: #cecece;
		display: flex;
		.item {
			margin: 0 10px;
		}
		.superAdmin {
			display: inline-block;
			font-size: 14px;
		}
		i {
			font-size: 23px;
			margin: 0 10px;
		}
	}
}
</style>
