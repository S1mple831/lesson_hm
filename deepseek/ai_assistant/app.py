# 后端http 伺服
#request axios 调用deepseek api
#jsonify 接口json化
from flask import Flask, request, jsonify, send_from_directory
from openai import OpenAI
from dotenv import load_dotenv
# 系统模块
import os

load_dotenv()
# 实例化Flask app 对象
# python 没有new 
# 后端驱动的开发中 static 静态文件 => 前端
# 传统的后端 mvc 没有前后端分离
# 根路径
# 在static 目录下启动静态服务器 cdm
# / 直接指向 static 
app = Flask(__name__, static_url_path='', static_folder='static')

# 装饰器模式 mvc mvvm view
# 把server_index 装饰成路由的处理函数
# 路由 动态资源 router -> 取数据 -> 渲染 index.html
# 从文件系统 os
@app.route('/')
def server_index():
  return send_from_directory('static', 'index.html')

# restful 驱动 网站设计的一个规范 一切皆资源 url + method
# deepseek 路由接口
# 装饰器模式
@app.route('/chat',methods=['POST'])
def chat():
  try:
    # python 申明变量 不用var  弱类型脚本语言
    # request 请求对象 以json 格式解析请求体
    # python 同步的 js 异步的
    data = request.json
    model = data.get('model')
    message = data,get('message')
    temperature = data.get('temperature',1.0)

    #print(data)

    return jsonify({'message':'Hello World!'})
  except openai.error.OpenAIError as e: 
    return jsonify({'error':str(e)}),500

if __name__ == '__main__':
  app.run(debug=True)