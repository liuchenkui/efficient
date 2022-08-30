<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
	<div>
		<el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="ruleForm.username"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="password">
					<el-input v-model="ruleForm.password"></el-input>
				</el-form-item>
				<el-form-item label="再次输入" prop="password2">
					<el-input v-model="ruleForm.password2"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="closeBounced">取 消</el-button>
				<el-button type="primary" @click="changeOk('ruleForm')">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: ['dialogFormVisible'],
	data() {
		var validateName = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入用户名'))
			} else {
				if (this.ruleForm.username !== '') {
					this.$refs.ruleForm.validateField('checkPass')
				}
				callback()
			}
		}
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				if (this.ruleForm.password !== '') {
					this.$refs.ruleForm.validateField('checkPass')
				}
				callback()
			}
		}
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'))
			} else if (value !== this.ruleForm.password) {
				callback(new Error('两次输入密码不一致!'))
			} else {
				callback()
			}
		}
		return {
			// 表单数据
			ruleForm: {
				username: '',
				password: '',
				password2: ''
			},
			rules: {
				// 校验
				username: [{ validator: validateName, trigger: 'blur' }],
				password: [{ validator: validatePass, trigger: 'blur' }],
				password2: [{ validator: validatePass2, trigger: 'blur' }]
			}
		}
	},
	methods: {
		// 关闭弹框
		closeBounced() {
			this.$emit('closeBounced')
			// 制空表单
			this.Dominance()
		},
		// 确定修改
		changeOk(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// 关闭弹框
					this.$emit('closeBounced')
					// 制空表单
					this.Dominance()
					alert('submit!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		// 制空
		Dominance() {
			this.ruleForm = {
				username: '',
				password: '',
				password2: ''
			}
		}
	}
}
</script>
<style scoped lang="scss">
.el-button:nth-child(2) {
	background-color: #d9bffb;
}
</style>
