// clipboard可以在主进程或渲染进程使用
const {
  clipboard,
  nativeImage
} = require('electron')

// 双击复制消息
const msg = document.querySelector('#msg')
const plat = document.querySelector('#plat')
const text = document.querySelector('#text')
const path = require('path')

msg.addEventListener('dbclick', () => {
  clipboard.writeText(msg.innerHTML)
  alert(msg.innerHTML)
})

plat.onclick = function () {
  text.value = clipboard.readText()
}

// 复制图片显示到界面
const copyImg = document.querySelector('#copyImg')
copyImg.onclick = function () {
  // 结合nativeImage模块
  const image = nativeImage.createFromPath(path.join(__dirname, '../static/img/lover.png'))
  console.log(image)
  // 复制图片
  clipboard.writeImage(image)

  // 粘贴图片
  const imgSrc = clipboard.readImage().toDataURL() // base64图片

  // 显示到页面上
  const imgDom = new Image()
  imgDom.src = imgSrc
  document.body.appendChild(imgDom)
}
