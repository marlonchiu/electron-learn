const {
  shell
} = require('electron')

document.getElementById('shellDom').addEventListener('click', () => {
  shell.openExternal('https://www.baidu.com')
})
