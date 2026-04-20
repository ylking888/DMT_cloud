---
up: "[[Obsidian/OBsidian-好用的插件推荐|OBsidian-好用的插件推荐]]"
---
首先打通 Obsidian 与本地 Ollama 的连接！🎉 作为一款开源 AI 文本生成工具，**Text Generator** 除了基础的生成回复外，还有很多能极大提升你笔记效率的高级功能，以下是核心功能一览与快速上手建议：
### 安装Text Generator插件
开源地址[nhaouari/obsidian-textgenerator-plugin: Text Generator is a versatile plugin for Obsidian that allows you to generate text content using various AI providers, including OpenAI, Anthropic, Google and local models.](https://github.com/nhaouari/obsidian-textgenerator-plugin)
![](assets/🔗OBsidian连接Ollama/file-20260420083534733.png)
### 配置Text Generator插件
1、Provider Profile 服务提供商配置 选择Ollama
2、Base URL / 地址栏： http://localhost:11434
（这是 Ollama 在你电脑上的默认服务地址）
3、Model / 模型栏：default
（也就是你之前设置好的默认模型，会自动加载 qwen3:14b）

### 基础使用
输入文字，并选中这句话，按 Ctrl + J即可调用
如果快捷键没有定义或者是其他的，可以使用 Ctrl + P查看
![](assets/🔗OBsidian连接Ollama/file-20260420085314570.png)


### 核心功能一览

- **文本生成**：支持多场景文案创作（如营销、故事、报告等）  
- **多语言支持**：覆盖中、英、日、韩等主流语言  
- **代码生成**：可输出Python、JavaScript等编程语言代码  
- **对话模拟**：生成自然对话内容（适用于客服、剧本等）  
- **内容扩展**：根据输入关键词自动补全长文本  
- **数据处理**：支持结构化数据转描述性文本（如表格转说明）  
- **定制化配置**：可调整生成风格（正式/口语化）、长度、逻辑深度等
- 
- 多模型与本地部署支持：兼容 OpenAI、Google Gemini、Anthropic Claude、HuggingFace 及本地 Ollama/LM Studio 等，你当前用的 Ollama 完全在支持范围内。
- 模板引擎与复用：用 Handlebars 模板封装重复任务（如摘要、标题、大纲），支持笔记 frontmatter 传参，一键批量处理多篇笔记。
- 上下文精准感知：可引入当前笔记、选中文本、链接笔记及标签库，让生成内容贴合你的知识体系。
- 社区模板共享：直接导入其他用户的高质量提示词模板，快速上手写作、总结、翻译等场景。
- 参数精细控制：支持调整温度（creativity）、最大生成长度（max tokens），还能估算 token 量以适配模型限制。
- 多种触发方式：除了默认的 Ctrl+J，还可通过命令面板、右键菜单（需开启设置）或模板 playground 触发。
- 笔记元数据驱动：在笔记 frontmatter 中指定指令、模板或模型，实现单篇笔记的个性化生成规则。

### 3 个立刻能用的场景
1.  笔记一键摘要：选中全文 → 按 Ctrl+J → 输入“用 3 句话总结本段核心观点”，快速提炼重点。
2.  标题与大纲生成：新建笔记写主题 → 选中 → 触发生成“生成 5 个吸引人的标题+三级大纲”，直接搭建写作框架。
3.  批量笔记改写：给多篇笔记加 frontmatter: instruction: "用通俗语言改写并补充案例"，批量触发统一处理。
4. [[Text Generator插件修改默认提示词模板]]
5. 

### 快速配置模板（以 Ollama 为例）
1.  打开 Obsidian 设置 → 第三方插件 → Text Generator。
2.  确认 Provider Profile 选 Ollama，Base URL 为 http://localhost:11434，Model 填 default（或你拉取的模型名如 qwen3:14b）。
3.  在 Default Prompt 中写入模板，例如：“基于以下内容生成摘要：{{selected_text}}，要求简洁准确，不超过 100 字”。
4.  保存后，选中任意文本按 Ctrl+J，即可按模板规则生成结果。

### 进阶小技巧
- 单篇个性化：在笔记 frontmatter 写 model: "qwen3:14b" 或 instruction: "用专业术语解释"，触发时会优先用该配置。
- 模板 playground：在插件设置中打开模板 playground，可实时调试模板变量与逻辑，不用反复试错。
- 社区模板：在插件设置的 Community Templates 中搜索并导入“笔记摘要”“学术改写”等模板，直接复用成熟方案。
