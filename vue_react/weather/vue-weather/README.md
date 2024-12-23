# 开发weather

- 组件思维
- 切页面
  - 先写template {{占位数据}} 写静态的
  - 考虑html5 语义化
  - BEM 命名规范
- BFC 基本概念
  Block Formating Context 块级格式化上下文
  - 浮动 float css早期用来实现两（多）列式布局的常用方案
    float: left; float: right; 左右 浮动
  - 产生问题
    - 父元素高度塌陷 浮动元素（子元素）脱离文档流 父元素高度为0
    - 后面的元素会挤占nav的空间
  - 和position 的区别， 四个方向上的定位 完全离开文档流
    float 左右 没有完全离开文档流 会影响周边的文字，形成环绕效果

- overflow:auto等一系列元素 display：flex 给我们的nav元素开启了一个BFC 
  - 规则 BFC 元素可以得到内部浮动元素的高度 不会在布局上影响到外面的元素
  - 块级元素不等于BFC