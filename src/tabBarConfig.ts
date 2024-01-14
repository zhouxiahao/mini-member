const tabbarConfig = {
	custom: true,
	selectedColor: '#FF0000',
	list: [
		{
			pagePath: 'pages/index/index',
			text: '首页',
			// iconPath: './shared/assets/icons/home.png',
			// selectedIconPath: './shared/assets/icons/home_selected.png',
		},
    {
			pagePath: 'pages/order/index',
			text: '订单',
			// iconPath: './shared/assets/icons/user.png',
			// selectedIconPath: './shared/assets/icons/user_selected.png',
		},
		{
			pagePath: 'pages/user/index',
			text: '我的',
			// iconPath: './shared/assets/icons/user.png',
			// selectedIconPath: './shared/assets/icons/user_selected.png',
		},
	],
}

module.exports = tabbarConfig
