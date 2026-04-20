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
```