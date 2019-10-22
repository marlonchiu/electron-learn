const {
  ipcMain,
  BrowserWindow
} = require('electron')
const path = require('path')

let childWindow
// 主进程处理渲染进程广播数据
ipcMain.on('openWindow', (event, userInfo) => {
  childWindow = new BrowserWindow({
    width: 700,
    height: 300,
    webPreferences: {
      nodeIntegration: true // 表示可以使用nodejs的API
    }
  })
  // 获取当前窗口ID 必须先创建才能获取
  const winId = BrowserWindow.getFocusedWindow().id
  console.log(winId)
  console.log(userInfo)
  childWindow.loadURL(path.join('file:', __dirname, '../news.html'))
  childWindow.webContents.openDevTools()

  // 把渲染进程传递过来的数据再次传递给渲染进程news
  // 等待窗口加载完
  childWindow.webContents.on('did-finish-load', () => {
    childWindow.webContents.send('toNews', userInfo, winId)
  })
})
