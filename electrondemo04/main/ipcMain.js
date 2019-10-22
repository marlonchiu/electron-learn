const {
  ipcMain
} = require('electron')

// 主进程处理渲染进程广播数据
ipcMain.on('sendMsg', (event, data) => {
  console.log('data\n ', data)
  console.log('event\n ', event)
  // 主进程给渲染进程广播数据
  event.sender.send('sendFeedBackToRender', '来自主进程的反馈')
})

// 主进程接收渲染进程广播数据  同步数据
ipcMain.on('sendSyncMsg', (event, data) => {
  console.log('data\n ', data)
  // 主进程给渲染进程广播数据
  event.returnValue = '渲染进程和主进程同步通信 接收同步广播，来自主进程的反馈.'
})
