import {ChatOpenAI}from"langchain/openai";
// Agent模块
// Agent 自动化
import {iniitializeAgentExecutorWithOptions}from"@langchain/agents";
// 检索增强 fileLoader 是一个urlLoader
import{CherrioWebBaseLoader}from"@langchain/community/document_loaders/web/cheerio";