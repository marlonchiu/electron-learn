const {
  app,
  globalShortcut
} = require('electron')

app.on('ready', () => {
  globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })

  // 检测快捷键是否注册成功 true是注册成功
  const isRegister = globalShortcut.isRegistered('CommandOrControl+X')
  console.log(isRegister)
})

// 退出的时候取消全局快捷键
app.on('will-quit', () => {
  globalShortcut.unregister('command+e')
})
