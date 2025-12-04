[Google AI Studio](https://aistudio.google.com/prompts/new_chat)
![](assets/Google%20AI%20Studio/file-20251202095028610.png)
# 简介及界面
![](assets/Google%20AI%20Studio/file-20251202095503756.png)
# 参数设置
## 基础参数配置

### 模型选择
![500](assets/Google%20AI%20Studio/file-20251202101300576.png)

### 系统指令
全局系统提示词，可以把个人的喜好和信息全部写进去

![](assets/Google%20AI%20Studio/file-20251202100401553.png)
### 计费状态
免费版不用管
### 提示词温度
使用Gemini3强烈建议设为1
![](assets/Google%20AI%20Studio/file-20251202102023221.png)
#### Temperature和Top-p原理
这两个参数都是用来控制大模型回答的答案的随机性和创造力的。
![](assets/Google%20AI%20Studio/file-20251201102528384.png)
##### 生成分数
![](assets/Google%20AI%20Studio/file-20251201102907920.png)
![](assets/Google%20AI%20Studio/file-20251201102932070.png)
##### 转换概率
![](assets/Google%20AI%20Studio/file-20251201103252894.png)
![](assets/Google%20AI%20Studio/file-20251201103320110.png)
##### 加权采样

![](assets/Google%20AI%20Studio/file-20251201112828410.png)
##### Temperature
![](assets/Google%20AI%20Studio/file-20251201113027918.png)
![](assets/Google%20AI%20Studio/file-20251201113455661.png)
##### Top-p
![](assets/Google%20AI%20Studio/file-20251201113619975.png)
![](assets/Google%20AI%20Studio/file-20251201113700660.png)
![](assets/Google%20AI%20Studio/file-20251201113856131.png)
### 媒体分辨率
大部分情况下保持默认值
如果有大量图片，或者复杂的工程图纸，再开启high高分辨率
### 思考等级
默认High，保持完整的推理分析
### 工具开关
#### Structured outputs
强制AI按照你定义的JSON结构输出
#### Code execution
允许大模型执行Python代码
### Function calling
函数调用：调用API时开启
在使用智能体的时候调用的，比如调用外部的API
### Grounding with Google Search
开启谷歌搜索：时效性强的任务
Gemini 3训练数据截止：2025年1月
### URL context
发送网址给AI，建议保持开启。当你发送的内容中有网址的时候，Gemini就会读取网址上的内容。
比如Github、论文、文献的链接上的内容。
![](assets/Google%20AI%20Studio/file-20251202103401078.png)
## 高级参数设置

![1764643030331](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764643030331.png)

### Safety settings

安全过滤：默认全关，打开后彻底放开AI，比如暴力、色情的内容也会生成（写小说）

### Add stop sequence

停止序列：输出到指定词汇就立刻闭嘴

### output length

保持最大值即可

### Top P

不建议修改

# 博主主页https://jason-effi-lab.notion.site

# Google AI Studio 平台简介

> **Google AI Studio** 是 Google 提供的生成式 AI 原型设计与开发平台。与面向终端用户的 Gemini 网页版不同，AI Studio 是一个**大型实验场 (Playground)**，允许用户直接调用底层 API、调整推理参数（如 Temperature, Top P）以及构建应用程序。

###  访问环境与前置要求
*   **网络环境**: 必须使用不受限制的国际网络环境 (科学上网)。
*   **账号凭证**: 需要使用 Google 账号 (Gmail) 登录。
*   **数据存储**: 所有交互数据与历史记录均默认存储于用户的 **Google Drive** 云盘中，具备云端同步特性。



# ⚙️ Gemini 3.0 Pro 参数配置



## 1. 基础配置参数 (Run Settings)

| 参数名称 (Parameter)                  | 推荐设置 (Gemini 3)                  | 功能详解与配置说明 (Technical Description)                   |
| :------------------------------------ | :----------------------------------- | :----------------------------------------------------------- |
| **Model**<br>(模型选择)               | **Gemini 3.0 Pro Preview**           | **模型版本选择**。<br>• **Gemini 3.0 Pro Preview**: 当前在 AI Studio 中提供免费试用 (Free Tier)，支持 100万上下文窗口。<br>• **Nano Banana Pro**: 由 Gemini 3 驱动的多模态模型，通常需要绑定支付方式 (Billing) 方可使用。 |
| **System Instructions**<br>(系统指令) | **结构化 Markdown 模版**             | **全局系统级提示词 (System Prompt)**。<br>• **定义**: 设定对话的全局规则、角色人设及输出框架，具有最高优先级 (Highest Priority) 和抗遗忘性 (Persistence)。<br>• **优势**: 相比直接在对话框输入的 Prompt，系统指令更能防止长对话中的指令漂移 (Instruction Drift)。 |
| **No API Key**<br>(计费状态)          | **N/A** (无需操作)                   | **计费状态指示**。<br>• 使用 Gemini 3.0 Pro Preview 时无需配置，系统默认免费。<br>• 若切换至付费模型，此处将要求配置 API Key 并关联 Google Cloud 结算账户。 |
| **Temperature**<br>(提示词温度)       | **1.0 (默认值)**<br>⚠️ **不建议修改** | **随机性控制 (Entropy Control)**。<br>• **Gemini 3 特性**: 模型引入了内建的思维链 (Chain of Thought) 推理机制。该机制依赖高熵值 (High Entropy) 进行逻辑路径探索。<br>• **警告**: 调低温度 (如 0.2) 会导致推理能力坍塌、逻辑死循环 (Infinite Loops) 或质量退化。<br>• **对比**: Gemini 2.5 模型可按需调整（创意任务调高，严谨任务调低）。 |
| **Media Resolution**<br>(媒体分辨率)  | **Default**                          | **多模态输入采样精度**。<br>• **Default**: 适用于绝大多数场景。<br>• **High**: 仅在处理高密度信息图片（如复杂工程图纸、密集数据报表）时开启。 |
| **Thinking Level**<br>(思考等级)      | **High (默认)**                      | **推理深度控制 (Compute Budget)**。<br>• **High**: 激活 Gemini 3 的完整推理能力，进行深度分析。响应延迟 (Latency) 较高，但逻辑性最强。<br>• **Low**: 浅层思考模式。响应速度接近 Gemini 2.5 Flash，适用于简单对话。 |

---

## 2. 工具集成 (Tools)



| 参数名称 (Parameter)                           | 推荐设置           | 功能详解与配置说明 (Technical Description)                   |
| :--------------------------------------------- | :----------------- | :----------------------------------------------------------- |
| **Structured Outputs**<br>(结构化输出)         | **Off** (按需开启) | **JSON 格式强制约束 (Constrained Decoding)**。<br>• 开启后需定义 JSON Schema。<br>• 强制模型严格按照定义的 JSON 结构输出，适用于数据提取或 API 对接场景。 |
| **Code Execution**<br>(代码执行)               | **按需开启**       | **Python 沙盒环境**。<br>• 允许模型在后台编写并运行 Python 代码。<br>• 适用于数学计算、复杂逻辑运算或数据分析，替代纯文本预测以提高准确率。 |
| **Function Calling**<br>(函数调用)             | **Off**            | **外部 API 调用**。<br>• 用于构建 AI Agent (智能体)，允许模型调用外部定义的函数或 API。<br>• 普通对话用户保持关闭即可。 |
| **Grounding with Google Search**<br>(谷歌搜索) | **按需开启**       | **联网检索增强**。<br>• 允许模型实时访问 Google 搜索结果。<br>• 解决模型训练数据截止问题 (Gemini 3 截止于 2025年1月)，适用于时效性强的问题。 |
| **URL Context**<br>(URL 上下文)                | **On**             | **链接内容解析**。<br>• 允许模型读取 Prompt 中包含的 URL 内容（如 GitHub 仓库、arXiv 论文）。<br>• 建议常驻开启，以增强上下文获取能力。 |

---

## 3. 高级设置 (Advanced Settings)

此区域涉及安全过滤与生成控制参数。

| 参数名称 (Parameter)              | 推荐设置                      | 功能详解与配置说明 (Technical Description)                   |
| :-------------------------------- | :---------------------------- | :----------------------------------------------------------- |
| **Safety Settings**<br>(安全设置) | **Block None**<br>(全部关闭)  | **内容安全过滤器**。<br>• 控制模型对敏感内容（骚扰、仇恨言论、性描写、危险内容）的拦截阈值。<br>• **建议**: 在进行创意写作（如小说中的反派描写、冲突情节）时，建议将所有滑块设为 Off，以避免模型拒答。 |
| **Stop Sequence**<br>(停止序列)   | **按需配置**<br>(如: `User:`) | **强制终止符**。<br>• 当模型生成的内容匹配到指定字符串时，立即终止生成。<br>• **应用场景**: 防止角色扮演中的“自问自答”（例如设置 `User:`，防止 AI 自动补全用户台词）。 |
| **Output Length**<br>(输出长度)   | **65536**<br>(默认最大值)     | **单次生成 Token 上限**。<br>• Gemini 3 支持长达 64k token 的单次输出。<br>• AI Studio 环境下免费，建议保持最大值以防止长文被截断。 |
| **Top P**<br>(核采样)             | **0.95 (默认值)**             | **采样多样性控制 (Nucleus Sampling)**。<br>• 配合 Temperature 使用。<br>• **Gemini 3 策略**: 由于 Temperature 必须锁定为 1.0，Top P 应保持默认值 0.95，以维持模型内部推理采样的分布平衡，防止逻辑断裂。 |



# 💡 Google AI Studio 使用技巧与注意事项



| 类别 (Category) | 功能/事项 (Item)                                   | 操作说明与核心机制 (Operation & Mechanism)                   |
| :-------------- | :------------------------------------------------- | :----------------------------------------------------------- |
| **交互优化**    | **快捷键提交设置**<br>(Submit Prompt Key)          | • **操作路径**: 点击界面左下角 `Settings` ⚙️ -> 在 `Submit prompt key` 选项中选择 **`Ctrl + Enter`**。<br>• **功能说明**: 默认配置下 `Enter` 键即触发提交。更改为 `Ctrl + Enter` 后，`Enter` 键仅用于文本换行。该设置有效防止误触提交，支持用户在对话框中从容编辑多行复杂提示词 (Multi-line Prompts)。 |
| **模型评估**    | **对比模式**<br>(Compare Mode)                     | • **操作路径**: 点击界面右上角 `Compare` 按钮。<br>• **功能说明**: 界面将分裂为左右两个独立窗口，支持同时运行两个不同模型 (推荐配置: 左侧 **Gemini 3.0 Pro** vs 右侧 **Gemini 2.5**)。<br>• **应用场景**: 适用于文案生成等主观质量评估任务。通过 **A/B 测试 (A/B Testing)**，直观对比不同模型在同一 Prompt 下的推理逻辑、响应速度及文本风格差异。 |
| **数据持久性**  | **系统指令存储机制**<br>(Local Storage Limitation) | • **当前机制**: AI Studio 中的 `System Instructions` 配置目前依赖于**浏览器本地存储 (Local Storage)**，并未完全实现云端账号同步。<br>• **潜在风险**: 更换浏览器、更换电脑设备或清理浏览器缓存 (Clear Cache) 后，已输入的系统指令可能会丢失。<br>• **最佳实践**: 建议将调试完成的 System Instructions 模版（如 Markdown 格式）备份至外部笔记软件 (如 Obsidian, Notion) 中，以便随时调用恢复。 |


# 系统指令提示词模版

````
# IDENTITY_AND_PURPOSE
你是一个 **[插入角色，例如：资深 Python 架构师]**。
你的核心目标是 **[插入目标，例如：将用户的模糊需求转化为高质量、可维护的代码]**。

# KNOWLEDGE_BASE
<context>
[在此处粘贴背景资料、业务术语表或参考文档。]
[Gemini 3.0 提示：长文本请务必保留此 XML 标签，以便模型区分资料与指令。]
</context>

# OPERATIONAL_PROTOCOLS (操作协议)

### 1. Reasoning Strategy (思维策略)
在生成最终回复前，请在后台进行以下逻辑检查：
- 识别用户的**核心意图**，而非字面意思。
- 检查是否存在逻辑漏洞或安全风险。
- **一致性检查**：确保回复完全符合下方的“负面约束”。

### 2. Style & Tone (风格基调)
- **语言**：默认使用**简体中文**回复（除非用户指定其他语言）。
- **语气**：**[插入语气，例如：专业、冷静、客观，拒绝翻译腔]**。
- **格式**：结构清晰，善用列表和粗体强调重点。

### 3. Negative Constraints (⛔ 严令禁止)
- ⛔ **禁止废话**：不要说“希望能帮到你”、“这是一个很好的问题”等客套话。
- ⛔ **禁止幻觉**：如果背景资料中没有答案，请直接说明“资料不足”，严禁编造数据。
- ⛔ **禁止代码解释**：除非用户要求，否则只输出代码块，不要逐行解释代码含义。

# RESPONSE_FORMAT (输出格式)
请严格按照以下 **[Markdown / JSON]** 格式输出：

[如果是 Markdown]
## 深度分析
(简要的逻辑分析)

## 解决方案
(正式的回复内容)

[如果是 JSON，请提供 Schema]
​```json
{
  "thought": "简短的思考过程...",
  "result": "最终内容..."
}
​```
````

# 打开Notebooklm的技巧

1. **切换节点**：请务必切换到 **美国 (USA)** 的节点。不要用香港、日本或新加坡（虽然名义上支持，但经常被判定失败）。

2. **开启全局模式**：确保您的辅助工具使用的是 **“全局模式” (Global Mode)**，而不是 PAC/规则模式。

3. **更换线路**：如果您当前的美国节点不行，尝试换一条（例如从“美国01”换到“美国05”）。

4. 打开浏览器的 **无痕模式/隐私窗口** (Ctrl+Shift+N)，在无痕窗口中访问

   ```
    notebooklm.google.com 
   ```

   并重新登录。

5. 如果无痕模式能进，说明是缓存问题，清理一下浏览器的 Cookie 即可。

![1764721102772](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764721102772.png)

# 使用Notebooklm解析pdf【已经不能用了】

打开Notebooklm并登录。

上传来源

![1764721592834](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764721592834.png)

你可以生成播客、生成解说视频、思维导图、报告、闪卡、测试题、信息图、PPT

![1764721686421](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764721686421.png)

注意先修改语言为简体中文。

最近比较火的是生成PPT，因为接入了Nano Banana之后，设计的PPT非常具有审美。

![1764721893243](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764721893243.png)

生成的PPT是一张一张静态的图片，以PDF的形式打包下载。

范例的提示词：

- Create a fashion product collage on a brown corkboard based on this outfit.
  基于这套穿搭，在棕色软木板上制作一张时尚单品拼贴画。
- Create an orthographic blueprint that describes this building in plan.
  绘制一份正投影蓝图，以平面图形式描述该建筑。
- Create an illustrated explainer, detailing the physics of the fluid dynamics.
  制作一份带插图的讲解材料，详细阐述流体动力学的物理原理。

# Ai提示词网站
[Nanobanana | AI Image Prompts & Generator Library](https://www.aiwind.org/)
![](assets/Google%20AI%20Studio/file-20251204153034415.png)
![](assets/Google%20AI%20Studio/file-20251204153100996.png)