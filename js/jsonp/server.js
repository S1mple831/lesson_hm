// http 服务启动
// 内置的http模块提供了HTTP服务器和客户端功能
// commonjs 规范 node早期3 es6 模块化规范
const http = require('http');
// 启动http服务
// 基于请求/响应的简单协议
const users = [
    {
        id:1,
        name:"张三"
    },
    {
        id:2,
        name:"李四"
    }
]
const server = http.createServer((req,res) => {
// 异步 高并发
// 请求来到服务器后，该函数会被执行
// req 请求对象解析
// 拿到资源
// res 响应请求,
// http 结束
res.end("callback" +JSON.stringify(users))
})
server.listen(3000,() => {
    console.log("server is running at 3000")
})