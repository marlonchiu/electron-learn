// 端开网络 再次连接测试
// 监听网络变化实现消息通知
const path = require('path')

window.addEventListener('online', () => {
  console.log('online')
})

window.addEventListener('offline', () => {
  // 断开网络触发事件
  const options = {
    title: 'QQ邮箱',
    body: '网络异常，请检查你的网络',
    icon: path.join(__dirname, '../static/img/favicon2.ico') // 通知图标
  }

  const myNotification = new window.Notification(options.title, options)

  // 消息可点击
  myNotification.onclick = function () {
    console.log('click notification')
  }
})
