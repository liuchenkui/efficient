<template>
	<div class="login-box">
		<div class="box">
			<p class="title">OA系统登录</p>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" style="margin-top: 20px">
				<el-form-item prop="userName">
					<el-input v-model="ruleForm.userName" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item prop="passwrod">
					<el-input
						v-model="ruleForm.passwrod"
						prefix-icon="el-icon-lock"
						placeholder="请输入用密码"
						show-password
					></el-input>
					<p class="ForgetThePassword" @click="dialogFormVisible = true">忘记密码?</p>
				</el-form-item>
				<el-form-item prop="code">
					<el-input v-model="ruleForm.code" style="width: 63%" placeholder="验证码"></el-input>
					<p class="Code">验证码图片</p>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="loginOk('ruleForm')">登 录</el-button>
				</el-form-item>
			</el-form>
		</div>
		<Dialog :dialogFormVisible="dialogFormVisible" @closeBounced="closeBounced"></Dialog>
	</div>
</template>

<script>
import Dialog from '../components/dialogCom.vue'
import { setToken } from '../../utils/auth'
export default {
	components: {
		Dialog
	},
	data() {
		return {
			ruleForm: {
				userName: '', // 用户名
				passwrod: '', // 密码
				code: '' // 验证码
			},
			dialogFormVisible: false, // 子组件弹框状态
			rules: {
				// 校验
				userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
				passwrod: [{ required: true, message: '请输入密码', trigger: 'blur' }],
				code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
			}
		}
	},
	created() {},
	methods: {
		// 登录
		loginOk(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					if (this.ruleForm.userName == 'admin' && this.ruleForm.passwrod == '123456') {
						this.$http.post('/effect/user/login').then((res) => {
							if (res.data.status == 200) {
								setToken(res.data.loginData.token)
								this.$router.push('/index')
								this.$message.success('登录成功')
							}
						})
					} else {
						this.$message.error('登录失败！请查验用户名或密码是否有误')
					}
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		// 关闭弹框
		closeBounced() {
			this.dialogFormVisible = false
		}
	}
}
</script>
<style scoped lang="scss">
.login-box {
	.box {
		width: 400px;
		background-color: #fff;
		padding: 30px 40px;
		border-radius: 20px;
		box-sizing: border-box;
		text-align: center;
		.el-form-item {
			margin: 30px 0;
		}
		.title {
			font-size: 25px;
			font-weight: 400;
			text-align: center;
		}
		.ForgetThePassword {
			position: absolute;
			right: 0;
			top: 35px;
			font-size: 13px;
			color: #f4c438;
		}
		.ForgetThePassword:hover {
			cursor: pointer;
		}
		.Code {
			display: inline-block;
			width: 30%;
			border: 1px solid rgba(204, 204, 204, 0.83);
			border-radius: 15px;
			color: #ccc;
			height: 38px;
			line-height: 38px;
			text-align: center;
			margin-left: 20px;
		}
		.Code:hover {
			background-color: #d9bffb;
			color: #fff;
			cursor: pointer;
		}
		.el-button {
			width: 85%;
			border-radius: 10px;
			background-color: #d9bffb;
			border: 1px solid #eee;
			height: 45px;
			font-size: 18px;
		}
	}
	width: 100vw;
	height: 100vh;
	background: url('../assets/login.png');
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
