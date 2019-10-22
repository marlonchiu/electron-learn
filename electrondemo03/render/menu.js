// 在渲染进程中通过remote模块调用主进程中的模块
const electron = require('electron')
const {
  Menu
} = electron.remote
const {
  remote
} = electron

let menus = [{
    label: '文件',
    submenu: [{
        label: '新建文件',
        accelerator: 'ctrl+n', // 绑定快捷键
        click: function () { // 绑定事件
          console.log('新建文件')
        }
      },
      {
        label: '新建窗口',
        click: function () {
          console.log('新建窗口')
        }
      }
    ]
  },
  {
    label: '编辑',
    submenu: [{
        label: '复制',
        role: 'copy' // 调用内置角色实现对应功能
      },
      {
        label: '剪切',
        role: 'cut' // 调用内置角色实现对应功能
      }
    ]
  },
  {
    label: '视图',
    submenu: [{
        label: '浏览'
      },
      {
        label: '搜索'
      }
    ]
  }
]

const myMenu = Menu.buildFromTemplate(menus)
// Menu.setApplicationMenu(myMenu)

// 绑定右键菜单
window.addEventListener('contextmenu', (event) => {
  event.preventDefault()
  myMenu.popup({
    window: remote.getCurrentWindow()
  })
}, false)
