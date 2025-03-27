// 导入Koa框架，用于创建Web服务器
import Koa from 'koa';
// 导入跨域资源共享（CORS）中间件，允许跨域请求
import cors from '@koa/cors';
// 导入Koa路由中间件，用于定义路由
import Router from 'koa-router';
// 导入请求体解析中间件，用于解析JSON等格式的请求体
import bodyParser from 'koa-bodyparser';
// 从app.service.mjs模块导入client对象，可能用于与外部服务交互
import { client } from './app.service.mjs';
// 导入Node.js的文件系统模块，使用其Promise版本，用于异步文件操作
import fs from 'fs/promises';

// 定义输入文件路径，存储待处理的帖子数据
const inputFilePath = './data/posts.json';
// 定义输出文件路径，存储处理后的帖子数据
const outputFilePath = './data/posts_with_embedding.json';

/**
 * 异步读取输入文件内容，并将其解析为JSON对象
 * @returns {Promise<Object>} 解析后的JSON对象
 */
const data = await fs.readFile(inputFilePath, 'utf-8');
const posts = JSON.parse(data);

// 创建Koa应用实例
const app = new Koa();
// 创建路由实例
const router = new Router();
// 定义服务器监听的端口
const port = 3002;

/**
 * 计算两个向量之间的余弦相似度
 * @param {Array<number>} a - 第一个向量
 * @param {Array<number>} b - 第二个向量
 * @returns {number} 余弦相似度值
 * @throws {Error} 如果两个向量的长度不匹配
 */
function cosineSimilarity(a, b) {
    // 检查两个向量的长度是否一致，如果不一致则抛出错误
    if (a.length !== b.length) {
        throw new Error('向量长度不匹配');
    }

    // 初始化点积
    let dotProduct = 0;
    // 初始化向量a的模长平方
    let normA = 0;
    // 初始化向量b的模长平方
    let normB = 0;

    // 遍历向量的每个元素，计算点积和模长平方
    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }

    // 计算并返回余弦相似度
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// 使用CORS中间件，允许跨域请求
app.use(cors());
// 使用请求体解析中间件，解析请求体
app.use(bodyParser());

/**
 * 定义一个POST请求的路由，用于处理搜索请求
 * @param {Object} ctx - Koa上下文对象
 * @returns {Promise<void>} 无返回值
 */
router.post('/search', async (ctx) => {
    // 从请求体中提取关键词
    const { keyword } = ctx.request.body;
    // 打印关键词
    console.log(keyword);
    // 调用client对象的embeddings.create方法，将关键词转换为向量表示
    const response = await client.embeddings.create({
        model: 'text-embedding-ada-002',
        input: keyword,
    });
    // 从响应数据中提取关键词的嵌入向量
    const { embedding } = response.data[0];
    // 计算每个帖子的嵌入向量与关键词嵌入向量之间的余弦相似度，并对结果进行排序和筛选
    const results = posts.map(item => ({
        ...item,
        similarity: cosineSimilarity(embedding, item.embedding)
    }))
    .sort((a, b) => a.similarity - b.similarity)
    .reverse()
    .slice(0, 3)
    .map((item, index) => ({ id: index, title: `${index + 1}.${item.title},${item.category}` }));

    // 设置响应体，包含状态码和搜索结果
    ctx.body = {
        status: 200,
        data: results
    };
});

// 使用路由中间件处理路由请求
app.use(router.routes()).use(router.allowedMethods());
// 启动服务器并监听指定端口
app.listen(port, () => {
    // 打印服务器启动信息
    console.log(`Server is running at http://localhost:${port}`);
});
