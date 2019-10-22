// 渲染进程代码 /src/render/index.js
// 从渲染进程创建浏览器窗口
// https://electronjs.org/docs/api/remote

// 打开新窗口属性用法有点类似vscode打开新的窗口
const {
  BrowserWindow
} = require('electron').remote
const path = require('path')

let win = null
const btn = document.getElementById('btn')

btn.onclick = () => {
  console.log(123)
  win = new BrowserWindow({
    width: 300,
    height: 200,
    frame: true // false隐藏关闭按钮、菜单选项 true显示
    // fullscreen: true, // 全屏展示
    // transparent: true
  })

  win.loadURL(path.join('file:', __dirname, 'news.html'))
  // win.loadURL(`file://${__dirname}/news.html`)
  win.on('close', () => {
    win = null
  })
}
