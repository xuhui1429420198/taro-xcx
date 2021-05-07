export default {
  pages: [
    'pages/index/index',
    'pages/list/list',
    'pages/my/my'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  networkTimeout: {
    request: 5000,
    downloadFile: 5000,
    uploadFile: 5000,
  },
  tabBar: {
    color: '#969696',
    selectedColor: '#E1251B',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'images/tabBar/send.png',
        selectedIconPath: 'images/tabBar/send_active.png',
      },
      {
        pagePath: 'pages/list/list',
        text: '列表',
        iconPath: 'images/tabBar/search.png',
        selectedIconPath: 'images/tabBar/search_active.png',
      },
      {
        pagePath: 'pages/my/my',
        text: '我的',
        iconPath: 'images/tabBar/mine.png',
        selectedIconPath: 'images/tabBar/mine_active.png',
      },
    ],
    position: 'bottom',
  },
}
