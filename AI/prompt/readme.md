# Prompt 设计模式

- 吴恩达 Prompt Engineering 

- LLM  开发的模版
  - 代码工程
  1. npm init -y
  2. 将dependencies：{}部分拷贝进去
    执行npm install 
    node 后端项目的依赖

- dotenv 的理解
  - process.env 对象
  - key 不能在代码中以明文出现 所以选择process.env对象
  - 项目的根目录下添加 .env文件，包含key等信息
  - 不能提交到github中 找到.gitignore文件 添加这类文件的申明 .env
  - dotenv.config() 将.env 读入process.env 对象中  
- 了解Prompt 设计模式，开发功能需求Prompt 模版，AI 应用
  - 总结模版