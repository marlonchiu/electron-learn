// h5api实现通知
const path = require('path')

const options = {
  title: 'electron 通知API',
  body: 'hello poetries',
  icon: path.join(__dirname, '../static/img/favicon2.ico') // 通知图标
}

document.querySelector('#showNotification').onclick = function () {
  const myNotification = new window.Notification(options.title, options)

  // 消息可点击
  myNotification.onclick = function () {
    console.log('click notification')
  }
}
