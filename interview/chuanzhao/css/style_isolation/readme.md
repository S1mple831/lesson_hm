# 样式隔离
是指在**组件**开发中，确保每个组件的样式不会影响其他组件，避免全局样式污染。
- 在Vue中的样式隔离
  单文件组件（SFC）scoped 
  实现的原理 属性选择器
  给每个组件的根元素添加一个唯一的属性（data-v-hash值），通过属性选择器来实现的。

  ```vue
<div class="example" data-v-f3f3eg9>
</div>
.example[data-v-f3f3eg9]{
    color:red;
}
  ```

  - vue中可以通过 >>> 来实现**嵌套样式隔离**
  - vue 也支持 css modules
    原理：带有随机数的类名
- react module css
  style.module.css
  - styled component(样式组件)

## 总结
 样式隔离 在单组件文件中实现样式隔离，避免全局污染。主要是通过属性选择器和动态生成类名来实现的（加点随机数，也叫hash串）。vue中使用 scoped 实现的，也支持module，还支持 >>> deep 来支持嵌套样式隔离。react通过引入module.css来实现样式隔离，其中css in js 也可以实现样式隔离。并带来了样式组件的创意