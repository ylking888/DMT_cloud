---
title: "Benchmark & Compare the Best AI Models"
source: "https://arena.ai/c/019da9f1-d5cb-74e2-9790-2460878ddbaa"
author:
published:
created: 2026-04-20
description: "Chat with multiple AI models side-by-side. Compare ChatGPT, Claude, Gemini, and other top LLMs. Crowdsourced benchmarks and leaderboards."
tags:
  - "clippings"
---
gemini-3-flash

Generating...

配置你的 API Key具体是什么意思，我不懂

gemini-3-flash

现在的进展非常完美！你刚刚创建的 `scripts/ingest.py` 是整个系统的 **核心“工厂”** 。它负责把你读到的原始文章（Raw data）加工成 Obsidian 里的结构化知识。

在点击任何按钮之前，请先完成以下三步操作，这是为了确保“工厂”能顺利开工：

### 第一步：接受并保存代码

1. 就像刚才一样，点击右下角的 **「Review」** ，然后点击 **「Accept」** （接受）。
2. 确保 `scripts/ingest.py` 这个文件已经正式保存在你的左侧文件列表中。

### 第二步：配置你的 API Key（关键！）

因为 `ingest.py` 需要调用大模型来帮你总结文章和提取概念，所以它必须知道你的 API Key。

1. 在 Cursor 底部的 **Terminal（终端）** 窗口里，输入以下命令（以 OpenAI 为例，如果你用其他的请告诉我）：
	```
	Bashllm keys set openai
	```
2. 按回车后，粘贴你的 **API Key** ，然后再按回车。
	- *注：输入 Key 时屏幕可能不会显示字符，这是正常的，直接粘贴并回车即可。*

### 第三步：放一个“原材料”进行测试

现在的 `ram/articles/` 文件夹是空的，“工厂”没有东西可以加工。

1. 在左侧 `ram/articles/` 目录下，新建一个文件叫 `test.md` 。
2. 随便粘贴一段你最近看到的关于 AI 或编程的文字进去，然后保存。

---

### 现在，见证奇迹的时刻到了！

回到刚才的界面，点击那个蓝色的 **「Run」** 按钮，或者在终端输入：

```
Bashpython scripts/ingest.py ram/articles/test.md
```

**你会看到：**

1. **终端输出：** 它会显示正在计算 SHA-256、正在调用模型总结、正在提取概念。
2. **新文件诞生：** 观察你的左侧 `wiki/sources/` 文件夹，会多出一个 `test.md` ；同时 `wiki/concepts/` 文件夹里可能会多出几个它自动提取的概念文件！
3. **日志记录：** 你的 `wiki/log.md` 会自动多出一行记录，写着你在什么时间摄入了这篇文章。

---

**请完成上述操作后告诉我：**

1. `ingest.py` 成功运行了吗？
2. 你的 `wiki/sources/` 里是不是已经冒出新文件了？

(如果报错，请直接把报错信息贴给我，我们一起修！)

