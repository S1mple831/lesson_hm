const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');//  hash md5

http.createServer((req,res)=>{

    let {pathname} = url.parse(req.url,true);
    // console.log(url.parse(req.url,true))
    // res.end(pathname);
    if(pathname === '/'){
        // 管道
        // __dirname 项目根目录的物理路径
        // 项目可能要移动，部署在服务器上
        fs
          .createReadStream(path.join(__dirname,'index.html'))
          .pipe(res)
        return ;
    }

    // 
    let abs = path.join(__dirname,pathname);
    // console.log(abs);
    //获取文件状态信息
    // 强缓存
    // res.setHeader('Expires',new Date(Date.now() + 200000).toGMTString())
    // res.setHeader('Cache-Control','max-age=20')

    fs.stat(abs,(err,stat)=>{
        console.log(stat.mtime.toGMTString(),'/////')
        res.setHeader('Last-Modified',stat.mtime.toGMTString())
         if(err){
             res.statusCode = 404;
             res.end('not found');
             return ;
         }

         // 浏览器
         if(req.headers['if-modified-since'] === stat.mtime.toGMTString())
         if(state.isFile()){
            fs.createReadStream(abs).pipe(res);
         }

    })
})
.listen(8080);