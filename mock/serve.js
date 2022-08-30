let express = require('express') // 引入express
let Mock = require('mockjs') // 引入mock
const loginData = require('./common/login.json')
const MenusData = require('./common/menus.json')
let app = express() // 实例化express
app.use('/user/login', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '登录成功',
			loginData
		})
	)
})

app.use('/home/menus/', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '菜单栏',
			MenusData
		})
	)
})

app.listen(8890, () => {
	console.log('监听端口 8890')
})
