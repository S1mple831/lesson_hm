// commonjs 早期的node的模块化方案
// js 早期没有模块化方案 
// 函数  类是对象的模版（js没有 用构造函数），js业务简单 添加页面上的交互  对象  模块化方案 
// 幻灯片 js就干这些事
// 越来越复杂 要做文件分离 分层架构 一定要用更复杂的模块化方案
const sqlite3 = require('sqlite3'); //require 保留字 关键字  引入模块
// 后端逻辑和数据库逻辑是分开的
//可见即可得 db数据库连接对象 数据库操作句柄
//数据库的路径
//I/O操作 比较耗时间 到硬盘上读取数据库操作
const db = new sqlite3.Database('./mydatabase.db',
    async(err)=>{
        if(err){
            console.log('数据库连接失败',err);
            return;
        }
            console.log('数据库连接成功');
// 像风筝一样 数据库操作句柄
await db.run(`
    CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY ,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    salary INTEGER NOT NULL
)`)
//第一步 err 是否出错 容错还关键
//node js 快 ms级别
//数据库  在别的服务器/硬盘上 响应级别是s 级别
// await 连接数据库需要时间 
    });