# react fiber 时间切片

- 定时器 setTimeout setInterval setImmediate
- requestAnimationFrame 
- 文档碎片 documentFragment
- 重要？ js 本质是单线程， 浏览器是多线程的
  用户体验
  DOM树、响应式业务 100ms 毫秒级别 页面卡顿
  App.vue
    A.vue
      B.vue
        C.vue
          D.vue
            E.vue
              F.vue
                G.vue
                  H.vue
                    I.vue
                      J.vue
                        K.vue
                          L.vue
                            M.vue
                              N.vue
                                O.vue
                                  P.vue
                                    Q.vue
                                      R.vue
                                        S.vue
                                          T.vue
                                            U.vue
                                              V.vue
                                                W.vue

  组件越复杂（响应式更新），层级渲染越慢，渲染越慢

  - 组件的渲染或更新 怎么样在一定时间后停下来，让主线程有时间去处理其他任务 到时在接着执行 react 性能优化的 fiber机制 时间切片

  - 用户交互和时间处理 优先级高一些

  - requestAniumationFrame 主要是UI更新
    callback + 递归调用 时间间隔 1/60
  - requestIdleCallback 浏览器空闲的时候执行
    - 用户交互，事件等有限
    - react16 之后的API
    - 事件分片的 复杂组件或大数据响应式业务（股票K线图） 更新
      react 组件渲染 生命周期 虚拟DOM diff 渲染 子组件 更新...
      暂停当前任务 让主线程有时间去处理其他任务，下一个执行周期继续任务
      一系列的fiber 子任务
    - 负责的任务更多，和requestAniumationFrame 区别
    - 申请时间切片
    - 浏览器执行完主要任务（渲染、动画、时间...）
    - idle 后执行react fiber 任务
    - timeRemaing 剩余时间到了后 归还执行权

- react fiber 机制？
  是react 16 引入的新特性，实现了可中断渲染。 它将渲染工作分解为小单元（fiber 节点），可暂停，恢复。
  通过requestIdleCallback 和 requestAnimationFrame ，Fiber 在浏览器空闲时执行低优先更新，
  保障用户交互流畅，解决大型应用长任务（100ms，大量响应式数据，股市K线图，DOM 树层级太大）
  阻塞主线程问题。