# CSR 和 SSR

- CSR 
  所有 的路由和页面（组件）都是在客户端进行解析和渲染的 Client Side Rendering
  优点
  - 用户体验好，不需要等待服务器响应，不会白屏
  所有的路由和页面（组件）都是在客户端进行解析和渲染的 Client Side Rendering
  缺点
  - 首屏加载慢
    懒加载 按需执行
    执行组件的编译和渲染
  - SEO 不友好
- SSR 企业官网
  - 组件的编译和html 字符串放到服务器端渲染
  - SEO 更好

- @vue/server-renderer 渲染 -> html字符串
- @vue/compiler-ssr 编译