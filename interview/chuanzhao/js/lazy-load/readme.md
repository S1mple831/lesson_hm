# 图片懒加载

- 性能优化
  页面加载速度
  http 并发数 + 首屏（所在屏）
  
- src -> data-src
  onscroll
    节流
  图片是否在可视区
    getBoundingClientRect
    intersectionObserver

- v-lazy 在Vue中实现图片懒加载
  v-

- getBoundingClientRect
   - onscroll 监听
   - 节流
   - 处理函数 立即执行函数 闭包count
   - getBoundingClientRect() top<window.innerHeight
     innerHeight
       img.src = img.dataset.src
   - count++
   - 当count==img.length 取消监听
   - imageList filter 清除

- intersectionObserver

- 观察者模式

观察者模式是一种一对多依赖关系，当一个对象状态改变，依赖它的多个观察者会收到通知并自动更新。

观察者模式中观察者与被观察对象**直接**交互；订阅发布模式有中间调度中心，发布者和订阅者通过它**间接**通信。

事件总线

- vue 图片懒加载的时候？
  - 不能做DOM
  - <img v-lazy/>
   自定义一个v-lazy指令