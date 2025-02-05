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