const {
  ipcMain,
  BrowserWindow
} = require('electron')
const path = require('path')

// 主进程处理渲染进程广播数据
ipcMain.on('openWindow', (event, data) => {
  const childWindow = new BrowserWindow({
    width: 400,
    height: 300
  })
  childWindow.loadURL(path.join('file:', __dirname, '../news.html'))
  childWindow.webContents.openDevTools()
})
