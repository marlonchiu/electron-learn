const showError = document.getElementById('showError')
const showMsg = document.getElementById('showMsg')
const showOpenDialog = document.getElementById('showOpenDialog')
const saveDialog = document.getElementById('saveDialog')

const {
  remote
} = require('electron')

showError.onclick = function () {
  remote.dialog.showErrorBox('警告', '操作有误')
}

showMsg.onclick = function () {
  remote.dialog.showMessageBox({
    type: 'info',
    title: '提示信息',
    message: '内容',
    buttons: ['确定', '取消']
  }, function (index) {
    console.log(index)
  })
}

showOpenDialog.onclick = function () {
  remote.dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'],
    filters: [{
      name: 'Images',
      extensions: ['jpg', 'png', 'gif']
    }]
  }, function (data) {
    console.log(data)
  })
}

saveDialog.onclick = function () {
  remote.dialog.showSaveDialog({
    title: 'Save File',
    defaultPath: '/Users/poetry/Downloads/',
    // filters 指定一个文件类型数组，用于规定用户可见或可选的特定类型范围
    filters: [{
      name: 'Images',
      extensions: ['jpg', 'png', 'gif']
    }]
  }, function (path) {
    // 不是真的保存 ，具体还需nodejs处理
    console.log(path)
  })
}
