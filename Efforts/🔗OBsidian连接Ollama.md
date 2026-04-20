---
up: "[[OBsidian攻略]]"
---
## 测试Ollama及启动的模型
```
ollama run default
```
## 安装Text Generator插件
开源地址[nhaouari/obsidian-textgenerator-plugin: Text Generator is a versatile plugin for Obsidian that allows you to generate text content using various AI providers, including OpenAI, Anthropic, Google and local models.](https://github.com/nhaouari/obsidian-textgenerator-plugin)
![](assets/🔗OBsidian连接Ollama/file-20260420083534733.png)
## 配置插件
1、Provider Profile 服务提供商配置 选择Ollama
2、Base URL / 地址栏： http://localhost:11434
（这是 Ollama 在你电脑上的默认服务地址）
3、Model / 模型栏：default
（也就是你之前设置好的默认模型，会自动加载 qwen3:14b）
