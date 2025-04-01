# 浏览器缓存
郭-1321231123-前端实习-AI全栈

- 二进制流传输
  - fs.createReadStream() 创建一个可读流
  - pipe 管道
  - res 流向res -> req client

- url 输入到看到页面
  - 域名解析
    dns 缓存
  - tcp/ip 
  三次握手 四次挥手
  - http 请求
    请求行 GET / 
  - cdn 服务器 （静态资源）
    缓存 
    响应速度快
  - ngnix（俄罗斯） （动态资源）
    - 负载均衡
      算法 轮询 返回不忙的服务器
    - 方向代理
      http://localhost8080 -> nginx -> node
      www.daidu.com:8080?
      www.daidu.com:80 80是默认的服务器端口
      ：80 -> ngnix 会写一个配置 代理到8080
  - server（硬件） 响应
    ：8080 端口 -> web 服务器（node/java）
    mvc 
  - html 解构到达浏览器
      - http2.0 server push 
    - DOM tree + CSSOM tree -> Render Tree + Layout + paint -> 图层（z-index transform 重绘）
    - link img ，script
  - dns 预解析
  - 如果之前访问过的静态资源，可以使用浏览器本地缓存
    - 强缓存
      响应头 Expires 到达之前，直接使用浏览器本地缓存
      memory cache -> disk cache ,如果过期了 就会重新发起请求
      缺点？ 用户的时间来判断 有可能不准
      - 相对时间 
      Cache-Control: max-age=60
    - 协商缓存
      - 假如强缓存没有命中，或过期
      - 如果文件没有改变，304 Not Modified 直接使用浏览器本地缓存，不用重新发起请求
      - 请求头和响应头 
        Last-Modified（文件修改信息）服务器端
        If-Modified-Since（文件修改信息）浏览器端
        服务器端时间不靠谱，分布式服务器时间不一致
        通过md5计算文件hash值，通过etag判断文件是否改变
        Etag（文件内容hash） 响应头
        If-None-Match（文件内容hash） 请求头
  - 使用浏览器的下载线程 /tom.png