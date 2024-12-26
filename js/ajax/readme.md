# JS 拉取数据接口

- Ajax 是老牌方案，基于 XMLHttpRequest 对象
  - 都会有请求数据接口
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url,false);
  - 发送请求
    xhr.send();
  - 通过事件监听
    xhr.status === 200 && xhr.readyState === 4
    xhr.responseText // 响应数据
- fetch 是新的方案，基于 Promise 对象
  fetch(url,{
    method:'POST'
  })
  - .then res => res.json()
  - .then data => console.log(data)