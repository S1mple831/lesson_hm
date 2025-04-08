// worker 线程
// 不是普通的js 线程
// 不可以访问DOM
self.onmessage = function(e){
    console.log(e.data);
    self.postMessage({
        message:'worker 处理完成'
    });
}