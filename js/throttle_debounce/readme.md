- 认识几个url 
url的设计模式 restful api 一切皆资源的设计模式
网站是用来暴露资源的 如何将资源暴露出去（web开发）
  - http://localhost:3000/posts/  列表页的链接
  - http://localhost:3000/posts/：id 查询参数 详情页的链接
  - http://localhost:3000/users/：id 用户主页链接

- 数据的查询 Read
- 访问资源的方式
  - apiFox 是啥？  web 请求代理软件
    Get http//localhost:3000/posts/1
    Patch方式修改 是补丁 不是明文 http//localhost:3000/posts/1
  - 资源  db.json users posts
  - HTTP 协议
    - Method（动作 GET| PATCH 修改 | POST 新增） + url （资源）请求行 发送数据帧（第一行）
    - 请求头  Cookie 声明 Content-Type:application或text/json （告诉对方发送的是什么格式）（发送的数据是JSON格式）
    - 请求体  

- json-server
  - 提供 http 服务
  - 让 db.json 作为数据资源向外提供访问 CRUD

- 会涉及restful（资源） api 接口
  - 想下需求
    - 新增一篇文章
      http://localhost:3000/posts  POST
      请求体{
        。。。
      }

  - 删除文章2
    找到 http://localhost:3000/posts/2  DELETE

- json-server 是一个支持restful api设计的数据服务器

- 全栈防抖
 - 前后端分离 解耦 前后端开发互不干扰
  - 前端 live-server 5500
    fetch url 发送请求
  - 后端 json-server 3000
    url 接口服务 restful
  - api 接口

- filter、map
  - 都是Array.prototype 上的方法，所有数组都有
  - filter 对数组进行过滤，回调函数的返回值是否为true 决定是否保留当前元素
  - map 对数组进行映射，回调函数的返回值是新的元素 原有数组不能满足需求
  - forEach 迭代每一项 不需要返回

- 防抖
  - 将要执行的函数交给一个debounce（） 高阶函数去优化
  - 减少执行次数 只执行连续输入的最后一次
  - 靠定时器 本次会关掉上一次的定时器