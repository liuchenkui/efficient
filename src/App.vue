<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {}
	}
}
</script>
<style lang="scss">
.login-box {
	.el-input__inner {
		border-radius: 10px !important;
	}
	.el-input__inner:focus {
		border-color: #c3a4eb !important;
	}
}
.el-icon-arrow-down:before {
	color: #fff !important;
	font-size: 15px;
}
.el-menu {
	border-right: 0 !important;
}
* {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
}
html,
body {
	width: 100%;
	height: 100%;
}
a {
	text-decoration: none;
}
</style>
