# 如何删除cookie

- cookie 本地存储 随着请求传输 4KB
- Domain 域名
  document.cookie = 'token=123;domain=baidu.com;'
- path 路径
  document.cookie = 'token=123;domain=baidu.com;path=/a/b/c;'
- Expirse/Max-Age
  document.cookie = 'token=123;domain=baidu.com;path=/a/b/c;Expirse=2023-01-01;'
  document.cookie = 'token=123;domain=baidu.com;path=/a/b/c;Max-Age=3600;'
- Secure 只在https 下传输
- HttpOnly 只在http 下传输，不能被js 读取 防止XSS 攻击
- Samesite 限制第三方cookie
  - Strict 不允许第三方携带
  - Lax 允许第三方携带，但get 请求不携带，post 请求携带，防止CSRF 攻击
  - None 允许第三方携带，get post 请求都携带，防止CSRF 攻击
  