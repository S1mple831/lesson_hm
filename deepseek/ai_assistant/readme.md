# AI Assistant 全栈项目
- 大前端全栈
- 后端驱动为主的
  - 设计模式
    大前端 前端 mvvm model（数据状态 useState，ref/reactive,api/axios 接口，Pinia）view

    model 模型层 = 数据定义 + 数据处理 + 数据管理 + 数据请求
    view 视图层 = component 组件 views components
    vm 视图模型层 数据绑定{} {{}}  数据驱动界面（v-if/v-for/v-show）... script 事件监听@Change onChange props



    写到哪算哪， 产品设计线框图 idear 亮点

    后端 mvc  数据库 mysql table 建立模型
    model 数据库独立于后端的 数据模型文件 schema orm
    view 视图层 = 前端页面 index.html about.html 
    controller 控制器层


  - 最大并发数
  - 基础设施
  - DDos 肉鸡攻击 qps
## 后端全栈AI 项目
- python flask 框架 node koa
  单点入口
- 纯js 
- deepseek 在线API  


## 写文章（ts+ next.js + react 思想） + leetcode 150+ 
  面试

## 项目准备
- 安装python
  3.10.6

- 配置虚拟环境
  python -m venv name
  本地项目项目依赖 不受全局影响，不影响全局
  项目下有了项目依赖包
  .\ai_assistant\Scripts\activate
- 安装依赖
  pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/

  openai 已经成为aigc LLM 的实施标准
  /completion/chat
  base_url deepseek
  Flask koa 后端框架

  - 没有前后端分离 mvc 开发模式
    - 前端 static 目录下
    - 路由 / 显示index.html