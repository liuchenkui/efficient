import Cookies from 'js-cookie'

const TokenKey = 'Authorization'
// 获取token
export function getToken() {
	return Cookies.get(TokenKey)
}
// 设置token
export function setToken(token) {
	Cookies.set(TokenKey, token)
}
// 删除token
export function removeToken() {
	Cookies.remove(TokenKey)
}
