参考教程：[【喂饭教程】这绝对是B站最好的llm-wiki搭建知识库教程，基于Karpathy一站式从入门到进阶，25分钟快速上手,手把手教你学会搭建知识库！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1nAdjBDEns/?spm_id_from=333.337.search-card.all.click&vd_source=b00ffc87d2f4365faf01741e93e463bb)
![](assets/OBsidian与Wiki/file-20260420114020930.png)
# 搭建步骤
## 安装环境
- Node.js (用于安装各种软件, https://nodejs.org/en)
- 已安装 Claude Code (npm install -g @anthropic-ai/claude-code)
- Python 3.8+ (用于 lint 脚本)
- Obsidian (https://obsidian.md/, 用于管理本地化知识库)
- qmd 已安装 (npm install -g @tobi/qmd)

## 建文件夹


## Step 1: Bootstrap（基础搭建）
mkdir -p ~/knowledge-base
cd ~/knowledge-base
在终端输入：claude code
将以下提示词完整粘贴给 Claude Code：

```
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
frontmatter 字段: type, title, date, source_url, domain, author, tags, processed, ram_file, ram_sha256, last_verified, possibly_outdated, language, canonical_source
主要结构: ## Summary. ## Key Points. ## Concepts Extracted. ## Entities Extracted. ## Contradictions(与其他来源的分歧). ## My Notes

### wiki/templates/personal-writing-template.md
frontmatter 字段: type: personal-writing, date, status(draft/published/deprecated), topic_tags, confidence_low_at_writing(low/medium/high), superseded_by, ram_file, ram_sha256, last_verified, tags, title, date
主要结构: ## Core Argument. ## Key Claims. ## Evidence Referenced. ## Limitations

### wiki/templates/concept-template.md
frontmatter 字段: type: concept, (中文名主名称) , date, updated, tags,
source_count, confidence(low/medium/high),
domain_volatility(low/medium/high), last_reviewed, aliases (微组, 存储中英文所有叫法)
正文结构: ## Definition (暂行用 (中文名 (English Name)) 格式)、## Key Points、## My Position、## Contradictions、## Sources (仅 wikilinks 列表)、## Evolution Log (每次更新前加一条)

### wiki/templates/entity-template.md
frontmatter 字段: type: entity, title, date, tags,
entity_type(person/tool/institution/paper), aliases
正文结构: ## Description、## Key Contributions、## Related Concepts、## Sources

### wiki/templates/synthesis-template.md
frontmatter 字段: type: synthesis, title, date, tags, source_count, confidence
正文结构、## Thesis、## Evidence、## Counter-evidence（Stage 0 反向检验结果）、## Synthesis、## Confidence Notes、## Limitations、## Sources

## 四、创建 scripts/lint.py

lint 执行以下 9 项检测，完成后将报告写入 wiki/outputs/lint-YYYY-MM-DD.md（frontmatter 下 graph-excluded: true）：

1. YAML frontmatter 合法性：所有 wiki/ 下的 .md 文件是否有合法 YAML frontmatter（含 type 和 date）
2. Broken wikiLinks：[[xxx]] 引用了不存在的页面
3. Index 一致性：wiki/index.md 中标记的文件是否都实际存在
4. Stubs 页面：正文少于 100 字的空壳页面
5. 近重复概念名称：slug 名称 Jaccard 相似度 > 0.7 的 concept 页对
6. SHA-256 完整性：raw 文件哈希与 source 页 raw_sha256 字段比对（△ SOURCE MODIFIED）
7. Stale 页面：超过 domain_volatility 时效阈值（high>90 天，medium=180 天，low=365 天）
8. 降重审查页：source URL 相似度检测 + 不同 concept 页的 aliases 字段重叠检测
9. Wikilink 格式规范：检测非英文小写连字符格式的 wikilink（如中文词汇 [【价值投资】]）及别名错链
   
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
  - 'raw_file': 相对路径（如 'raw/articles/filename.md'）
  - 'raw_sha256': SHA-256 哈希值
  - 'last_verified': 摄入日期(YYYY-MM-DD)
  - 若来源发表日期超过 2 年前, 标注 'possibly_outdated: true', 并在摘要末尾添加提示
6. **概念名称对齐校验**（提取概念之前必须执行）
  - 将每个捞取到的概念名称统一映射为小写连字符 slug（例如「第一性原理」→ first-principles-thinking）
  - 在 wiki/concepts/ 中查找该 slug 是否已存在对应文件
  - **同时检查所有已有 concept 页的 'aliases' 字段**：遍历 wiki/.concepts/*.md, 解析每页 frontmatter 的 aliases 列表, 检查是否包含当前新概名称(支持中英文别名配)
  - 若通过 slug 匹配或通过 aliases 匹配到已有页面, 更新已有页面, 不创建新页面, 若找不到任何匹配项, 才创建新页面, 并在 frontmatter 中的 'aliases' 中填入中文和英文捞取到的概念
7. 为每个新找到的概念
   - 如 wiki/concepts/<<concept>>.md 已存在，更新它，通知新来源引用，在
Evolution Log 增加源，使新 source_count 和 confidence，同时更新
last_reviewed 字段**
- 如真不存在，创建新文件（使用 concept-template.md），同时在 aliases 字段填入该概念的中英文名称**
- **Evolution Log 添加规则**：
    - 若本次来源跟当前 Definition 一致，写「强化」
    - 若有修正，写「修正：[具体变化]」
    - 若相互矛盾，写「新增分歧：[分歧内容]，见 Contradictions 节」
    - 格式：- YYYY-MM-DD（In sources）：[本次认知变化的一句话描述]
8. 为每个提取到的实体，同上逻辑
9. 更新 wiki/inde.md，将来源从 Unprocessed 移动到 Processed
10. 读取 wiki/QUESTIONS.md，检查本次来源是否能回答开放问题，
    - 若能，提示用户是否可以「开源写入」[问答标题]，是否立即执行 QUERY？
    - 用户确认后，执行 QUERY 并将结果写入 wiki/synthesis/，同时在 QUESTIONS.md
中将该问题移入 Answered
11. 在 wiki/log.md 末尾添加：`YYYY-MM-DD HH:MM | ingest | [来源标题]`
    
**个人写作流程（不同于标准流程）**：
- 不生成 Summary 节，跳过客观观察
- 核心 graph 写人相关的 ## My Position 节（标注「个人认知」）
- 不参与 confidence 的 source_count 计数（避免用自己的文章给自己背书）
- 若文章中引用了外部来源，提取这些引用并尝试与已有 wiki/sources/ 页面建立 wikilinks
- raw_sha256 哈希值同样适用
- Evolution Log 记录：[YYYY-MM-DD 个人写作] [[stag]] 确立了对此概念的明确立场
  
### QUERY 操作规范
触发词：直接提问，或「根据我的知识库」

执行步骤：
Step Q1. 执行 qad query "<用户问题>" --json，获取 top 5 相关页面（若 qad 报墙则降级读取wiki/index.md）
Step Q2. 逐一回答 top 5 文件
Step Q3. 合成答案，每个核心结论必须溯源到具体 wiki/sources/<<slug>>.md（不允许只引用 concept）；注明来源 confidence 级别；来源相互矛盾时显式标注分极
Step Q4. 若答案具有实用价值，写入 wiki/outputs/YYYY-MM-DD-topics.md 文件 frontmatter 含 graph: evaluated: true；输出在末尾包含 ▶ Confidence Notes 节；更新 wiki/index.md 的 Recent Synthesis 列表；添加 wiki/log.md


```