![image.png](https://messages-prod.27c852f3500f38c1e7786e2c9ff9e48f.r2.cloudflarestorage.com/019b027c-9177-7740-b425-a74ba5e91f31/1776674903032-image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=75514238966d6677c3874ef9149f1398%2F20260420%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260420T084824Z&X-Amz-Expires=3600&X-Amz-Signature=e36b92261062470c773016e7af485f4e5409a9a07716254a7457c1a889746062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

现在进展到这里了

gemini-3-flash

现在的界面说明 `scripts/lint.py` 已经写好了，但处于 **待审阅状态** 。因为这是 AI 第一次创建这个文件，你需要正式“收下”它。

### 第一步：正式保存脚本

1. 点击你截图右下角的 **「Review」** 按钮。
2. 点击后，上方会出现 **「Accept」** （接受）按钮。点击它。
3. 点击完后，那个 `lint.py +385` 的列表就会消失，这说明代码已经安全地存入你的 `D:\wikiforysc\scripts\lint.py` 了。

---

### 第二步：验证“质检员”是否上岗

我们检查一下刚才运行的效果：

1. 在左侧的文件管理器（Explorer）里，展开 `wiki` 文件夹，再展开 `outputs` 文件夹。
2. 你是否看到了一个名为 `lint-202X-XX-XX.md` （今天的日期）的文件？
	- **如果有：** 太棒了！说明你的系统已经具备了自检功能。
		- **如果没有：** 没关系，等下我们手动运行一次就好。

---

### 第三步：下一步做什么？（最重要的环节）

现在“骨架”（目录）和“监督员”（Lint）都有了。我们要开始做这个系统的 **核心大脑** 了： **INGEST（摄入）流程** 。

根据你那份超强提示词，我们要让 AI 具备\*\*“一键把原始文章转成结构化知识”\*\*的能力。这涉及你提示词里最复杂的“外部来源标准流程（11步）”。

**请按以下步骤操作（准备进入下一关）：**

1. 在 Cursor 的 Composer（按下 `Ctrl + I` ）里，输入以下指令：

> **指令：**  
> 现在请根据 `CLAUDE.md` 中的「INGEST 操作规范」，编写 `scripts/ingest.py` 脚本。
> 
> **脚本要求：**
> 
> 1. 实现 11 步外部来源标准流程：读取 ram/ 文件 -> 计算 SHA-256 -> 生成 slug -> 创建 wiki/sources/ 文件 -> **概念名称对齐校验** -> 更新 concept/entity 页面 -> 更新 Evolution Log。
> 2. 严格遵循 `wiki/templates/` 下的模板格式。
> 3. **核心逻辑：** 必须能自动识别概念（Concepts）和实体（Entities），并检查是否已存在（通过 slug 或 aliases 匹配）。
> 4. 集成 Karpathy 的 `wiki.py` 思路，使用 `llm` 库来提取摘要和概念。
> 5. 完成后在 `wiki/log.md` 记录日志。

---

**为什么要先做这个？**  
有了这个脚本，你只需要把想读的文章往 `ram/articles/` 里一扔，对 Cursor 说一句“帮我摄入这篇文章”，它就会自动帮你拆解成知识点，存入你的知识库。

**请先完成第一步的 「Review」->「Accept」，然后发送上面的指令！**

运行的时候我没有注意窗口的变化，现在已经是这样的了，下面我要做什么

gemini-3-flash

没关系，这可能是因为 Cursor 的界面在不同模式下显示略有不同。看到你截图右下角的 **「Review」** 按钮了吗？

### 请尝试以下操作：

1. **点击右下角的 「Review」 按钮：**
	- 点击后，它通常会展开文件列表，这时候你会看到 **「Accept」** 或 **「Accept All」** 出现。点击它，代码才会真正存入文件。
2. **或者直接点击 「Run」：**
	- 如果找不到 Accept，直接点那个蓝色的 **「Run」** 按钮也行。Cursor 在执行运行指令前，通常会自动帮你保存这个新创建的文件。

---

### 如何确认已经成功保存了？

看左侧的资源管理器（Explorer）：

- 如果 `scripts/lint.py` 已经存在，且文件名不是灰色的（或者没有写着 "unsaved"），那就说明已经好了。
- 你可以双击打开 `scripts/lint.py` ，看看里面有没有 AI 刚才写的那几百行代码。

### 运行后的检查：

当你点击 **Run** 之后，看一眼屏幕最下方的 **Terminal (终端)** ：

- 它会输出一些文字。如果最后显示类似 `Report written to wiki/outputs/lint-202X-XX-XX.md` ，那就大功告成了！

**操作完这一步（运行完脚本）后，请告诉我：**

1. `scripts/lint.py` 里有代码了吗？
2. `wiki/outputs/` 目录下有没有生成那个 `.md` 报告文件？

(完成后，我们将进行最激动人心的一步： **编写系统的“自动摄取”程序** ，让它能够按照你那 11 步流程处理你的笔记！)

没有「Accept」（或者 「Save」 / 「Keep」）。只有run

gemini-3-flash

是的，它已经完成了 `lint.py` 代码的编写，并且非常贴心地为你准备好了“试运行”的命令。

现在你只需要做两件事来完成这一步：

### 1\. 接受并保存代码

在那个显示 `lint.py +385` 的代码块上方或底部，点击 **「Accept」** （或者 **「Save」** / **「Keep」** ）。

- *这一步是把 AI 写的代码正式存入你的 `D:\wikiforysc\scripts\lint.py` 文件中。*

### 2\. 点击「Run」运行测试

在代码块下方的那个黑框（显示 `python "scripts/lint.py"` 的地方），点击右侧蓝色的 **「Run」** 按钮。

- **预期结果：** 你会看到下方的 Terminal（终端）窗口闪过一些文字。
- **检查结果：** 运行完后，去你的左侧文件夹里看一眼 `wiki/outputs/` 。如果出现了一个名为 `lint-202X-XX-XX.md` 的文件，说明质检脚本已经正式上岗了！

---

### 下一步做什么？

当你完成了上面的「Accept」和「Run」，你的地基（目录）和质检（Lint）就都弄好了。

现在的系统是一个“空壳”，我们要给它装上\*\*“大脑”\*\*。根据你长提示词的要求，系统需要能够：

1. **INGEST（摄入）：** 把 `ram/` 里的原始文章处理成知识。
2. **QUERY（提问）：** 搜索你的知识库并回答问题。

**接下来的指令（你可以等运行完 Lint 后再发给我）：**  
我们要把 Karpathy 那个 `wiki.py` 的核心逻辑，“改装”成符合你 `CLAUDE.md` 规范的两个脚本：一个叫 `ingest.py` ，一个叫 `query.py` （或者按照你提示词里的习惯，叫它们 `qmd.py` ）。

**你运行完那个 `Run` 按钮了吗？终端有没有报错？** （如果报错了，直接把错误贴给我，小白不怕报错，Cursor 最擅长修报错）。

是不是已经完成了，下面怎么做

gemini-3-flash

太棒了！现在你的“地基”已经完全打好了：目录、模板、以及灵魂文件 `CLAUDE.md` 都已到位。

接下来，我们要按照你那份超强提示词的 **“四、创建 scripts/lint.py”** 这一节，为你的知识库安装一个\*\*“全自动质检员”\*\*。

### Step 2: 创建全自动质检脚本 scripts/lint.py

这个脚本非常关键，它会帮你检查有没有断掉的链接、格式是否正确、哪些页面太久没更新。

**操作步骤：**

1. 按下 `Ctrl + I` (Windows) 打开 Composer。
2. 输入以下指令（你可以直接复制）：

> **指令：**  
> 根据 `CLAUDE.md` 中的规范（特别是第四章 Lint 执行的 9 项检测），编写 `scripts/lint.py` 脚本。
> 
> **脚本要求：**
> 
> 1. 自动遍历 `wiki/` 目录下的所有 `.md` 文件。
> 2. 执行以下检测：YAML 合法性、Broken wikiLinks、Index 一致性、Stubs 页面（少于100字）、近重复概念名称（Jaccard 相似度）、SHA-256 完整性、Stale 页面检测（时效阈值）、降重审查、Wikilink 格式规范（必须英文小写连字符）。
> 3. 运行结束后，将详细报告写入 `wiki/outputs/lint-YYYY-MM-DD.md` 。
> 4. 确保脚本可以从项目根目录 `D:\wikiforysc` 直接运行。

---

### 执行后的检查：

1. AI 生成代码后，点击 **"Apply"** 或 **"Save"** 。
2. 检查 `scripts/` 文件夹下是否出现了一个 `lint.py` 文件。
3. **试运行（重要）：**
	- 在 Cursor 底部的 Terminal（终端）中输入：
		```
		Bashpython scripts/lint.py
		```
		- *(注：虽然现在库里还没什么内容，但运行它应该不会报错，并且会在 `wiki/outputs/` 目录下生成第一份空白检测报告。)*

---

### 为什么这一步很重要？

这个 `lint.py` 是你系统的\*\*“守门人”\*\*。每当你让 AI 帮你处理（Ingest）了一堆文章后，运行一下它，你就能知道：

- AI 有没有偷懒漏掉某些链接？
- 有没有名字太像的“概念”需要合并？
- 你的知识库是否健康？

**等这个脚本生成好并点击 Save 后，请告诉我。我们要进入下一步：把 Karpathy 最核心的 `wiki.py` （也就是负责搜索和回答的逻辑）集成进来。**

已经点击了Keep All，继续下一步

glm-5v-turbo

这不仅是正常的，而且说明 AI **非常出色地完成了任务** ！

看到底部那个 **"22 Files"** 了吗？这说明 AI 刚才并没有偷懒，它一口气写好了 **22个文件** 的创建指令（包括所有的文件夹、模板、系统配置文件等），现在正在等待你最后的\*\*“签字画押”\*\*。

---

### 你现在的操作只有一步：

👉 **点击右下角的 【Keep All】 按钮**

*(注意：按钮可能显示为英文 **"Keep All"** 或者 **"Apply"**)*

### 点击后会发生什么？

1. **写入磁盘：** Cursor 会立刻把这 22 个文件在你的 `D:\wikiforysc` 里创建出来。
2. **自动刷新：** 你的左侧资源管理器会瞬间多出很多文件夹和文件（ram, wiki, scripts, CLAUDE.md, 各种.md 模板...）。

### 点击之后请检查：

1. **左侧目录树：** 是不是出现了我们想要的那些层级？（ `wiki/templates/`, `scripts/`, `CLAUDE.md` ）
2. **打开 CLAUDE.md：** 双击根目录下的这个文件，随便看两眼。如果它内容很长且包含“INGEST 操作规范”、“Confidence 更新规则”等大段文字，就说明成功了！

**点击 Keep All 吧，见证奇迹的时刻！** 完成后告诉我你的目录长什么样。

现在它又停下来了，我应该怎么做

gemini-3-flash

这是一个非常敏锐的问题！作为一个新手，产生这种怀疑是完全正确的。

**答案是：我让你运行的短指令，实际上是给 AI 下达的一个“启动动作”，而它执行的“灵魂”依然是你贴给我的那段长篇提示词。**

这里有两个原因：

### 1\. Cursor 的“上下文（Context）”记忆

当你把那段长篇提示词发给我（或者贴在对话框里）时，Cursor 的大脑已经把这些规则全部加载到了 **缓存** 中。  
我在短指令里特意加了一句： **“请根据我刚才提供给你的详细提示词内容，填充这些文件的具体字段和结构。”**  
这句话的作用是告诉 AI： **“不要自己瞎编，去翻刚才那段长提示词，按里面的规格（比如那 11 步流程、YAML 字段、文件夹名）去写。”**

### 2\. “一次只做一件事”的原则（防崩溃）

你提供的那段提示词非常牛，它包含了一个复杂的系统：

- **物理层：** 文件夹、模板文件、索引文件。
- **逻辑层：** `CLAUDE.md` （行为契约）。
- **代码层：** `scripts/lint.py` （Python 检查脚本）。
- **索引层：** `qmd` 索引初始化。

**为什么我不让你一次性执行全部？**  
如果让 AI 一次性生成几十个文件外加写代码、运行脚本，AI 很容易在中间某个环节“断掉”或者“偷懒”（比如把模板写得很简略）。

- **我建议的短指令：** 重点在于把 **目录、模板和契约（CLAUDE.md）** 建立起来。这是系统的“地基”。
- **接下来的步骤：** 我们会专门让它写 `lint.py` ，然后运行它。

### 现在的检查点：

请你打开刚刚生成好的 **`CLAUDE.md`** 文件（就在你 `D:\wikiforysc` 的根目录下）。

**看看里面是不是包含了你长提示词里的那些内容？**  
（比如： `外部来源标准流程(11 步)` 、 `INGEST 操作规范` 、 `Confidence 更新规则` 等）。

- **如果包含了：** 说明 AI 已经完全领会了长指令的精髓，地基已经打好！
- **如果没有包含：** 请告诉我，我会重新给你一个补救指令。

---

**地基打好后，我们的下一步是：**  
把那段长提示词中提到的 `scripts/lint.py` 补充完整。这是这个系统的“质检员”，能帮你检查你的知识库有没有坏掉的链接或格式错误。

**你现在的 `CLAUDE.md` 内容完整吗？**

为什么我贴给你的提示词那么长，你让我运行的却很短，是不是已经包含了全部的功能和操作了呢

gemini-3-flash

这是 **非常正常** 的，这是 Cursor 最核心、最强大的 **Composer（编辑器）** 模式。

### 它正在做什么？

1. **准备文件：** 它正在根据你的要求，在后台生成那几十个文件夹和模板文件。
2. **创建 `.gitkeep` ：** 看到截图里的 `.gitkeep` 了吗？因为在电脑里，空文件夹有时不会显示。AI 很聪明，它在每个文件夹里放一个隐藏的 `.gitkeep` 文件，这样能确保文件夹被真实创建出来。
3. **请求权限：** 底部那个 `echo noop` 是它在测试终端是否可用，或者准备执行创建目录的命令。

---

### 你应该怎么操作？

你需要 **授权** 它把这些计划变成现实。请按以下顺序点击：

1. **点击 `Run` 按钮** （就在你截图右下角那个蓝色按钮）：
	- 这会允许它在终端执行命令。
2. **观察文件列表上方：**
	- 在 `.gitkeep +2` 那个区域的上方或旁边，通常会出现一个 **`Accept` (接受)** 或 **`Accept All` (全部接受)** 的按钮。
		- **点击它！** 只有点击了 Accept，AI 生成的代码才会真正写入到你的 D 盘里。

### 操作完之后：

你会看到 Cursor 左侧的资源管理器（Explorer）刷刷刷地冒出一堆文件夹（ram, wiki, scripts 等）。

**操作完成后，请告诉我：**  
左侧的文件夹是不是都出来了？如果是，我们就准备进行下一步： **配置那个核心行为准则 `CLAUDE.md`** （虽然它刚才可能已经生成了，我们要检查一下它是否完整）。

这样是正常的吗？它正在做什么？我应该怎么操作

gemini-3-flash

这份提示词非常专业，它实际上是将 Karpathy 的简单脚本升级为了一个 **具有自我管理能力的知识工程系统** 。它引入了“行为契约”（CLAUDE.md）的概念，让 Cursor 明白在处理你的笔记时应遵循的具体逻辑。

既然我们要一步一步来，而且你已经在 `D:\wikiforysc` 建立了目录。我们现在进行 **Step 1：搭建骨架（目录与模板）** 。

为了让你操作最简单，我们利用 Cursor 的 **Composer (Ctrl+I)** 功能一键完成目录和模板的创建。

### 第一步：创建目录结构与系统文件

请在 Cursor 中按下 `Ctrl + I` (Windows)，在弹出的对话框中粘贴以下指令：

> **指令：**  
> 请在当前目录 `D:\wikiforysc` 下执行以下初始化操作：
> 
> 1. 创建目录结构： `ram/articles/`, `ram/clippings/`, `ram/images/`, `ram/pdfs/`, `ram/notes/`, `ram/personal/`, `wiki/sources/`, `wiki/concepts/`, `wiki/entities/`, `wiki/synthesis/`, `wiki/templates/`, `outputs/`, `scripts/` 。
> 2. 在 `wiki/` 下创建基础文件： `index.md`, `log.md`, `overview.md`, `QUESTIONS.md` 。
> 3. 在 `wiki/templates/` 下创建五个模板文件： `source-template.md`, `personal-writing-template.md`, `concept-template.md`, `entity-template.md`, `synthesis-template.md` 。
> 4. 在根目录创建 `CLAUDE.md` 。
> 
> 请根据我刚才提供给你的详细提示词内容，填充这些文件的具体字段和结构。

---

### 执行后的检查

当你点击 **"Apply"** 或 **"Accept All"** 后，Cursor 会自动帮你刷刷刷地建好所有文件。完成后，请检查你的左侧文件树，应该看起来像这样：

- **D:\\wikiforysc**
	- **ram/** (存放原始资料)
		- **wiki/** (存放处理后的知识)
		- **templates/** (五个模板文件)
				- index.md, log.md...
		- **scripts/** (存放脚本)
		- **CLAUDE.md** (你的 AI 行为准则)

---

### 为什么这一步很重要？

- **CLAUDE.md** 是灵魂：以后你只要对 Cursor 说“Ingest 这个文件”，它就会读取 `CLAUDE.md` 里的“外部来源标准流程（11步）”，严格按流程操作，不用你每次都教它。
- **规范化** ：所有的 `[[wikilinks]]` 都会被强制转为英文小写连字符，这解决了 Obsidian 跨平台引用可能产生的乱码或链接断裂问题。

---

**请先完成这一步。完成后，请告诉我：**

1. 目录和模板是否都生成好了？
2. 我们可以进行下一步： **编写 `scripts/lint.py` （自动化检查脚本）** 吗？

(注意：暂时不要担心 `qmd` 或 `qad` 命令报错，那些是后续我们要配置的检索工具，我们先要把“家”搭好。)

不，这与我的初步设想是不符的，我这里抄来一份在cc上大神编写的提示词，我希望通过修改这一份提示词让Cursor自动完成第一步，下面我把这份提示词贴给你：请修改后输出，使之能在我的环境下运行  
请帮我从零搭建一个基于 Karpathy LLM Wiki 思路的个人知识库系统。  
完整执行以下所有步骤,不要遗漏任何细节。

### 一、创建目录结构

创建以下目录：  
ram/articles/  
ram/clippings/  
ram/images/  
ram/pdfs/  
ram/notes/  
ram/personal/  
wiki/sources/  
wiki/concepts/  
wiki/entities/  
wiki/synthesis/  
wiki/templates/  
outputs/  
scripts/

### 二、创建系统文件

#### wiki/index.md

frontmatter 包含: type: system-index, graph-excluded: true  
正文包含: Sources 列表(按日期倒序)、Concepts 列表、Entities 列表、Recent Synthesis 列表、Outputs 列表

#### wiki/log.md

frontmatter 包含: type: system-log, graph-excluded: true  
说明: 仅追加操作日志,格式为 「YYYY-MM-DD | 操作类型 | 说明」

### wiki/log.md

frontmatter 包含: type: system-log, graph-excluded: true  
说明: 仅编辑操作日志, 格式为 YYYY-MM-DD | 操作类型 | 说明

### wiki/overview.md

frontmatter 包含: type: system-overview, graph-excluded: true  
包含: Knowledge Base Health Dashboard 表格(来源溯源、高置信度概念款、开放问题款、Stale 页面款)

### wiki/QUESTIONS.md

frontmatter 包含: type: system-questions, graph-excluded: true  
包含: Open Questions 列表(checkbox 格式)、Resolved Questions 列表

### 三、创建页面模板

### wiki/templates/source-template.md

frontmatter 字段: type, title, date, source\_url, domain, author, tags, processed, ram\_file, ram\_sha256, last\_verified, possibly\_outdated, language, canonical\_source  
主要结构: ## Summary. ## Key Points. ## Concepts Extracted. ## Entities Extracted. ## Contradictions(与其他来源的分歧). ## My Notes

### wiki/templates/personal-writing-template.md

frontmatter 字段: type: personal-writing, date, status(draft/published/deprecated), topic\_tags, confidence\_low\_at\_writing(low/medium/high), superseded\_by, ram\_file, ram\_sha256, last\_verified, tags, title, date  
主要结构: ## Core Argument. ## Key Claims. ## Evidence Referenced. ## Limitations

### wiki/templates/concept-template.md

frontmatter 字段: type: concept, (中文名主名称), date, updated, tags,  
source\_count, confidence(low/medium/high),  
domain\_volatility(low/medium/high), last\_reviewed, aliases (微组, 存储中英文所有叫法)  
正文结构: ## Definition (暂行用 (中文名 (English Name)) 格式)、## Key Points、## My Position、## Contradictions、## Sources (仅 wikilinks 列表)、## Evolution Log (每次更新前加一条)

### wiki/templates/entity-template.md

frontmatter 字段: type: entity, title, date, tags,  
entity\_type(person/tool/institution/paper), aliases  
正文结构: ## Description、## Key Contributions、## Related Concepts、## Sources

### wiki/templates/synthesis-template.md

frontmatter 字段: type: synthesis, title, date, tags, source\_count, confidence  
正文结构、## Thesis、## Evidence、## Counter-evidence（Stage 0 反向检验结果）、## Synthesis、## Confidence Notes、## Limitations、## Sources

## 四、创建 scripts/lint.py

lint 执行以下 9 项检测，完成后将报告写入 wiki/outputs/lint-YYYY-MM-DD.md（frontmatter 下 graph-excluded: true）：

1. YAML frontmatter 合法性：所有 wiki/ 下的.md 文件是否有合法 YAML frontmatter（含 type 和 date）
2. Broken wikiLinks：\[\[xxx\]\] 引用了不存在的页面
3. Index 一致性：wiki/index.md 中标记的文件是否都实际存在
4. Stubs 页面：正文少于 100 字的空壳页面
5. 近重复概念名称：slug 名称 Jaccard 相似度 > 0.7 的 concept 页对
6. SHA-256 完整性：raw 文件哈希与 source 页 raw\_sha256 字段比对（△ SOURCE MODIFIED）
7. Stale 页面：超过 domain\_volatility 时效阈值（high>90 天，medium=180 天，low=365 天）
8. 降重审查页：source URL 相似度检测 + 不同 concept 页的 aliases 字段重叠检测
9. Wikilink 格式规范：检测非英文小写连字符格式的 wikilink（如中文词汇 \[【价值投资】\]）及别名错链

## 五、创建 CLAUDE.md（行为契约）

CLAUDE.md 是 LLM 的核心行为规范，必须包含以下所有章节：

### 系统概述

- 三层架构说明（Raw/Wiki/Outputs）
- 核心原则：你完全拥有 wiki/ 目录的读取和写入权限，raw/ 目录由我（人类）拥有，你只能读取，不能修改。

### INGEST 操作规范

触发词：ingest、摄入、处理这个

来源类型判断(优先级由高到低)：

1. frontmatter 含 type: personal-writing → 走「个人写作」流程
2. 文档路径包含 ram/personal/ → 走「个人写作」流程
3. frontmatter 含 type: pdf-reference → 走「PDF 参考」流程
4. 其他 → 走「外部来源」标准流程

缺少 frontmatter 时的处理流程:

- 从文件预干：标题提取 title, 若无标题则从文件名推断
- source 平个留空, 在 wiki/sources/<slug>.md 中标注「来源未知」
- date 使用文件系统推放时间
- 不中断 INGEST, 但在 log.md 记录「警告, 来源文件缺少标准 frontmatter」

**外部来源标准流程(11 步)**

1. 读取目标原始来源（ram/ 中的文件, 只读）
2. 计算原始文件的 SHA-256 哈希（Python hashlib）
3. 与用户库确认核心信息（逐一摄入, 保持参与感）
4. 生成 slug（小写英文, 用连字符, 例如 'attention-is-all-you-need'）
5. 创建 wiki/sources/<slug>.md (使用 source-template.md), +frontmatter 中写入:
- 'raw\_file': 相对路径（如 'raw/articles/filename.md'）
- 'raw\_sha256': SHA-256 哈希值
- 'last\_verified': 摄入日期(YYYY-MM-DD)
- 若来源发表日期超过 2 年前, 标注 'possibly\_outdated: true', 并在摘要末尾添加提示
1. **概念名称对齐校验** （提取概念之前必须执行）
- 将每个捞取到的概念名称统一映射为小写连字符 slug（例如「第一性原理」→ first-principles-thinking）
- 在 wiki/concepts/ 中查找该 slug 是否已存在对应文件
- **同时检查所有已有 concept 页的 'aliases' 字段** ：遍历 wiki/.concepts/\*.md, 解析每页 frontmatter 的 aliases 列表, 检查是否包含当前新概名称(支持中英文别名配)
- 若通过 slug 匹配或通过 aliases 匹配到已有页面, 更新已有页面, 不创建新页面, 若找不到任何匹配项, 才创建新页面, 并在 frontmatter 中的 'aliases' 中填入中文和英文捞取到的概念
1. 为每个新找到的概念
	- 如 wiki/concepts/<<concept>>.md 已存在，更新它，通知新来源引用，在  
		Evolution Log 增加源，使新 source\_count 和 confidence，同时更新  
		last\_reviewed 字段\*\*
- 如真不存在，创建新文件（使用 concept-template.md），同时在 aliases 字段填入该概念的中英文名称\*\*
- **Evolution Log 添加规则** ：
	- 若本次来源跟当前 Definition 一致，写「强化」
		- 若有修正，写「修正：\[具体变化\]」
		- 若相互矛盾，写「新增分歧：\[分歧内容\]，见 Contradictions 节」
		- 格式：- YYYY-MM-DD（In sources）：\[本次认知变化的一句话描述\]
1. 为每个提取到的实体，同上逻辑
2. 更新 wiki/inde.md，将来源从 Unprocessed 移动到 Processed
3. 读取 wiki/QUESTIONS.md，检查本次来源是否能回答开放问题，
	- 若能，提示用户是否可以「开源写入」\[问答标题\]，是否立即执行 QUERY？
		- 用户确认后，执行 QUERY 并将结果写入 wiki/synthesis/，同时在 QUESTIONS.md  
		中将该问题移入 Answered
4. 在 wiki/log.md 末尾添加： `YYYY-MM-DD HH:MM | ingest | [来源标题]`

**个人写作流程（不同于标准流程）** ：

- 不生成 Summary 节，跳过客观观察
- 核心 graph 写人相关的 ## My Position 节（标注「个人认知」）
- 不参与 confidence 的 source\_count 计数（避免用自己的文章给自己背书）
- 若文章中引用了外部来源，提取这些引用并尝试与已有 wiki/sources/ 页面建立 wikilinks
- raw\_sha256 哈希值同样适用
- Evolution Log 记录：\[YYYY-MM-DD 个人写作\] \[\[stag\]\] 确立了对此概念的明确立场

### QUERY 操作规范

触发词：直接提问，或「根据我的知识库」

执行步骤：  
Step Q1. 执行 qad query "<用户问题>" --json，获取 top 5 相关页面（若 qad 报墙则降级读取wiki/index.md）  
Step Q2. 逐一回答 top 5 文件  
Step Q3. 合成答案，每个核心结论必须溯源到具体 wiki/sources/<<slug>>.md（不允许只引用 concept）；注明来源 confidence 级别；来源相互矛盾时显式标注分极  
Step Q4. 若答案具有实用价值，写入 wiki/outputs/YYYY-MM-DD-topics.md 文件 frontmatter 含 graph: evaluated: true；输出在末尾包含 Confidence Notes 节；更新 wiki/index.md 的 Recent Synthesis 列表；添加 wiki/log.md

输出格式按问题类型：

- 普通问题→Markdown 正文
- 比校→Markdown 表格
- 演示类→Markdown 幻灯片 (frontmatter 加 marp: true)
- 趋势类→Python matplotlib 代码块
- 清单类→结构化 bullet list

### LINT 操作规范

触发词：lint、检查、健康检查  
执行步骤：

1. 运行 scripts/lint.py（包含 9 项检查）
2. 将报告写入 wiki/outputs/lint-YYYY-MM-DD.md（frontmatter 含 graph-excluded: true）
3. 执行 gmd status，对比索引文件数与 wiki/实际.md 文件数（指搬移线文件）；若索引错后须执行 gmd add wiki/，在报告中记录
4. 向用户展示摘要并询问是否修复

执行步骤:

1. 运行 scripts/lint.py (包含 9 项检查)
2. 将报告写入 wiki/outputs/lint-YYYY-MM-DD.md (frontmatter 含 graph-  
	excluded: true)
3. 执行 qmd status, 对比索引文件数与 wiki/实际.md 文件数( 指  
	引潜后端执行 qmd add wiki/，在报告中记录
4. 向用户展示摘要并询问是否修复

### REFLECT 操作规范

触发发现,reflect、综合分析、发现规律  
四阶段执行:  
Stage 0(反向检验):在生成任何合成结论之前,主动排查质疑证据,若无质对来源,在  
Limitations 节标注\[△ 因苦觅风险,未找到反驳来源,结论可能存在确认偏误!\]  
Stage 1(模式扫描):使用 qmd 批量扫描  
qmd multi-get "wiki/concepts/*.md" -1 40  
qmd multi-get "wiki/entities/*.md" -1 40  
qmd multi-get "wiki/synthesis/\*.md" -1 60  
识别来源模板式、隐性关联、内容空白、矛盾对  
Stage 2 (深度合成)：对有证据支撑的被完成，完整读取相关页面，写入  
wiki/synthesis/<topic>->synthesis.md  
Stage 3 (Gap Analysis)：

- source\_count = 1 且创建通过 30 天的孤立概念
- 多处理及很无独立页面的概念/实体(隐性盲区)
- 覆盖明显将漏的主题领域
- 输出到 frontmatter 合 graph - excluded: true)

完成后更新 wiki/overview.md 的 Health Dashboard，更新 wiki/index.md，添加  
wiki/log.md

### MERGE 操作规范

触发词: merge、去重

同语言合并流程:

1. 与用户确认合并方案(绝不自动合并)
2. 主 slug 保留，被合并页面的 wikilinks 全部更新
3. 被合并文件替换为重合的文件(内容: redirect: \[\[wiki/concepts/主 slug\]\])
4. log.md 记录: YYYY - MM - DD | merge | \[旧 slug\]→\[主 slug\]

跨语言合并专项流程(区别于同语言 MERGE):

1. 主 slug 保留英文
2. aliases 取两个页面的并集
3. Key Points/Sources/Evolution Log 按并集+去重合并
4. My Position 若两页都有，先向用户展示对比后再合并
5. 被合并的旧 slug 文件保留为 redirect 文件(确保旧 wikilinks 不 broken)
6. log.md 记录: YYYY - MM - DD | merge | \[旧 slug\]→ [主 slug](https://arena.ai/c/%E8%B7%A8%E8%AF%AD%E8%A8%80%E5%90%88%E5%B9%B6)

### ADD - QUESTION 操作规范

触发词: 我想清楚些、add question、记录一个问题

执行步骤:

1. 将问题规范化(提取核心疑问)
2. 添加到 wiki/QUESTIONS.md (checkbox 格式: - \[ \] 问题内容(opened YYYY - MM - DD))
3. 添加 wiki/log.md

### Wikilink 使用规范

执行步骤:

1. 再提现规范(提取核心疑问)
2. 添加到 wiki/QUESTIONS.md (checkbox 格式, - \[ \] 问题内容 opened YYYY-MM-DD )
3. 添加到 wiki/log.md

### Wikilink 使用规范

**格式规律(不可违反)** ：  
所有 wikilink 目标必须使用英文小写连字符格式  
\[\[value-investing\]\] \[\[attention-mechanism\]\] \[\[warren-buffett\]\]  
× \[\[价值投资\]\]（中文词汇）× \[\[ValueInvesting\]\]（驼峰）×  
\[\[value\_investing\]\]（下划线）  
中文名称的正确处理方式:

- 写入 frontmatter 的 alias 字段
- concept 页正文第一行使用括号标注：「价值投资（Value Investing）」
- wikilink 始终用英文 slug

**允许使用 wikilinks 的场景** ：

- concept 页引用其他 concept/entity 页
- source 页引用 concept/entity 页
- synthesis 页引用 concept/source/entity 页

**禁止使用 wikilinks 的场景** ：

- 任何页面不引用系统文件，\[\[logo\]\] \[\[index\]\] \[\[overview\]\] \[\[QUESTIONS\]\]
- 任何页面不再引用 lint 报告，\[\[outputs/lint-xxx\]\]
- 任何页面不再以操作名作为 wikilink，\[\[ingest\]\] \[\[query\]\] \[\[reflect\]\]
- log.md 内部记录使用纯文本路径（如 wiki/sources/xxx.md），不使用 wikilinks

### Wiki 语言规范

- Wiki 层（concept/entity/synthesis 页）换一用中文写作
- concept 页 title 字段使用中文主名称（图情节点显示）
- 英文术语在 concept 页面次出现时标注，\[注意力机制（Attention Mechanism）\]
- 所有 slug（文件名）换一用英文小写连字符，不使用中文文件名
- aliases 字段覆盖中英文所有叫法

### Confidence 更新规则

| 来源数量 | Confidence | 处理方式 |
| --- | --- | --- |
| 1 个来源 | low | 自动设置 |
| 3 个来源 | medium | 自动设置 |
| 5 个来源且无重大矛盾 | 快速 high | 向用户展示 Definition 和 Sources 列表，等待确认 |
| 用户明确写作（确认）或 ok | high | 才可设置 |

注意：个人漏斗（ram/personal）不参与 count 计数

### Source Integrity Rules

- re-ingest 规则，若 lint 报告 ▲ SOURCE MODIFIED，需重新插入该文件并更新所有受影响的 concept/entity 页面，Evolution Log 记录 YYYY-MM-DD 来源更新：\[\[slug\]\] 哈希变更，内容已重新摄取
- 来源超过 2 年标注 possibly\_outdated: true
- 矛盾来源必须在 source 页和 concept 页的 Contradictions 节显式记录，不得静默覆盖

### 系统文件隔离规则

以下文件的 frontmatter 必须含 graph-excluded: true，不参与 Obsidian 图谱：

- wiki/log.md
- wiki/index.md
- wiki/overview.md
- wiki/QUESTIONS.md
- wiki/outputs/ 下所有文件

### 文档维护规则

当 CLAUDE.md 规则更新时，同步更新 USER\_GUIDE.md 对应章节，确保两份文档一致。

## 六、初始化 qmd 索引

执行：  
qmd add wiki/  
qmd status

## 八、执行完成后的验证

输出以下验证报告：

1. 目录树树 (tree -L 3 或 find)
2. CLAUDE.md 包含的章节列表
3. wiki/templates/ 下的模板文件列表
4. qmd status 输出 (索引文件数量)
5. scripts/lint.py 包含的检查项列表

gemini-3-flash

没问题，我们以后就以 `D:\wikiforysc` 作为你的项目根目录。

既然文件夹已经建好了，我们继续完成 **Step 1: Bootstrap** 的最后一步，确保你的环境已经准备就绪。

### 当前进度确认：

1. 你在 `D:\wikiforysc` 文件夹里应该已经有一个 `wiki.py` 文件了（如果还没放进去，请记得把 Karpathy 的代码粘贴进去并保存）。
2. 你的 Cursor 应该已经打开了 `D:\wikiforysc` 这个文件夹。

---

### 第一步的收尾：安装依赖并验证

请在 Cursor 底部的 **Terminal（终端）** 中依次执行以下操作：

**1\. 安装工具库：**  
输入（或复制）以下命令并回车：

```
Bashpip install llm sqlite-utils
```

*(如果报错说 `pip` 不是内部命令，请告诉我，这通常是 Python 环境变量没配好，我们可以修复。)*

**2\. 验证安装：**  
安装完成后，在终端输入：

```
Bashllm --version
```

如果看到类似 `llm, version 0.18` （数字可能不同）的输出，说明工具已经装好了。

---

### 下一步预告：Step 2 - 标定 (Calibration)

这一步最关键的是 **配置 API Key** 。Karpathy 的这个脚本默认使用 OpenAI 的模型。

**你需要准备好：**

- 一个 OpenAI 的 API Key（或者如果你想用国产大模型如通义千问、DeepSeek，也可以通过 `llm` 的插件来实现）。

**等你装好了依赖库（pip install 那步），请告诉我：**

1. 安装是否成功？
2. 你打算用哪个大模型的 API Key？（这决定了我们下一步如何配置 `llm` 的密钥）。

我们一步步稳着来！

好的，我在d盘下创建了wikiforysc这个目录作为项目目录，请以后都按照这个目录来输出

gemini-3-flash

这是一个非常好的问题！作为小白，理解“代码”和“数据”的分离很重要。

**结论：建议保留 `my-wiki` 文件夹，把它作为你的“控制中心”。**

你可以把它们的关系想象成：

- **Obsidian 文件夹** ：你的 **图书馆** （里面全是书/笔记）。
- **my-wiki 文件夹** ：你的 **管理员办公室** （里面放着运行系统的脚本和索引数据库）。

### 为什么要分开？

1. **安全性** ：万一脚本运行出错，或者你想删除这个项目，不会不小心删掉你的 Obsidian 笔记。
2. **整洁** ：Karpathy 的脚本运行后会生成一些额外的数据库文件（比如 `wiki.db` ），放在专门的 `my-wiki` 文件夹里，你的 Obsidian 笔记库会更干净。

---

### 你现在需要做的：

1. **继续在 `my-wiki` 文件夹里操作** （按照我上一步说的，把 `wiki.py` 放在这里，并安装好环境）。
2. **找到你的 Obsidian 库在电脑上的“物理路径”** 。
	- 在 Obsidian 里，右键点击你左侧的任意一个文件夹，选择 **“在资源管理器中显示” (Show in system explorer)** 。
		- 记下那个文件夹的路径（比如 `D:\MyNotes` 或 `/Users/name/Documents/ObsidianVault` ）。

### 下一步预告：

当你完成了 `1.3` 的安装（ `pip install llm sqlite-utils` ）后，请告诉我。

接下来我会教你如何\*\*“指路”\*\*——也就是告诉 `my-wiki` 里的脚本，去哪里读取你 Obsidian 里的笔记。

**你现在安装好那两个工具（llm 和 sqlite-utils）了吗？** (如果在终端输入命令有报错，直接截图或把错误贴出来，Cursor 也能帮你解决)。

我的文档是存放在了OBsidian中，还需要在创建一个my-wiki这样的目录吗？

gemini-3-flash

没问题，我们放慢节奏，一步步来。作为小白，最重要的一步是 **把环境搭好** 。

现在我们只做 **Step 1: Bootstrap（基础搭建）** 的第一小步。

### 1.1 创建项目文件夹并打开

1. 在你的电脑桌面（或任何你方便的地方）新建一个文件夹，起名叫做 `my-wiki` 。
2. 打开 Cursor。
3. 点击 Cursor 欢迎界面的 **"Open Folder"** （或者在菜单栏选 File -> Open Folder），选中你刚才创建的 `my-wiki` 文件夹。

### 1.2 获取核心代码

我们要把 Karpathy 写的那个脚本放进你的项目里。

1. 在 Cursor 左侧的资源管理器（Explorer）空白处点右键，选择 **New File** 。
2. 文件名输入 `wiki.py` ，然后回车。
3. 打开这个链接： [Karpathy's Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) （这是你刚才提供的地址）。
4. 复制网页里那段 Python 代码（点代码框右上角的 "Raw" 再全选复制会比较干净）。
5. 回到 Cursor，把代码粘贴进 `wiki.py` ，然后按 `Cmd + S` (Mac) 或 `Ctrl + S` (Windows) **保存** 。

### 1.3 安装必要的工具 (用 Cursor AI 帮忙)

这段代码运行需要一个叫 `llm` 的工具。我们让 Cursor 帮你安装。

1. 在 Cursor 界面底部，你应该能看到一个 **Terminal（终端）** 窗口。如果没有，按快捷键 `` Ctrl + ` `` (键盘 Tab 键上方那个点) 把它调出来。
2. 现在，我们试试用 Cursor 的 AI 功能。在编辑器窗口按 `Cmd + K` (Mac) 或 `Ctrl + K` (Windows)，在弹出的输入框里输入：
	> “帮我在终端里安装运行这个脚本需要的 llm 和 sqlite-utils 库”
3. Cursor 会自动在下方终端里生成安装命令（通常是 `pip install llm sqlite-utils` ）。你只需要点击命令旁边的 **"Run"** 或者在终端按回车。

---

**请先完成这三项操作。完成后告诉我，我们再进行下一步（配置 API Key），不着急。**

我希望一步一步的进行，请不要把所有的操作步骤一下子都甩给我，因为我是小白

gemini-3-flash

这是一个非常棒的实战项目！Andre Karpathy 的这个 Gist 实际上是一个极其精简且高效的 **个人知识库 RAG（检索增强生成）系统** 。

既然你已经安装了 Cursor，我们将不再只是手动敲命令，而是利用 Cursor 的 **Composer (Cmd+I)** 和 **Terminal 集成** 功能来加速这个过程。

以下是针对你计划的四个步骤，如何在 Cursor 中高效执行的指南：

---

### 准备工作：初始化项目

1. 在本地创建一个文件夹，例如 `my-llm-wiki` 。
2. 在 Cursor 中打开这个文件夹。
3. 创建一个新文件 `wiki.py` ，并把 [Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) 里的内容粘贴进去。

---

### Step 1: Bootstrap (环境与基础搭建)

这一步的目标是建立 Python 虚拟环境并安装必要的依赖（主要是 Simon Willison 的 `llm` 工具套件）。

- **在 Cursor 中操作：**
	1. 按下 `Cmd + K` (在编辑器或终端中)。
		2. 输入指令：
		> "Help me setup a python virtual environment, activate it, and install the dependencies required by this script (llm, sqlite-utils, etc.)."
		3. **Cursor 会自动生成命令** ，你只需点击 `Run` 或 `Accept` 。
- **关键依赖安装：**
	```
	Bashpip install llm sqlite-utils
	```

---

### Step 2: Calibration (标定与配置)

“标定”在这里意味着配置你的 LLM 模型权限和初始化索引数据库。

- **在 Cursor 中操作：**
	1. **配置 API Key：** 询问 Cursor 如何配置 `llm` 的密钥。
		> `Cmd + L` 问 AI: "How do I set up my OpenAI/Anthropic key for the `llm` library in the terminal?"
		2. **创建文件夹结构：** 你需要一个存放 Markdown 笔记的文件夹。
		> `Cmd + K`: "Create a directory named 'documents' and a few sample markdown files about AI topics inside it for testing."
		3. **首次索引：** 运行脚本进行标定。
		> 在终端运行： `python wiki.py index ./documents`

---

### Step 3: 全系统 Audit (代码审计与理解)

这是发挥 Cursor 威力的时候。Karpathy 的代码通常非常简洁，理解其背后的逻辑能帮你更好地定制化。

- **在 Cursor 中操作：**
	1. **全文解析：** 按下 `Cmd + L` ，输入：
		> `@wiki.py 请详细解释这个脚本的工作流程，特别是它是如何处理嵌入(embeddings)和向量搜索的？`
		2. **查找潜在问题：** 询问：
		> `@wiki.py Audit this code for any potential issues with large file sizes or rate limiting when calling the LLM API.`
		3. **代码改进：** 如果你想增加功能（比如支持 PDF），选中代码按 `Cmd + K` ：
		> "Modify the script to also support.pdf files using a common python library."

---

### Step 4: 配置 Obsidian Web Clipper

Karpathy 建议使用 Obsidian 作为前端，Web Clipper 作为抓取工具，将网页内容直接存入你的 `documents` 文件夹。

- **配置逻辑：**
	1. 在 Chrome/Edge 安装 **Obsidian Web Clipper** 插件。
		2. **设置存储路径：** 指向你刚才在 Step 2 中创建的 `documents` 文件夹。
		3. **自动化工作流建议：**  
		你可以让 Cursor 写一个简单的 **Watchdog 脚本** 。
		> `Cmd + I` (Composer) 输入： "Create a new script `watch_wiki.py` that monitors the './documents' folder. Whenever a new file is added by the Obsidian Web Clipper, it should automatically run `python wiki.py index ./documents` to update the index."

---

### 💡 Cursor 高级技巧提醒：

1. **使用 `.cursorrules` ：**  
	在根目录创建一个 `.cursorrules` 文件，写上：
	> "When I ask questions about this project, always refer to Simon Willison's `llm` library documentation. Prefer concise, Pythonic solutions as seen in Karpathy's coding style."  
	> 这会让 Cursor 的回答更贴合这个项目的格调。
2. **Debug 报错：**  
	如果在运行 `python wiki.py` 时终端报错，直接点击终端上方的 **"Debug with AI"** ，它会结合代码上下文直接给出修复后的代码。

**你现在卡在哪个具体的步骤了吗？或者需要我帮你解释 `wiki.py` 里的某一段逻辑？**

我现在准备使用它来搭建Andre Karpathy 的 llm.c 微型本地 Wiki ，计划的步骤为：Step 1: Bootstrap（基础搭建）； Step 2: 标定（首次使用前必做）； step 3：全系统Audit； Step 4: 配置 Obsidian Web Clipper，这是作者在说明文档中建议的，具体开源地址在 [https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

gemini-3-flash

太棒了！安装好 Cursor 并完成 AI 问答测试只是第一步。Cursor 真正的强大之处在于它能 **深度理解你的代码库** 并 **直接修改代码** 。

为了让你快速从“初学者”进阶为“高效开发者”，建议你按照以下顺序尝试这几个核心功能：

### 1\. 代码内编辑 (Cmd + K / Ctrl + K) —— 最常用的功能

不要只在右侧侧边栏聊天。在你写代码的编辑器窗口里：

- **操作：** 选中一段代码（或者光标停在空行），按下 `Cmd + K` (Mac) 或 `Ctrl + K` (Windows)。
- **指令：** 输入“写一个生成随机颜色的函数”或“把这段代码重构得更简洁”。
- **效果：** 它会直接在编辑器里生成代码，你可以点击 **Accept** （接受）或 **Reject** （拒绝）。

### 2\. 使用 @ 符号提供上下文 (Context)

这是 Cursor 超越普通 ChatGPT 的核心。在聊天框或 Cmd+K 中输入 `@` ：

- **@Files：** 选中特定的文件，让 AI 只针对这些文件进行分析。
- **@Codebase：** 让 Cursor 扫描整个项目来回答问题（比如：“项目中哪里处理了登录逻辑？”）。
- **@Web：** 让 AI 联网搜索最新的文档（比如：“如何使用最新版的 Tailwind CSS？”）。
- **@Docs：** 官方库的文档（如 React, Next.js），AI 会基于最新的官方手册回答。

### 3\. 开启 Composer 模式 (Cmd + I / Ctrl + I) —— 终极武器

这是目前 Cursor 最强悍的功能，适合 **跨文件** 生成功能。

- **场景：** 你想增加一个完整的登录功能，涉及前端页面、后端 API 和数据库模型。
- **操作：** 按下 `Cmd + I` ，输入你的需求。
- **效果：** 它会同时修改或创建多个文件。你可以一键“全部接受”。

### 4\. 终端报错一键修复

- **操作：** 当你在终端（Terminal）运行代码报错时，终端右侧通常会出现一个 **"Debug with AI"** 按钮。
- **效果：** Cursor 会自动读取报错信息和相关代码，直接告诉你哪里错了并给出修复方案。

### 5\. 智能预测补全 (Tab)

Cursor 有自己的补全模型（Copilot++）。

- **体验：** 当你在写代码时，它会用灰色的文字预测你下一行要写什么。
- **进阶：** 它甚至能预测你下一处要修改的地方（即使在不同的行）。直接按 `Tab` 即可。

### 6\. 配置你的“项目说明书” (.cursorrules)

如果你希望 Cursor 始终遵循某种风格（比如：始终用 TypeScript，使用 Tailwind CSS，或者用中文注释）：

- **操作：** 在项目根目录创建一个 `.cursorrules` 文件。
- **内容：** 写下你的要求。Cursor 以后所有的回答和生成都会遵循这些规则。

---

**建议练习题：**

1. **重构：** 找一段你以前写的旧代码，选中它，用 `Cmd+K` 输入 “优化这段代码的逻辑并增加异常处理”。
2. **新功能：** 用 `Cmd+I` 输入 “帮我建立一个简单的 Todo List 页面，要求样式美观，并带有删除功能”。
3. **提问：** 用 `Cmd+L` (侧边栏聊天) 输入 `@Codebase 简述这个项目的整体架构` 。

**你目前是在做什么类型的项目（前端、后端、Python等）？** 告诉我你的场景，我可以给你更具体的“指令（Prompt）”建议！

现在，我安装好了Cursor，测试了AI问答：

拖拽到此处完成下载

图片将完成下载

AIX智能下载器