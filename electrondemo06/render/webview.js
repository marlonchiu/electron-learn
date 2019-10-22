var {
  ipcRenderer
} = require('electron')
const myWebview = document.querySelector('#myWebview')

ipcRenderer.on('openWebview', (e, url) => {
  console.log(url)
  myWebview.src = url
})
