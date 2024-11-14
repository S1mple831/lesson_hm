# 面向 Openai 接口编程

- 多模态
  - 单模态
    chatgpt 文本
  - 图片、视频、音频

- npm init -y 后端
  npm i openai    openai sdk

  npm config set registry https://registry.npmmirror.com
  设置npm 的源，npm是国外的， 慢 ， 阿里在国内做了npm的镜像 提速

  - 花费时间 占用空间
    npm i -g openai
    npm i -g pnpm 是一个   
    哪里去了？ 命令行直接调用 环境变量？ 污染全局

  - 即不会重复安装，也不会污染全局，符号链接去指向之前的安装
    快了，省空间 pnpm

- main.mjs 主入口，单点入口的职责
  mjs 支持es6 module 模块化语法 import from

- 调试能力
console.log(result) 内容深 查看它的json 结构

- 理解参数 
  gpt4o 多模态读图能力 
     - 文本指令
     - 图片地址
- try catch
  容错 捕捉异常

- key 不能提交到github
  资产的安全风险