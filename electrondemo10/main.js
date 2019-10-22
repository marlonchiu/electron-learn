const {
  app,
  BrowserWindow
} = require('electron')

// 指向窗口对象的一个全局引用，如果没有这个引用，
// 那么当该 javascript 对象被垃圾回收 的时候该窗口将会自动关闭
class AppWindow extends BrowserWindow {
  constructor(config, fileLocation) {
    const baseConfig = {
      width: 1140,
      height: 570,
      webPreferences: {
        nodeIntegration: true // 表示可以使用nodejs的API
      }
    }

    const finalConfig = {
      ...baseConfig,
      ...config
    }
    super(finalConfig)
    this.loadFile(fileLocation)
    // 优化显示
    this.once('ready-to-show', () => {
      this.show()
    })
  }
}

// 注意在外部引入即可 不用放到app中
require('./main/shortCut.js')

let mainWindow
app.on('ready', () => {
  mainWindow = new AppWindow({}, './index.html')

  // 打开开发者工具
  mainWindow.webContents.openDevTools()
  // 当 window 被关闭，这个事件会被触发。
  mainWindow.on('closed', function (e) {
    mainWindow = null
  })
})

// 监听所有窗口关闭的事件
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
