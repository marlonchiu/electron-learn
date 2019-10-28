# electron-vue脚手架创建项目异常问题解决

##  环境升级

> [参考文档博客](https://www.jianshu.com/p/4ea442e2ef12)

`electron-vue` 脚手架的环境尽量不要升级，但是`vue`之类的版本太低，可以升级一下。但是环境`loader`，`webpack`之类的东西千万不要升，升级之后环境会崩溃

###  `npm-check`安装

  ```bash
npm install -g npm-check //全局安装。项目下安装可自行选择

npm install npm-check    //项目下安装，项目根目录执行
  ```

### `npm-check`项目依赖包更新

   ```bash
npm-check -u

# 更新是在创建项目后，npm install之前，否则会有东西查不出来
   ```

如图既是在未npm install 之前进行升级 ，图上已选择不会导致环境崩溃的项目进行升级

![可更新的选择](http://pzxqru49l.bkt.clouddn.com/images/7226092-5b21f11fadbcf2b6.webp)

## 使用 electron-builder 及 electron-updater 给项目配置自动更新

> [使用 electron-builder 及 electron-updater 给项目配置自动更新](http://www.voidcn.com/article/p-vaicszcg-brv.html)

## 升级后项目 electron-debug警告

> [electron-debug警告](https://github.com/SimulatedGREG/electron-vue/issues/498)

![electron-debug警告](http://pzxqru49l.bkt.clouddn.com/images/electron-debug%E8%AD%A6%E5%91%8A.png)

> * 解决方案
>
> ```javascript
> // ...\.electron-vue\webpack.main.config.js
> 
> externals: [
>   ...Object.keys(dependencies || {}),
> + {'electron-debug': 'electron-debug'}
> ],
> ```

##  升级后使用`require`方法报错

* 原因：是不支持node API了

* 解决方案

  ```javascript
  // src\main\index.js
  
  
  mainWindow = new BrowserWindow({
      height: 563,
      useContentSize: true,
      width: 1000,
      // 增加  设置支持node api
      webPreferences: {
        nodeIntegration: true
      }
    })
  ```

## `element-UI`组件不显示的问题

> 参考地址[Use element-ui in electron-vue template have strange problems](https://github.com/SimulatedGREG/electron-vue/issues/361)

```javascript
我们需要把 element-ui 加入到.electron-vue/webpack.renderer.config.js 文件中的白名单里面

在这句话 let whiteListedModules = ['vue']添加 element-ui 组件

修改为 let whiteListedModules = ['vue', 'element-ui']

再运行项目，便能够成功构建出 el-table 表格了

```

## Devtools extensions no longer load in 7.0.0

> [Devtools extensions no longer load in 7.0.0](https://github.com/electron/electron/issues/20677)
>
> 
>
> 因为 electron 升级到了版本7.0.0 ,虽然安装了vue-devtools，chrome也可以看到  但是 并没有显示空白
>
> 打开 VueDetools，cmd 报错（无语啊升级需谨慎！！！）
>
> ```javascript
>  [11192:1028/145813.461:ERROR:CONSOLE(2153)] "Uncaught Error: Connect to unknown extension [object Object]", source: electron/js
> 2c/sandbox_bundle.js (2153)
> ```