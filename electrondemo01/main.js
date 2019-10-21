// electron 对象引用
const electron = require('electron')
// BrowserWindow 类的引用
const {
  app,
  BrowserWindow
} = electron

let mainWindow = null // 监听应用准备完成的事件 app.on('ready',function(){}
function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // 加载index.html文件
  mainWindow.loadFile('index.html')
  // 打开开发者工具
  mainWindow.webContents.openDevTools()
  // 当 window 被关闭，这个事件会被触发。
  mainWindow.on('closed', function () {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    mainWindow = null
  })
}
// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用
app.on('ready', createWindow)

// 监听所有窗口关闭的事件
app.on('window-all-closed', function () {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (mainWindow === null) {
    createWindow()
  }
})
