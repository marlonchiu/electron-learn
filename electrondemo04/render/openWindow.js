const {
  ipcRenderer
} = require('electron')

// 渲染进程给主进程发送异步消息
document.getElementById('openWindowBtn').addEventListener('click', () => {
  ipcRenderer.send('openWindow', '')
})
