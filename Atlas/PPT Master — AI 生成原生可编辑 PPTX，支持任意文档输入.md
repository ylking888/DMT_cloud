---
title: "ppt-master/README_CN.md at main"
source: "https://github.com/hugohe3/ppt-master/blob/main/README_CN.md"
author:
published:
created: 2026-05-02
description: "AI generates natively editable PPTX from any document — real PowerPoint shapes with native animations, not images · by Hugo He - ppt-master/README_CN.md at main · hugohe3/ppt-master"
tags:
  - "clippings"
---

| ![](assets/PPT%20Master%20—%20AI%20生成原生可编辑%20PPTX，支持任意文档输入/file-20260502092953011.png) | 感谢 PackyCode 赞助了本项目！PackyCode 是一家稳定、高效的 API 中转服务商，提供 Claude Code、Codex、Gemini 等多种中转服务。PackyCode 为本项目的用户提供了特别优惠，使用 [此链接](https://www.packyapi.com/register?aff=ppt-master) 注册并在充值时填写"ppt-master"优惠码，可以享受 9 折优惠。 |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
![](assets/PPT%20Master%20—%20AI%20生成原生可编辑%20PPTX，支持任意文档输入/file-20260502092952867.gif)
↑ <a href="https://hugohe3.github.io/ppt-master/viewer.html?project=ppt169_liziqi_plant_dye_colors">一份 12 页的原生可编辑 PPT</a> ，端到端由 <a href="https://mp.weixin.qq.com/s/6ZmBl0uE3sOtD8TJcHfNAw">一个微信公众号链接</a> 通过 Claude Opus 4.7 生成。无需人工设计，不走图片导出——每一个形状、文本框、图表都可以在 PowerPoint 里直接点击编辑。

丢进一份 PDF、DOCX、网址或 Markdown，拿回一份 **原生可编辑的 PowerPoint** ——真正的形状、真正的文本框、真正的图表，不是图片。点击任何元素即可编辑。

> **动画** —— 导出的 deck 支持 **页间转场** 和 **页内元素入场动画** ，输出为真正的 OOXML 动画（不是嵌入视频）。默认进入页面后元素按顺序自动级联入场，无需点击；在 PowerPoint 和 Keynote 中原生播放，无需额外工具。详见 [转场与动画使用指南 →](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/animations.md) 。

> **旁白与视频** —— 把演讲者备注按页生成语音旁白（基于 `edge-tts` ，支持 90+ 语种 locale），把音频嵌回 PPTX，再用 PowerPoint 自带"导出视频"产出带旁白和转场的 MP4，全程无需第三方工具。详见 [音频旁白与视频导出 →](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/audio-narration.md) 。

> **运作方式** —— PPT Master 是一套在 AI IDE（Claude Code / Cursor / VS Code + Copilot / Codebuddy 等）里运行的工作流（一个 "skill"）。你在 IDE 的对话框里跟 AI 说"用这份 PDF 做一份 PPT"，AI 按这套工作流在你本机生成一个真正可编辑的 `.pptx` 。你不写任何代码——IDE 只是你和 AI 对话的地方。
> 
> **你要做的** ：装 Python、装一个 AI IDE、把资料放进来。

PPT Master 不一样：

- **真正的 PPT** — 如果一个文件在 PowerPoint 里打不开、不能编辑，它就不应该被叫做 PPT。PPT Master 输出的每个元素都能直接点击修改
- **成本透明可控** — 工具免费开源，唯一成本是你自己的 AI 模型用量。当前主流 AI 工具都已转向按量计费，你用多少付多少——PPT Master 不在此之外增加任何额外订阅费用
- **数据不出本地** — 你的文件不应该为了做一份 PPT 就被上传到别人的服务器。除与 AI 模型的对话外，全流程在你的电脑上完成
- **不锁定平台** — 你的工作流不应该被任何一家公司绑架。Claude Code、Cursor、VS Code Copilot 等均可驱动；Claude、GPT、Gemini、Kimi 等模型均可使用

市面上的 AI PPT 工具大致分四类，PPT Master 只做最后一类：

| 类型 | 产物形态 | 能在 PowerPoint 里逐元素改吗 |
| --- | --- | --- |
| 模板填空 | 套模板的 PPTX | 部分可以，受模板限制 |
| 图片式 | 一页一张大图拼成 PPTX | ❌ 整页是图片 |
| HTML 演示 | 网页演示 | ❌ 不是 PPTX |
| **原生可编辑（PPT Master）** | **真 DrawingML 形状、文本框、图表** | ✅ 每个元素都能点开改 |

**[在线预览 →](https://hugohe3.github.io/ppt-master/)** · [`examples/`](https://github.com/hugohe3/ppt-master/blob/main/examples) — 22 个项目，309 页 

· **[为什么选 PPT Master？](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/why-ppt-master.md)**
## 📋 PPT-Master 全部模板列表（21个）
这里是**所有 21 个模板的完整列表**：
### 🎓 学术教育类（3个）
| 序号  | 模板 ID                | 模板名称                                                                                                                        | 适用场景           |
| --- | -------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 1   | `academic_defense`   | Academic Defense Template（学术答辩模板）![](assets/PPT%20Master%20—%20AI%20生成原生可编辑%20PPTX，支持任意文档输入/file-20260502144621972.jpg)     | 学术答辩、研究汇报、项目提案 |
| 2   | `medical_university` | Hospital/Medical University Template（医院/医科大学模板）                                                                             | 医学报告、案例讨论、研究汇报 |
| 3   | `重庆大学`               | Chongqing University Template（重庆大学模板）![](assets/PPT%20Master%20—%20AI%20生成原生可编辑%20PPTX，支持任意文档输入/file-20260502150902563.jpg) | 学术答辩、研究汇报      |
|     |                      |                                                                                                                             |                |
### 💼 商务咨询类（4个）
| 序号 | 模板 ID | 模板名称 | 适用场景 |
|------|---------|----------|----------|
| 4 | `mckinsey` | McKinsey Style Template（麦肯锡风格模板） | 战略咨询、投资分析 |
| 5 | `exhibit` | Exhibit Style Template（Exhibit风格模板） | 数据驱动战略报告、高管汇报 |
| 6 | `google_style` | Google Style Template（Google风格模板） | 年度汇报、技术分享 |
| 7 | `anthropic` | Anthropic Style Template（Anthropic风格模板） | AI/LLM知识分享、产品发布 |
### 🏛️ 政府政务类（2个）
| 序号 | 模板 ID | 模板名称 | 适用场景 |
|------|---------|----------|----------|
| 8 | `government_blue` | Government Blue Template（政务蓝模板） | 智慧城市、数字化报告 |
| 9 | `government_red` | Government Red Template（政务红模板） | 政府报告、党建场景 |
### 🏢 行业企业类（10个）
| 序号 | 模板 ID | 模板名称 | 适用场景 |
|------|---------|----------|----------|
| 10 | `china_telecom_template` | 中国电信模板 | 电信解决方案、数字化转型 |
| 11 | `中国电建_常规` | PowerChina Standard Template（中国电建常规模板） | 工程建设、国企报告 |
| 12 | `中国电建_现代` | PowerChina Modern Template（中国电建现代模板） | 重大工程、国际业务展示 |
| 13 | `中汽研_商务` | CATARC Business Template（中汽研商务模板） | 认证展示、高端商务 |
| 14 | `中汽研_常规` | CATARC Standard Template（中汽研常规模板） | 认证、测试场景 |
| 15 | `中汽研_现代` | CATARC Modern Template（中汽研现代模板） | 前沿技术展示、高端发布会 |
| 16 | `招商银行` | China Merchants Bank Template（招商银行模板） | 交易银行、产品推介、培训 |
| 17 | `科技蓝商务` | Tech Blue Business Template（科技蓝商务模板） | 企业报告、解决方案提案 |
| 18 | `ai_ops` | Enterprise Digital Intelligence Template（企业数字化智能模板） | 电信AI运维、IT架构概览 |
| 19 | `smart_red` | Smart Red-Orange Business Template（智能红橙商务模板） | 科技公司介绍、教育解决方案 |
### 🎨 创意特殊类（2个）
| 序号 | 模板 ID | 模板名称 | 适用场景 |
|------|---------|----------|----------|
| 20 | `pixel_retro` | Pixel Retro Template（像素复古模板） | 技术分享、游戏主题 |
| 21 | `psychology_attachment` | Psychology Healing Template（心理学治愈模板） | 心理治疗培训、咨询讲座 |
## 🔍 如何选择？
**根据你的场景快速定位：**
- **学术交流** → `academic_defense`（推荐）、`medical_university`、`重庆大学`
- **商务汇报** → `mckinsey`（推荐）、`exhibit`、`google_style`
- **AI/技术分享** → `anthropic`、`google_style`、`pixel_retro`
- **政府/国企** → `government_blue`、`government_red`、各种国企模板
- **创意展示** → `pixel_retro`、`psychology_attachment`、`smart_red`
![](assets/PPT%20Master%20—%20AI%20生成原生可编辑%20PPTX，支持任意文档输入/file-20260502110905643.jpg)

| [![杂志风 — 打造小院指南](https://github.com/hugohe3/ppt-master/raw/main/docs/assets/screenshots/preview_magazine_garden.png)](https://github.com/hugohe3/ppt-master/blob/main/docs/assets/screenshots/preview_magazine_garden.png)   <sub><b>杂志风</b> — 暖色调，大图排版，生活方式感</sub> | [![学术风 — 医学图像分割研究](https://github.com/hugohe3/ppt-master/raw/main/docs/assets/screenshots/preview_academic_medical.png)](https://github.com/hugohe3/ppt-master/blob/main/docs/assets/screenshots/preview_academic_medical.png)   <sub><b>学术风</b> — 严谨结构，数据图表，论文答辩场景</sub> |
| --- | --- |
| [![暗色艺术风 — MV 深度解析](https://github.com/hugohe3/ppt-master/raw/main/docs/assets/screenshots/preview_dark_art_mv.png)](https://github.com/hugohe3/ppt-master/blob/main/docs/assets/screenshots/preview_dark_art_mv.png)   <sub><b>暗色艺术风</b> — 电影感深色背景，美术馆陈列感</sub> | [![自然风 — 湿地野生动物纪录](https://github.com/hugohe3/ppt-master/raw/main/docs/assets/screenshots/preview_nature_wildlife.png)](https://github.com/hugohe3/ppt-master/blob/main/docs/assets/screenshots/preview_nature_wildlife.png)   <sub><b>自然纪录风</b> — 沉浸式摄影，简洁信息层级</sub> |
| [![科技风 — Claude AI 订阅方案](https://github.com/hugohe3/ppt-master/raw/main/docs/assets/screenshots/preview_tech_claude_plans.png)](https://github.com/hugohe3/ppt-master/blob/main/docs/assets/screenshots/preview_tech_claude_plans.png)   <sub><b>科技 / SaaS 风</b> — 白底卡片，定价表格，产品说明书</sub> | [![发布会风 — 小米春季新品](https://github.com/hugohe3/ppt-master/raw/main/docs/assets/screenshots/preview_launch_xiaomi.png)](https://github.com/hugohe3/ppt-master/blob/main/docs/assets/screenshots/preview_launch_xiaomi.png)   <sub><b>发布会风</b> — 高对比度，参数突出，苹果/小米发布会感</sub> |


## 关于作者
我是何雨果（Hugo He），投融资领域从业者（注册会计师 · 资产评估师 · 咨询工程师（投资）），工作中经常审阅和修改 PPT。我希望 AI 生成的幻灯片仍然能在 PowerPoint 里继续编辑，而不是被压成一张张图片——所以做了这个。🌐 [个人网站](https://www.hehugo.com/) 

## 快速开始
### 1、前置条件
**只需装 Python 即可。** 其余依赖通过 `pip install -r requirements.txt` 一次装齐。

| 依赖 | 是否必须 | 用途 |
| --- | --- | --- |
| [Python](https://www.python.org/downloads/) 3.10+ | ✅ **必需** | 核心运行时——唯一真正需要安装的东西 |
> **一句话总结** — 装好 Python，跑一行 `pip install -r requirements.txt` ，就可以开始生成 PPT 了。
**Windows** — 请看专门的手把手安装指南

⚠️Windows 需要一些额外步骤（PATH 设置、执行策略等）。我们为 Windows 用户写了一份 **手把手安装指南** ：
**📖 [Windows 安装指南](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/windows-installation.md)** — 从零到跑通第一份 PPT，10 分钟搞定。
简要流程：从 [python.org](https://www.python.org/downloads/) 下载 Python → **安装时勾选 "Add to PATH"** → `pip install -r requirements.txt` → 完成。

**macOS / Linux** — 安装即用
```
# macOS
brew install python
pip install -r requirements.txt

# Ubuntu / Debian
sudo apt install python3 python3-pip
pip install -r requirements.txt
```
**边缘场景备用方案** — 99% 的用户用不到

下面两个外部程序只作为极端场景的兜底。 **绝大多数用户根本不需要装** ，只有遇到以下具体场景才装：

| 备用方案 | 只在以下情况才装 |
| --- | --- |
| [Node.js](https://nodejs.org/) 18+ | 你需要抓取微信公众号文章， **且** 你的 Python + 系统 + CPU 组合下 `curl_cffi` （ `requirements.txt` 里已默认安装）没有预编译 wheel。正常安装下 `web_to_md.py` 已能通过 `curl_cffi` 直接抓微信。 |
| [Pandoc](https://pandoc.org/) | 你需要转 `.doc` 、`.odt` 、`.rtf` 、`.tex` 、`.rst` 、`.org` 、`.typ` 这些小众格式。`.docx` 、`.html` 、`.epub` 、`.ipynb` 已由 Python 原生处理，不需要 pandoc。 |

```
# macOS（仅在上述条件成立时才装）
brew install node
brew install pandoc

# Ubuntu / Debian
sudo apt install nodejs npm
sudo apt install pandoc
```

### 2、 选择一个 Agent
PPT Master 在 **任何具备 agent 能力** （可读写文件、执行命令、持续多轮对话）的工具里都能跑。

| 类型 | 代表工具 | 说明 |
| --- | --- | --- |
| **IDE 内置 agent** | • VS Code 架构（含 [VS Code](https://code.visualstudio.com/) 本体及分支与衍生）： [Cursor](https://cursor.sh/) 、Trae、Codebuddy IDE、 [Windsurf](https://codeium.com/windsurf) 、Void 等   • 其他架构： [Zed](https://zed.dev/) 等 | 编辑器原生集成 agent |
| **IDE 插件 / 扩展** | [GitHub Copilot](https://github.com/features/copilot) 、 [Claude Code](https://claude.ai/code) （VS Code / JetBrains 扩展）、 [Cline](https://cline.bot/) 、 [Continue](https://continue.dev/) 、Roo Code、通义灵码、CodeGeeX 等 | 装在 VS Code / JetBrains 等宿主里使用 |
| **CLI agent** | [Claude Code](https://claude.ai/code) CLI、 [Codex CLI](https://github.com/openai/codex) 、 [Aider](https://aider.chat/) 、Gemini CLI 等 | 终端里运行，适合脚本化 / 远程 / 服务器场景 |
> **模型推荐** ： [Claude](https://claude.ai/) Opus / Sonnet 效果最好且测试最充分。其他主流模型（GPT、Gemini、Kimi、MiniMax 等）也能驱动，但 SVG 绝对坐标布局精度会有差异。
**🔑 想用 Claude / GPT / Gemini 但还没有渠道？** 本项目赞助商 **[PackyCode](https://www.packyapi.com/register?aff=ppt-master)** 可以解决大多数卡点——没有 API Key、无法直连、没有境外信用卡无法订阅、或者只是不想为偶尔使用付整月费，PackyCode 都能让你按量调用 Claude、GPT、Gemini 等主流模型，支持国内支付，开箱即用。充值时填写优惠码 **`ppt-master`** 享 9 折。

### 3、配置项目
**方式 A — 下载 ZIP** （无需安装 Git）： [GitHub](https://github.com/hugohe3/ppt-master) → **Code → Download ZIP** · [AtomGit](https://atomgit.com/hugohe3/ppt-master) → **克隆/下载 → 下载ZIP** （国内网速更快）
**方式 B — Git clone** （需先安装 [Git](https://git-scm.com/downloads) ）：
```
# GitHub
git clone https://github.com/hugohe3/ppt-master.git
# AtomGit（国内网速更快）
git clone https://atomgit.com/hugohe3/ppt-master.git
cd ppt-master
```
然后安装依赖：
```
pip install -r requirements.txt
```
日常更新（仅方式 B）： `python3 skills/ppt-master/scripts/update_repo.py`

### 4、开始创作
**提供原始材料（推荐）：** 将 PDF、DOCX、图片等文件放入 `projects/` 目录下，在 AI 聊天面板中告诉它使用哪些文件。获取路径的最快方式：在文件管理器或 IDE 侧边栏中右键文件 → **复制路径** （Copy Path / Copy Relative Path），直接粘贴进聊天框。
```
你：请用 projects/q3-report/sources/report.pdf 这份文件生成一份 PPT
```
**直接输入内容：** 也可以把文字内容直接粘贴进聊天窗口，AI 会根据这些内容生成 PPT。
```
你：请根据以下内容制作成 PPT：[粘贴你的文字内容...]
```
两种方式下 AI 都会先确认设计规范：
```
AI：好的，先确认设计规范：
   [模板] B) 自由设计
   [格式] PPT 16:9
   [页数] 8-10 页
   ...
```
AI 全程处理——内容分析、视觉设计、SVG 生成、PPTX 导出。
> **输出说明：** 原生形状版主 `.pptx` （可直接编辑）保存至 `exports/<name>_<timestamp>.pptx` ；SVG 快照版 `_svg.pptx` 与 `svg_output/` 副本归档至 `backup/<timestamp>/` ，便于回溯视觉参考或免去 LLM 重跑直接重建 pptx。需要 Office 2016+。

> **AI 迷失上下文？** 让它先读 `skills/ppt-master/SKILL.md` 。

> **遇到问题？** 查看 **[常见问题](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/faq.md)** — 涵盖模型选择、排版问题、导出异常等，基于真实用户反馈持续更新。

### 5、图片获取（可选）
非用户自带图片有两条路径，可在同一份 deck 里按行混用：
**A) AI 生图** — `image_gen.py` 。 `cp .env.example .env` ，设置 `IMAGE_BACKEND` 和对应 `*_API_KEY` （ `OPENAI_API_KEY` 、 `GEMINI_API_KEY` 等），流程会自动调用。 `python3 skills/ppt-master/scripts/image_gen.py --list-backends` 查看完整后端清单。 `gpt-image-2` 目前综合质量最佳。
**B) 网络图片搜索** — `image_search.py` 。 **零配置** 可用，但高质量使用建议配置 `PEXELS_API_KEY` / `PIXABAY_API_KEY` （都免费申请）。不配置时只使用 Openverse / Wikimedia Commons，适合作为兜底，但容易出现普通用户上传、构图随意、清晰度不稳定的图片；配置后默认搜索链会追加 Pexels / Pixabay，现代商业摄影、人物、办公、生活方式和插画类图片质量会明显更稳定。默认以图片质量和匹配度优先，直接把 CC0、公有领域、Pexels / Pixabay 免署名许可、CC BY、CC BY-SA 一起纳入候选；如果选中的图片需要署名，Executor 会在该幻灯片自动添加小字署名。只有明确不能出现署名时，才使用 `--strict-no-attribution` 限制为免署名图片。对视觉要求高的封面、产品图、人物图和品牌场景，优先级建议是：用户自带高清素材 / AI 生图 > 配置 Pexels / Pixabay 的网络搜索 > 零配置网络搜索。
> 完整说明： [`image-generator.md`](https://github.com/hugohe3/ppt-master/blob/main/skills/ppt-master/references/image-generator.md) （AI）· [`image-searcher.md`](https://github.com/hugohe3/ppt-master/blob/main/skills/ppt-master/references/image-searcher.md) （网络）。

## 文档导航

|  | 文档 | 说明 |
| --- | --- | --- |
| 🆚 | [为什么选 PPT Master](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/why-ppt-master.md) | 与 Gamma、Copilot 等工具的对比 |
| 🪟 | [Windows 安装指南](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/windows-installation.md) | Windows 用户手把手安装教程 |
| 📖 | [SKILL.md](https://github.com/hugohe3/ppt-master/blob/main/skills/ppt-master/SKILL.md) | 核心流程与规则 |
| 🎨 | [创建自定义模板](https://github.com/hugohe3/ppt-master/blob/main/skills/ppt-master/workflows/create-template.md) | 独立工作流，构建你自己的品牌或行业模板 |
| 📐 | [画布格式](https://github.com/hugohe3/ppt-master/blob/main/skills/ppt-master/references/canvas-formats.md) | PPT 16:9、小红书、朋友圈等 10+ 种格式 |
| 🎬 | [转场与动画](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/animations.md) | 页间转场和页内元素入场动画 |
| 🎙️ | [音频旁白与视频导出](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/audio-narration.md) | 90+ 语种 TTS 旁白、音频嵌入 PPTX、导出为 MP4 |
| 🛠️ | [脚本与工具](https://github.com/hugohe3/ppt-master/blob/main/skills/ppt-master/scripts/README.md) | 所有脚本和命令 |
| 💼 | [示例](https://github.com/hugohe3/ppt-master/blob/main/examples/README.md) | 22 个项目，309 页 |
| 🏗️ | [技术路线](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/technical-design.md) | 架构、设计哲学、为什么选 SVG |
| ❓ | [常见问题](https://github.com/hugohe3/ppt-master/blob/main/docs/zh/faq.md) | 模型选择、费用、排版问题排查、自定义模板 |

## 贡献
详见 [CONTRIBUTING.md](https://github.com/hugohe3/ppt-master/blob/main/CONTRIBUTING.md) 。

## 开源协议
[MIT](https://github.com/hugohe3/ppt-master/blob/main/LICENSE)

## 致谢
[SVG Repo](https://www.svgrepo.com/) · [Tabler Icons](https://github.com/tabler/tabler-icons) · [Simple Icons](https://github.com/simple-icons/simple-icons) · [Phosphor Icons](https://github.com/phosphor-icons/core) · [Robin Williams](https://en.wikipedia.org/wiki/Robin_Williams_\(author\)) （CRAP 设计原则）

