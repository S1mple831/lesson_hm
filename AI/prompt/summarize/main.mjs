import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config()

// 启动一个进程 process  后端
// env 对象  环境对象
// 进程是分配资源的最小单位
// console.log(process.env);
const client = new OpenAI({
  // node 里的进程对象
  apiKey: process.env.OPENAI_API_KEY,
  baseURL:process.env.OPENAI_BASE_URL
})
// es6 默认参数值
// 通用的LLM 聊天完成接口函数， 复用
const getCompletion =  async (prompt, model="gpt-3.5-turbo") => {
  // 用户提的问题
  const messages = [{
    role: 'user',
    content: prompt
  }];
  // AIGC chat 接口
  const response = await client.chat.completions.create({
    model: model,
    messages: messages,
    // LLM 生成内容的随机性
    temperature: 0
  }) 
  return response.choices[0].message.content
}

const main = async () => {
  const response = await getCompletion('你好啊')
  console.log(response);
}

main()