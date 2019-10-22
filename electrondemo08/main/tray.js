const {
  Menu,
  Tray,
  app,
  BrowserWindow
} = require('electron')

const path = require('path')
const appIcon = new Tray(path.join(__dirname, '../static/img/lover.png'))

const menu = Menu.buildFromTemplate([{
    label: '设置',
    click: function () {} //打开相应页面
  },
  {
    label: '升级',
    click: function () {}
  },
  {
    label: '退出',
    click: function () {
      // BrowserWindow.getFocusedWindow().webContents().send('close-main-window');
      app.quit()
    }
  }
])

// 鼠标放上去提示信息
appIcon.setToolTip('hello poetries')
appIcon.setContextMenu(menu)

// 实现任务栏闪烁图标
// let count = 0
// timer = setInterval(function () {
//   count++
//   if (count % 2 === 0) {
//     appIcon.setImage(path.join(__dirname, '../static/img/empty.ico'))
//   } else {
//     appIcon.setImage(path.join(__dirname, '../static/img/lover.png'))
//   }
// }, 500)

// 实现点击关闭按钮，让应用保存在托盘里面，双击托盘打开
// const win = BrowserWindow.getFocusedWindow()   获取不到  null

// win.on('close', (e) => {
//   e.preventDefault()
//   win.hide()
// })

// appIcon.on('double-click', (e) => {
//   win.show()
// })
