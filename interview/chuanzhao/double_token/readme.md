# 双token 鉴权
- JWT JSON Web Token

- 单 Token 长时间 不安全

- 验证access token refresh token
  - access token 负责验证功能 expiresIn 短一些 安全
  refresh_token
  - 401 access_token 失效
    refresh_token -> /api/refresh接口 
    服务器端返回新的access_token
  - 无感刷新