- package.json
  项目描述文件
  - dependencies 依赖部分
  - devDependencies 开发期间的依赖
  - scripts 脚本
    npm run dev development 开发期间脚本

- 版本号 的意义
  > 1.0.0 正式版 用于商用 成熟了 为用户负责
  - 1.0.0 主版本号 1主版本 0次更新 0bug修复
  - 2.0.0 重大更新 本质的改变
  - 2.2.0 次版本号 添加了某项功能
  - 2.2.1 bug 修复

- es6
  - es6 模块化 import from  文件后缀mjs
  - 解构 
    对象、数组一次性解构 获得一批变量
    - 待解构的的对象在右边
    - 解构出来的在左边
    - 对象（key）{}、数组（下标）[]都可以解
    - ... rest 剩余运算符 剩下的他都要

- AI 爬虫的核心
  - 发送请求爬取HTML 完成了 输入（html 字符串）
    - http 请求
    - 解析出来 indent
  - 交给大模型
    ·
    ${indent_html}
  Get the image link
  `