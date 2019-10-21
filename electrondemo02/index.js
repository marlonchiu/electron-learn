// 主进程代码
const electron = require('electron')
// app 控制应用生命周期的模块; BrowserWindow 创建本地浏览器窗口的模块
const {
  app,
  BrowserWindow
} = electron

// 指向窗口对象的一个全局引用，如果没有这个引用，
// 那么当该 javascript 对象被垃圾回收 的时候该窗口将会自动关闭
let win = null

function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1140,
    height: 570,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // 并且装载应用的 index.html 页面
  win.loadURL(`file://${__dirname}/index.html}`)
  // 打开开发者工具
  win.webContents.openDevTools()
  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', function () {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
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
  if (win === null) {
    createWindow()
  }
})

// 在这个文件后面你可以直接包含你应用特定的由主进程运行的代码。
// 也可以把这些代码放在另一个文件中然后在这里导入
