<template>
	<div>
		<div class="header">
			<div class="header-left">
				<div class="backlog">
					<div class="backlog-top">
						<p class="backlog-top-title">待办事项</p>
						<p class="backlog-top-more">查看更多</p>
					</div>
					<div class="backlog-content">
						<div>[代办事项] 您申请的报销还未审批,请及时查看,防止过期</div>
						<div>2022年8月</div>
					</div>
					<div class="backlog-content">
						<div>[代办事项] 您申请的报销还未审批,请及时查看,防止过期</div>
						<div>2022年8月</div>
					</div>
				</div>
			</div>
			<div class="header-right">
				<div class="block">
					<el-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周"> </el-date-picker>
				</div>
			</div>
		</div>
		<div class="centre">
			<div class="centre-left">
				<p class="title">员工数据</p>
				<ul class="Employee">
					<li>
						<div class="Employee-left">
							<p>员工总人数</p>
							<p>2000人</p>
						</div>
						<div class="Employee-centre">
							<p>正式员工</p>
							<p>1000人</p>
						</div>
						<div class="Employee-right">
							<p>实习生</p>
							<p>15人</p>
						</div>
					</li>
					<li>
						<div class="Employee-left">
							<p>员工总人数</p>
							<p>2000人</p>
						</div>
						<div class="Employee-centre">
							<p>正式员工</p>
							<p>1000人</p>
						</div>
						<div class="Employee-right">
							<p>实习生</p>
							<p>15人</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="centre-right">
				<p class="title">员工地区分布</p>
				<div id="main"></div>
			</div>
		</div>
		<footer>
			<p>员工生日</p>
			<div id="birthday"></div>
		</footer>
	</div>
</template>

<script>
import * as echarts from 'echarts'
export default {
	data() {
		return {
			value1: ''
		}
	},
	mounted() {
		// 员工地区
		var chartDom = document.getElementById('main')
		var myChart = echarts.init(chartDom)
		var option
		// eslint-disable-next-line no-unused-vars
		option = {
			title: {
				right: 'center'
			},
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				right: 'left'
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: '80%',
					data: [
						{ value: 1048, name: '河南' },
						{ value: 735, name: '东北' },
						{ value: 580, name: '山西' },
						{ value: 484, name: '河北' },
						{ value: 300, name: '内蒙' }
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					center: ['30%', '50%']
				}
			]
		}
		option && myChart.setOption(option)
		// 员工生日
		var chartDoms = document.getElementById('birthday')
		var myCharts = echarts.init(chartDoms)
		var options
		options = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					axisTick: {
						alignWithLabel: true
					}
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: 'Direct',
					type: 'bar',
					barWidth: '50%',
					data: [120, 200, 150, 80, 70, 110, 130, 30, 80, 60, 80, 70],
					itemStyle: {
						color: '#cca2fc'
					}
				}
			]
		}
		options && myCharts.setOption(options)
	}
}
</script>
<style scoped lang="scss">
footer {
	padding: 20px;
	border: 1px solid #cbcbcb;
	margin: 20px 0;
	p {
		margin: 0 50px;
		font-size: 20px;
	}
}
#birthday {
	width: 100%;
	height: 300px;
}
.centre {
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	.centre-left {
		width: 48%;
		border: 1px solid #cbcbcb;
		.title {
			padding: 10px;
			font-size: 20px;
			border-bottom: 1px solid #cbcbcb;
		}
		.Employee {
			padding: 20px;
			text-align: center;
			font-size: 14px;
			color: #6c6c6c;
			li {
				display: flex;
				justify-content: space-between;
				margin: 10px 0;
				p {
					margin: 10px 0;
				}
				div {
					flex: 1;
				}
				.Employee-left {
					border-right: 2px solid #bbbbbb;
				}
				.Employee-centre {
					border-right: 2px solid #bbbbbb;
				}
			}
		}
	}
	.centre-right {
		width: 48%;
		border: 1px solid #cbcbcb;
		.title {
			padding: 10px;
			font-size: 20px;
			border-bottom: 1px solid #cbcbcb;
		}
		#main {
			padding: 20px;
			box-sizing: border-box;
			width: 100%;
			height: 90%;
			// .canvas {
			// 	width: 100%;
			// }
		}
	}
}
.header {
	display: flex;
	justify-content: space-between;
	.header-right {
		width: 35%;
	}
	.header-left {
		width: 63%;
		.backlog {
			width: 100%;
			box-sizing: border-box;
			.backlog-top {
				padding: 18px;
				display: flex;
				justify-content: space-between;
				border: 1px solid #cbcbcb;
				.backlog-top-title {
					font-size: 20px;
				}
				.backlog-top-more {
					color: #39f;
				}
				.backlog-top-more:hover {
					cursor: pointer;
				}
			}
			.backlog-content {
				padding: 15px;
				border: 1px solid #cbcbcb;
				color: #6c6c6c;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
			}
		}
	}
}
</style>
