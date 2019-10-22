# electron-learn 初级入门

## 学习指南

- 指南
  - [官方指南](https://electronjs.org/)
  - [Electron 构建跨平台应用 Mac/Windows/Linux](https://juejin.im/post/5c46ab47e51d45522b4f55b1)
- 实例
  - [electron + react + react-router + mobx + webpack 搭建的脚手架工程(配实例 DEMO)](https://github.com/ConardLi/electron-react)
  - [Electron 开发仿网易云音乐播放器](https://coding.imooc.com/class/351.html)
  - [Electron+React+七牛云 实战跨平台桌面应用](https://coding.imooc.com/class/384.html)

## 环境搭建

```bash
npm install -g electron
```

### 克隆官方入门仓库、快速启动一个项目

```bash
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install && npm start
```

### 手动搭建一个项目

- [开发一个简易的 Electron](https://electronjs.org/docs/tutorial/first-app)
- [blog 说明](https://juejin.im/post/5c46ab47e51d45522b4f55b1#heading-1)

### 脚手架构建项目

> electron-forge 相当于 electron 的一个脚手架，可以让我们更方便的创建、运行、打包 electron 项目

```bash
npm install -g electron-forge
electron-forge init my-new-app
cd my-new-app
npm start
```

## Electron 模块介绍

### Electron 主进程和渲染进程中的模块

![主进程和渲染进程中的模块](https://user-gold-cdn.xitu.io/2019/1/22/168740d8b763deef?imageslim)

### Electron remote 模块

> `remote` 模块提供了一种在渲染进程(网页)和主进程之间进行进程间通讯(`IPC`)的简便途径
>
> `Electron` 中, 与 `GUI` 相关的模块(如 `dialog`, `menu` 等)只存在于主进程，而不在渲染进程中 。为了能从渲染进程中使用它们，需要用`ipc`模块来给主进程发送进程间消息。使用 `remote` 模块，可以调用主进程对象的方法，而无需显式地发送进程间消息，这类似于 `Java` 的 `RMI

### 通过 BrowserWindow 打开新窗口

- `Electron` 渲染进程中通过 **remote 模块调用主进程中的 BrowserWindow** 打开新窗口

- [BrowserWindow 窗口 API](https://electronjs.org/docs/api/browser-window)

- 代码 electrondemo02

## 自定义顶部菜单/右键菜单

![自定义顶部菜单/右键菜单](https://user-gold-cdn.xitu.io/2019/1/22/168740d9151f7847?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 主进程中调用 Menu 模块-自定义软件顶部菜单

> 菜单项 https://electronjs.org/docs/api/menu-item
>
> `Electron` 中 `Menu` 模块可以用来创建原生菜单，它可用作应用菜单和 `context` 菜单
>
> 这个模块是一个主进程的模块，并且可以通过 `remote` 模块给渲染进程调用

### 渲染进程中调用 Menu 模块

> 不推荐使用这种方式，建议在主进程中使用
>
> ```javascript
> // 菜单引入的方式发生变化
> const { Menu } = require("electron").remote;
>
> // 其他代码和上面菜单一样
> // ...
> ```

### 渲染进程中自定义右键菜单

## 进程通信

![进程通信](https://user-gold-cdn.xitu.io/2019/1/22/168740d91968ca89?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> 主进程 ipcMain : https://electronjs.org/docs/api/ipc-main
>
> 渲染进程 ipcRenderer ：https://electronjs.org/docs/api/ipc-renderer

### 主进程与渲染进程之间的通信

> 有时候我们想在渲染进程中通过一个事件去执行主进程里面的方法。或者在渲染进程中通知 主进程处理事件，主进程处理完成后广播一个事件让渲染进程去处理一些事情。这个时候就 用到了主进程和渲染进程之间的相互通信
>
> `Electron` 主进程，和渲染进程的通信主要用到两个模块:`ipcMain` 和 `ipcRenderer`

- `ipcMain`:当在主进程中使用时，它处理从渲染器进程(网页)发送出来的异步和同步信息,当然也有可能从主进程向渲染进程发送消息。
- `ipcRenderer`: 使用它提供的一些方法从渲染进程 (`web` 页面) 发送同步或异步的消息到主进程。 也可以接收主进程回复的消息

> 操作对应 demo `electrondemo04`

#### 渲染进程给主进程发送异步消息

#### 渲染进程发送消息，主进程接收消息并反馈

#### 渲染进程给主进程发送同步消息

#### 渲染进程广播通知主进程打开窗口

> 一般都是在渲染进程中执行广播操作，去通知主进程完成任务

### 渲染进程与渲染进程之间的通信

#### `localStorage` 传值

> Electron 渲染进程通过 `localStorage` 给另一个渲染进程传值

#### BrowserWindow 和 webContents 方式实现

> 通过 `BrowserWindow` 和 `webContents` 模块实现渲染进程和渲染进程的通信
>
> `webContents` 是一个事件发出者.它负责渲染并控制网页，也是 `BrowserWindow` 对象的属性
>
> 操作对应 demo `electrondemo05`

##### **需要了解的几个知识点**

- 获取当前窗口的 `id`

  ```js
  const winId = BrowserWindow.getFocusedWindow().id;
  ```

- 监听当前窗口加载完成的事件

  ```js
  win.webContents.on("did-finish-load", event => {});
  ```

- 同一窗口之间广播数据

  ```js
  win.webContents.on("did-finish-load", event => {
    win.webContents.send("msg", winId, "我是 index.html 的数据");
  });
  ```

- 通过 `id` 查找窗口

  ```js
  let win = BrowserWindow.fromId(winId);
  ```

## Electron Shell 模块

![Electron Shell 模块](https://user-gold-cdn.xitu.io/2019/1/22/168740d96b3f32f4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### Shell 模块的使用

> 文档 https://electronjs.org/docs/api/shell
>
> `Electron Shell` 模块在用户默认浏览器 中打开 `URL` 以及 `Electron DOM webview` 标签。`Shell`既属于主进程模块又是渲染进程模块
>
> shell 模块提供了集成其他桌面客户端的关联功能
>
> 对应 `electrondemo06`

### `Electron DOM` `<webview>` 标签

> `Webview` 与 `iframe` 有点相似，但是与 `iframe` 不同, `webview` 和你的应用运行的是不同的进程。它不拥有渲染进程的权限，并且应用和嵌入内容之间的交互全部都是异步的。因为这能 保证应用的安全性不受嵌入内容的影响。

### 遗留问题

```js
// electrondemo06\main\menu.js

BrowserWindow.getFocusedWindow()  为 null
```

## Electron dialog 弹出框

![Electron dialog 弹出框](https://user-gold-cdn.xitu.io/2019/1/22/168740d979bf6f5d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> 文档 https://electronjs.org/docs/api/dialog
>
> `dialog`属于主进程中的模块
>
> `dialog` 模块提供了 `api` 来展示原生的系统对话框，例如打开文件框，`alert` 框， 所以 `web` 应用可以给用户带来跟系统应用相同的体验
>
> 相关实例 `electrondemo07`

## 系统托盘、托盘右键菜单、托盘图标闪烁

![系统托盘、托盘右键菜单、托盘图标闪烁](https://user-gold-cdn.xitu.io/2019/1/22/168740d99cee62fc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> 文档 https://electronjs.org/docs/api/tray
>
> 系统托盘，托盘右键菜单、托盘图标闪烁 点击右上角关闭按钮隐藏到托盘(仿杀毒软件)
>
> 实例 `electrondemo08`

## 消息通知、监听网络变 化、网络变化弹出通知框

> 对应 demo `electrondemo09`

### 消息通知

> `Electron` 里面的消息通知是基于 `h5` 的通知 `api` 实现的
>
> 文档 https://developer.mozilla.org/zh-CN/docs/Web/API/notification
