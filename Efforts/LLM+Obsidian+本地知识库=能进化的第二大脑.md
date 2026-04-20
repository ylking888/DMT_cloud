---
created: 2026-04-17
---
# Step1 建立知识库
![](assets/LLM+Obsidian+本地知识库=能进化的第二大脑/file-20260417180813002.png)
把你所有的文件夹全部都放进RAW里
可以使用不同的文件夹进去分类管理
也可以按照ACE法则管理
## Typeless（与本主题无关）
![](assets/LLM+Obsidian+本地知识库=能进化的第二大脑/file-20260417180944143.png)
识别准确率很高，  [[../Atlas/语音输入法Typeless]]

## 安装obsidian浏览器插件（与本主题无关）
[[../Atlas/Obsidian/Obsidian-安装浏览器 Obsidian 插件|Obsidian-安装浏览器 Obsidian 插件]]
它能把网页一键转换成md文件保存到你的文件夹下

# Step2 关联AI命令行工具
![](assets/LLM+Obsidian+本地知识库=能进化的第二大脑/file-20260417181259890.png)
这才是重点需要突破的地方

# Step3 提问
![](assets/LLM+Obsidian+本地知识库=能进化的第二大脑/file-20260417181425235.png)---

带有启发的视频：[LLM+Obsidian+本地知识库=能进化的第二大脑_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1DXQ7BhE9t/?spm_id_from=333.337.search-card.all.click&vd_source=b00ffc87d2f4365faf01741e93e463bb)
 带有启发的视频2：[Obsidian+AI构建个人知识库_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1c6XDBCEfw/?spm_id_from=333.337.search-card.all.click&vd_source=b00ffc87d2f4365faf01741e93e463bb)

## 下载安装Cursor，使用Github登录
下载地址：[Cursor · Download](https://cursor.com/cn/download)
 使用的是17579646@qq.com邮箱和13801408965收验证码
 ![](assets/LLM+Obsidian+本地知识库=能进化的第二大脑/file-20260420155132045.png)
 ### 修改为中文界面
 可以用快捷键Ctrl + Shift + X（我的快捷键跟截图软件冲突），或者直接点菜单：
- 顶部菜单栏点 View（视图）
- 选择 Extensions（扩展）
- 左侧就会打开扩展面板
- 搜索语言包，点安装install
	- 搜索：Chinese (Simplified) Language Pack for Visual Studio Code发布者一般是 Microsoft
![](assets/LLM+Obsidian+本地知识库=能进化的第二大脑/file-20260420160633942.png)
- 打开命令面板（按 Ctrl + Shift + P）
- 搜索并执行， 输入 Configure Display Language
- 选简体中文
- ![](assets/LLM+Obsidian+本地知识库=能进化的第二大脑/file-20260420160755598.png)
### 测试提问
快捷键Ctrl+L打开/关闭对话窗口
提问测试
![](assets/LLM+Obsidian+本地知识库=能进化的第二大脑/file-20260420160923921.png)

## **Andre Karpathy 的 `llm.c` 微型本地 Wiki**
Step 1: Bootstrap（基础搭建）；
Step 2: 标定（首次使用前必做）；
step 3：全系统Audit；
Step 4: 配置 Obsidian Web Clipper

### 启动的提示词给到Gemini网页问答
```
`我现在准备使用它来搭建Andre Karpathy 的 llm.c 微型本地 Wiki ，计划的步骤为：Step 1: Bootstrap（基础搭建）； Step 2: 标定（首次使用前必做）； step 3：全系统Audit； Step 4: 配置 Obsidian Web Clipper，这是作者在说明文档中建议的，具体开源地址在https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
```

### Gemini给出的第一步基础搭建的提示词给到Cursor
```
**指令：**  
请在当前目录 `D:\wikiforysc` 下执行以下初始化操作：

1. 创建目录结构：`ram/articles/`, `ram/clippings/`, `ram/images/`, `ram/pdfs/`, `ram/notes/`, `ram/personal/`, `wiki/sources/`, `wiki/concepts/`, `wiki/entities/`, `wiki/synthesis/`, `wiki/templates/`, `outputs/`, `scripts/`。
2. 在 `wiki/` 下创建基础文件：`index.md`, `log.md`, `overview.md`, `QUESTIONS.md`。
3. 在 `wiki/templates/` 下创建五个模板文件：`source-template.md`, `personal-writing-template.md`, `concept-template.md`, `entity-template.md`, `synthesis-template.md`。
4. 在根目录创建 `CLAUDE.md`。

请根据我刚才提供给你的详细提示词内容，填充这些文件的具体字段和结构。
```
当你点击 **"Apply"** 或 **"Accept All"** 后，Cursor 会自动帮你刷刷刷地建好所有文件。完成后，请检查你的左侧文件树，应该看起来像这样：

- **D:\wikiforysc**
    - **ram/** (存放原始资料)
    - **wiki/** (存放处理后的知识)
        - **templates/** (五个模板文件)
        - index.md, log.md ...
    - **scripts/** (存放脚本)
    - **CLAUDE.md** (你的 AI 行为准则)
### Gemini给出第二步创建全自动质检脚本 scripts/lint.py的提示词交给Cursor
```
指令：
根据 CLAUDE.md 中的规范（特别是第四章 Lint 执行的 9 项检测），编写 scripts/lint.py 脚本。
脚本要求：”
1. 自动遍历 wiki/ 目录下的所有 .md 文件。
2. 执行以下检测：YAML 合法性、Broken wikiLinks、Index 一致性、Stubs 页面（少于100字）、近重复概念名称（Jaccard 相似度）、SHA-256 完整性、Stale 页面检测（时效阈值）、降重审查、Wikilink 格式规范（必须英文小写连字符）。
3. 运行结束后，将详细报告写入 wiki/outputs/lint-YYYY-MM-DD.md。
4. 确保脚本可以从项目根目录 D:\wikiforysc 直接运行。
```
完成了 `lint.py` 代码的编写，并且非常贴心地为你准备好了“试运行”的命令。
现在你只需要做两件事来完成这一步：
#### 1. 接受并保存代码
在那个显示 `lint.py +385` 的代码块上方或底部，点击 **「Accept」**（或者 **「Save」** / **「Keep」**）。
- _这一步是把 AI 写的代码正式存入你的 `D:\wikiforysc\scripts\lint.py` 文件中。_
### 2. 点击「Run」运行测试
在代码块下方的那个黑框（显示 `python "scripts/lint.py"` 的地方），点击右侧蓝色的 **「Run」** 按钮。
- **预期结果：** 你会看到下方的 Terminal（终端）窗口闪过一些文字。
- **检查结果：** 运行完后，去你的左侧文件夹里看一眼 `wiki/outputs/`。如果出现了一个名为 `lint-202X-XX-XX.md` 的文件，说明质检脚本已经正式上岗了！
