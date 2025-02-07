## 春招执行方案

- 时间
  3月-5月
- 大厂最容易
  - 语言能力
  - 面试能力
  - 算法
- 3月-4月 面试新手期  4月份远程实习(AI远程实习)
  - 第一个目标 拿下一个offer 
    - Vue 项目模版 修改
    -transform + react
    - node + 全栈 + vue/react
    - leetcode  

  - 第二个目标找到实习 面大厂之前有一份实习经验（通过简历）
  - 4-5月 边实习边提升面试能力
  - 百度/字节 大厂+未来AI大厂
  - 5月 出去  

## deepseek
- 性价比高
  aigc
  百万 tokens 1元
  tokens 提问以及返回 按token计费
  token 分词

  参照物 gpt4 o1 每百万 280人民币 省去99.6%
- 为什么省
  - OpenAI 堆算力 GPU
  - 新的算法 甚至可以绕开 英伟达 cuda 编程
  - deepseek v3 2048 块 H800 训练出来557.6万美元，meta llama3 是deepseek 的11倍
    openai No.1 闭源的
    llama3 No.1 开源的
  - 英伟达骨架大跌
  - 关注用户 -> 赚大钱 -> AI

## DeepSeek AI 全栈App
前端 + 后端 + LLM AI fullstuck


- AI应用集合项目
  coze 工作流 + ai应用
  deepseek openai 的替代品 prompt
  基于langchain rag 应用开发

- react（chatbot）
-  node koa
-  LLM 请求（deepseek） 302.ai
  离线大模型调用

  react <-> koa <-> LLM
- 大前端（前后端分离）
  - 前端包着后端
    - 前端
    ：5173
      - react 组件
    - 后端
    domain：3000 请求
      - koa 框架
      - http 服务 3000 伺服状态
      - 路由 / chatai message ?
        - npm i koa-router （周边生态）
        - 实例化路由对象
        - router.Method('/path',async(ctx)=>{

        }) 注册路由
        - ctx 上下文对象 既能代表 request + response 
        - ctx.body 设置响应体
    - 跨域 同源策略

- ollama
  - 302.ai ai转发 online 大模型  
  - 本地访问大模型的可能
    某大厂，开源的deepseek-r1:1.5b
    ollama pull deepseek-r1:1.5b 拉取到本地    offline调用
    模型的微调 根据自己的业务或需求 重新的练一下deepseek
  - oama pull llama3.2：latest 拉取到本地
  - const add = (x,y) => x+y 简单的编程
    LLM（也是函数，但能接受巨大的参数）nlp + 全球的知识（机器学习） + transfomer机制 => AIGC 回答 大模型函数
  - ollama run deepseek -r1:1.5b 运行
     command line chatbot
     全栈应用的方式来通信
     - 11434 端口伺服
     - /api/chat 聊天的方式LLM 响应
       /api/generate 生成的方式LLM 响应
     - http 请求支持
  - 参数 （处理问题的规模）尺寸
    内存（8G）显卡等硬件相关
  - 集成deepseek 能力 可以实现了

- koa 
  路由定义好，是以函数的方式来处理从这个路由的用户，参数校验，逻辑功能，LLM axios 请求 返回资源，结束请求
  - 基于koa，koa-router 通过axios 向ollama 11434/api/chat 发送请求，获得LLM 响应
  - 封装AI LLM 接口

- react 去axios 向koa AI LLM 接口发送请求

- jsonp 跨域
js ajax/fetch cors
jsonp script 标签 <script src=""></script>
callback({a:1})
callback

同源策略会限制其读取响应内容以防信息泄露。而CORS（跨源资源共享）机制允许服务器通过特定的HTTP响应头告知浏览器该请求是被允许的，从而解除这种限制。因此，虽然同源策略会限制JavaScript读取跨域请求的响应，但不会直接“block”请求本身；相反，它控制的是能否访问请求的结果。

cors 后端方案  允许跨域

服务器端设置响应头，告诉浏览器允许跨域访问
ctx.set('Access-Control-Allow-Origin', '*'); 上下文，响应头
Access-Control-Allow-Origin: *
ctx.set'Access-Control-Allow-Methods', 
ctx.set'Access-Control-Allow-Headers', 

- option 预检请求 method之一
  比较温柔
  跨域请求 辉县发送一个Options请求，询问服务器是否允许跨域访问
  被允许，继续发送实际的请求 post

- koa服务 就像烤面筋
  - 中间件函数  洋葱模型
  - 有顺序
  - 从上到下执行 

- vue 和 react 区别
  - vue v-model 双向绑定
  - react 支持单项数据流 认为双向绑定性能不好
    单项 + 事件onChange
  - vue 支持事件修饰符 api 友好
  - react 手写