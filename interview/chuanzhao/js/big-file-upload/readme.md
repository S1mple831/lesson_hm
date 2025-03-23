# 大文件上传
- 问题
  等好久  n
  失败 用户沮丧

- 切片
  1G 50片
  重传
  断点续传
  - 切片大小的guize
    一般推荐的切片大小为1-5MB 2MB
    较大的切片能减少HTTP请求书，提高传输效率（多路复用的上限）
    但过大的切片会增加网络延迟，增加传输时间，增加请求失败重试的成本
    较小的切片会增加服务器端的存储成本，增加服务器端的负载
  - 切片是什么？
    slice File._propt_=Blob.prototype.slice
    File 是一个整体 由二进制（text/md image/jpg）构成
    Blob 帮助前端处理二进制数据

- http
  大文件 普通上传 1个http连接
  分片 http 2.0 多路复用 多个http连接 二进制流式（流ID）
  n/p

- 用户体验
  进度条 暂停 断点续传
  - input type=file 比较丑
  - 进度条是用户体验的一部分，它可以让用户了解文件上传的进度。告诉用户正在发生什么，以及它需要多长时间才能完成。

-  全栈
   - 前端 upload 复杂
     - File 对象 html5的新特性，让 js 可以访问文件系统
     - blob
     - FromData 表单数据 append
     - es6 map 表演
       blob 数组 -> blob 详细信息数组 -> fromData 数组 -> axios 请求数组
   - 后端 

- 写一遍 理解深度