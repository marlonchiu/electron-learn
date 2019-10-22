const {
  ipcRenderer
} = require('electron')

// 渲染进程给主进程发送异步消息
document.getElementById('openWindowBtn').addEventListener('click', () => {
  console.log(123)
  // 通过广播的形式 通知主进程执行操作
  ipcRenderer.send('openWindow', {
    name: 'poetries',
    age: 23
  })
})

// 接收news渲染进程传递回来的消息
ipcRenderer.on('toIndexMsg', (e, data) => {
  console.log('====', data)
  // document.getElementById('feedMsg').innerHTML = data
})
