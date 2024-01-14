const tabBarConfig = require('./tabBarConfig')

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/order/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: tabBarConfig,
})
