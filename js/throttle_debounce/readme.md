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