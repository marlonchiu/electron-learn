const {
  ipcRenderer
} = require('electron')

// 渲染进程给主进程发送异步消息
document.getElementById('send').addEventListener('click', () => {
  ipcRenderer.send('sendMsg', 'hello from ipcRender')
})

// 渲染进程发送消息，主进程接收消息并反馈
document.getElementById('sendFeedback').addEventListener('click', () => {
  ipcRenderer.send('sendMsg', 'hello from ipcRender')
})
ipcRenderer.on('sendFeedBackToRender', (event, data) => {
  console.log(data)
  document.getElementById('sendFeedbackMsg').innerHTML = data
})

// 渲染进程给主进程发送同步消息
document.getElementById('sendSync').onclick = function () {
  // 同步广播数据
  const msg = ipcRenderer.sendSync('sendSyncMsg', '同步广播数据')
  // 同步返回主进程反馈的数据
  console.log('msg\n ', msg)
}
