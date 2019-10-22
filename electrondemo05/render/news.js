const {
  ipcRenderer
} = require('electron')
// 注意这里 在渲染进程中需要从remote中获取BrowserWindow
const {
  BrowserWindow
} = require('electron').remote

// const username = localStorage.getItem('username')
// console.log(username)

// 监听主进程传递过来的数据
ipcRenderer.on('toNews', (e, userInfo, winId) => {
  // windID 第一个窗口ID
  // 获取对应ID的窗口
  const firstWin = BrowserWindow.fromId(winId)
  console.log(firstWin)
  console.log(userInfo)
  firstWin.webContents.send('toIndexMsg', '来自news进程反馈的信息')
})
