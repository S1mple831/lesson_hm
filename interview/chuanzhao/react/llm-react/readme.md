# 项目介绍

- 特色
- 沟通和长处
- 亮点（AI）和难点（性能优化、webworker、复杂组件，设计模式）
- 登录退出 频繁 刷新 token
- url method 设计的比较随意 get/post 区别 restful 重新设计
- 写页面 rem 换算很麻烦 找到了px2rem 插件
- 全栈能力 同源策略 vite 代理 cors 
- 稿子
  - 表达逻辑
  - 引导八股

## 使用大模型的方式
- openai 接口
- ollama 拉取开源模型
- transformers  摩搭社区 pipeline
- webgpu 进行浏览器端本地大模型的运行
- webworker 多线程

## 项目亮点
- web 端大模型 deepseek-r1
- Tailwindcss 来加速开发样式

## 项目难点
- webworker 
  js 单线程 webworker 会创建一个独立的worker线程（复杂计算）
  - 实例化 
    new Worker('worker.js')
  - 消息机制
    postMessage()
    onmessage()