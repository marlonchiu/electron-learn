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

