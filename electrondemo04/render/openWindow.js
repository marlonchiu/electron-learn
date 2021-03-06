const {
  ipcRenderer
} = require('electron')

// 渲染进程给主进程发送异步消息
document.getElementById('openWindowBtn').addEventListener('click', () => {
  // 通过广播的形式 通知主进程执行操作
  ipcRenderer.send('openWindow', {
    name: 'poetries',
    age: 23
  })
  // ======= localstorage传值 =====
  localStorage.setItem('username', 'poetries')
})
