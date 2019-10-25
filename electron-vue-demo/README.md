# electron-vue-demo

> An electron-vue project

## Build Setup

```bash
# install dependencies
npm install
# serve with hot reload at localhost:9080
npm run dev
# build electron application for production
npm run build
```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

## 开发中需要注意的问题

### `element-UI`组件不显示的问题

参考地址[Use element-ui in electron-vue template have strange problems](https://github.com/SimulatedGREG/electron-vue/issues/361)

```text
我们需要把 element-ui 加入到.electron-vue/webpack.renderer.config.js 文件中的白名单里面
在这句话 let whiteListedModules = ['vue']添加 element-ui 组件
修改为 let whiteListedModules = ['vue', 'element-ui']
再运行项目，便能够成功构建出 el-table 表格了
```
