# 网易云音乐 html5

- 原创产品技术范
  
- h5
  - 手机网页 分享到朋友圈 病毒式的传播 
  - 选择模拟器
    - 进行本地调试
      根据设计稿的尺寸去调试 根据标准 iPhone 手机  设计稿尺寸 750px
      手机 Retina 屏 高清屏幕
      一个发光点pt（物理宽度） 有多个像素（2）= 2px
    - 真机调试

- dom 编程 dom节点
  - document.getElementById('j-bgm')
  - document.querySelector('#j-bgm')
  - 添加事件

- css 高级技巧
  - music-btn off
    musicBtn.classList 取得数组
  - music-btn  负责基础样式规则 off 负责增量 切换独立逻辑
    面向对象的多态的思想

  - audio
    - 近几年，涉及隐私问题，不允许直接播放音乐
    - js 的类方法 play() 触发
    - audio ， video 是网页的一部分

  - 用户体验细节
    - 要把用户当小白
    - 写页面指示器