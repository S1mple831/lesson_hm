// 实例化的时候，传递函数，里面装耗时性任务
const p = new Promise((resolve,reject) => { // executor 执行器函数
    console.log('333') // 同步任务
    setTimeout(() => { // 异步任务 在event loop
        console.log('222')
        //resolve()
        resolve('BMW325')
    },1000)
})
// 异步任务的执行顺序控制的话 用promise
console.log(p.__proto__,p);
p.then(() =>{
    // 等到executor里面的异步任务执行完毕，再执行then里面的回调函数
    console.log('111')
    console.log(p)
    console.log(data)
})
.catch(() => {
    console.log('error')
})
