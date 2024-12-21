# AI 全栈项目

- 架构
  -frontend 前端
  -backend 后端
    提供数据接口 user.json作为数据文件 任何东西都能成为数据文件 
    文件型数据
    http服务 用户从本地 http:localhost:3001/user
    json-server

    - 提供数据接口
      - npm i json-server  
        - http server  本质 响应http请求 localhost 127.0.0.1
        - json 文件  json-server 运行json-server包 启动web服务 --port 3001  --watch user.json 监听的文件
      - script
        "dev":"json-server --port 3001 --watch user.json"
      - npm run dev 启动服务
  -llm ai server