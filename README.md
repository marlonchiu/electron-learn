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
