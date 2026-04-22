---
title: "SOLO 必装的14个 Skills，看这一篇就够了（上） #TRAE #最佳实践"
source: "https://www.douyin.com/article/7630763748059303202"
author:
published:
created: 2026-04-22
description: "SOLO 必装的14个 Skills，看这一篇就够了（上） #TRAE #最佳实践 - TRAE.ai于20260420发布在抖音，已经收获了20.4万个喜欢，来抖音，记录美好生活！"
tags:
  - "clippings"
---
SOLO 必装的14个 Skills，看这一篇就够了（上）

> 本文作者：Jiaqi，TRAE 技术文档工程师

本文档精选了 TRAE SOLO 技能市场中的一系列核心技能，涵盖开发工具、效率提升、界面设计、数据分析与内容创作领域，并通过实践案例，展示了它们在不同场景中的具体应用。每个技能都包含详细的功能简介、应用场景和实际使用案例。

本文介绍的技能如下：

![图片描述](https://p5-ex-gddgtc-sign.douyinpic.com/tos-cn-i-dy/4f229dbcdd1a7f527439405c9ff9a9be~tplv-dy-long-article:0:0.jpeg?lk3s=138a59ce&x-expires=1778025600&x-signature=M3f6GbRM5rDzfxrz96HOAC%2FbPOE%3D&from=327834062)

## 一、关于 SOLO 技能市场

TRAE SOLO 的技能市场为不同使用场景提供了多种技能，涵盖数据分析、界面设计、开发工具等领域。你可以直接从中安装所需技能。

## 二、开发工具

## git-commit

### 作者

GitHub

### 简介

git-commit 是一个基于 Conventional Commits 规范的代码提交辅助工具。它可以分析代码变更，自动完成文件分组与暂存，并生成结构化的提交信息。该技能内置严格的 Git 安全协议与最佳实践，确保提交历史规范且安全。

### 应用场景

- **生成规范的提交信息**
	在提交代码时，AI 会通过该技能来自动分析暂存区或工作区的代码差异（diff），识别变更类型（如 feat、fix、docs）及作用范围（scope），并生成符合 Conventional Commits 规范的提交信息。提交描述必须使用现在时祈使句，长度不超过 72 字符。
- **按逻辑拆分与暂存变更**
	当工作区中存在多项变更时，该技能支持通过文件路径、通配符或交互式方式（ **\*git add -p** \* ）来暂存特定文件，确保单次提交仅包含一个变更。同时，该技能会严格遵守安全准则，不会将 **\*.env** \* 、凭证或私钥等机密文件加入提交列表。
- **安全执行 Git 提交流程**
	执行 **\*git commit** \* 时，该技能支持让你以交互式方式修改或覆盖自动生成的类型、范围和描述。同时，它会严格遵循 Git 安全协议：
	不修改 Git 配置；
	不执行破坏性命令（如 **\*--force** \* 、 **\*hard reset** \* ）；
	默认不跳过代码检查钩子（ **\*--no-verify** \* ）；
	钩子校验失败时，需修复后重新提交，不使用 **\*git commit --amend** \* 覆盖历史提交。

在以下示例中，AI 调用 “git-commit” 技能，按顺序执行 **\*git status** \* 、 **\*git diff** \* 、 **\*git add** \* 、 **\*git commit** \* 和 **\*git log** \* 命令，高效完成一次符合规范的提交。

## react-best-practices

### 作者

Vercel

### 简介

**\*react-best-practices** \* 是一个面向 React 和 Next.js 项目（尤其是 TSX/JSX 文件）的代码质量审查与性能优化工具。它的内置规则基于 Vercel 官方最佳实践（8 类、64 条，按优先级划分），覆盖组件结构、Hooks 规范、a11y、TypeScript 以及服务端/客户端性能优化。该技能会在组件编写、修改或重构时自动被触发，然后执行代码检查并提供优化建议。

### 应用场景

- **核心性能瓶颈诊断与优化**
	针对数据请求与页面加载，该技能重点解决以下两大 CRITICAL 优先级的问题：
	**请求瀑布流：** 使用 **\*Promise.all** \* 、 **\*Suspense** \* 流式渲染，优化 API 路由中的异步依赖。
	**Bundle 体积：** 避免引入冗余的 barrel file，使用 **\*next/dynamic** \* 动态加载组件，同时延迟第三方脚本的加载，从而提升页面的感知加载速度。
- **UI 架构审查与技术栈迁移**
	检测到传统 CSS-in-JS（如 **\*styled-components** \* 、 **\*@emotion** \* ）或大型组件库（如 **\*@mui/material** \* 、 **\*@chakra-ui/react** \* ）时，该技能会提示你迁移至 **\*shadcn/ui + Tailwind CSS** \* 等现代技术栈，以提升服务端渲染性能与构建效率。
- **组件渲染与状态管理优化**
	在组件开发与重构阶段，该技能会审查代码并提供优化建议：
	**服务端/客户端协同：** 规范 React Server Components 的数据序列化与缓存机制（如 **\*React.cache()** \* ），并优化客户端的 SWR 请求去重。
	**重渲染控制：** 规范 Hooks 的使用，优先采用派生状态（Derived State），避免过度使用 **\*useEffect** \* ；结合 **\*useTransition** \* 与缓存策略，降低不必要的重渲染。

以下案例中，AI 调用 “react-best-practices” 技能优化了一个 TypeScript 项目。结果如下：

AI 调用该技能后的输出：

具体优化点（以 diff 形式展示）：

- **消除数据请求瀑布流**
	将顺序的 **\*fetch** \* 串行请求改为 **\*Promise.all** \* 并行请求，减少等待时间。

- **避免行内组件 & CSS 替代 JS 交互状态**
	将 **\*UserRow** \* 提取到组件外部，并用 **\*styled-components** \* 的 **\*:hover** \* 伪类替代 **\*onMouseEnter** \* 维护的 JS 状态。

- **渲染健壮性与内存泄漏修复**
	修复了防抖函数遗漏的 **\*clearTimeout** \* ，以及 React 条件渲染数组长度的陷阱（可能导致页面输出 **\*0** \* ）。

## webapp-testing

### 作者

Anthropics

### 简介

webapp-testing 是一个基于 Playwright 的本地 Web 应用测试工具集，支持前端功能验证、UI 调试、页面截图及浏览器控制台日志采集，遵循 “先侦查后执行” 的流程。该技能提供示例与辅助脚本，覆盖静态 HTML 自动化测试、元素定位、日志抓取能力，并可在多服务场景下统一管理服务器生命周期。

### 应用场景

- **前端功能验证**
	在本地开发 Web 应用（如 React、Vue、Svelte）时，通过自然语言描述测试需求（如 “测试登录流程”），AI 会调用该技能，自动生成 Playwright 脚本，模拟用户操作并返回结果。
- **UI 行为调试与分析**
	当你发现页面中某元素渲染异常或交互行为异常时，可向 AI 下达指令（例如：“截取首页完整截图” 或 “检查按钮的 DOM 结构”），AI 会执行该技能中的对应脚本，捕获截图或获取 HTML 内容，并将检查结果返回给你，以帮助你定位问题。
- **多服务应用测试**
	若你的应用为前后端分离架构，测试前端功能需后端 API 服务同步运行，只需向 AI 提供项目结构与启动命令，AI 会借助该技能中的 **\*with\_server.py** \* 脚本来同时启动所有必需服务，再运行测试脚本，确保在完整的环境中执行测试。
- **静态页面测试**
	若你有不依赖服务器的纯静态 HTML 页面，需验证其内容或结构，只需向 AI 提供文件路径与测试需求，AI 会编写脚本并通过 **\*file://** \* 协议在浏览器中打开该文件，然后执行自动化验证。

在以下案例中，AI 测试了一个网站的登录功能。它调用了 “webapp-testing” 技能，使用 Playwright 编写自动化测试脚本 **\*test\_login.py** \* ，对登录功能进行了端到端测试，并输出测试结果。

## composition-patterns

### 作者

Vercel

### 简介

composition-patterns 是一个面向 React 组件组合模式与架构设计的代码审查与重构工具。其核心目标是解决组件迭代过程中因逻辑叠加导致的 props 膨胀问题，通过复合组件（Compound Components）、状态提升（Lifting State）及现代 React API（含 React 19），构建具备高灵活性、高可维护性的组件体系。

### 应用场景

- **重构臃肿组件**
	当一个组件包含过多业务分支，充斥大量布尔 props（比如 **\*isPrimary** \* 、 **\*hasIcon** \* ）和多层 **\*if-else** \* 时，你可以使用该技能来重构它。该技能会协助你将一个复杂组件拆分为多个细粒度子组件，以组合方式替代参数扩展，从而降低组件的复杂度。
- **设计可复用的组件库**
	在实现 **\*Tabs** \* 、 **\*Modal** \* 、 **\*Select** \* 这类通用组件时，该技能采用 Compound Components 来设计 API：将状态收敛在内部（通常为 **\*Provider** \* + **\*Context** \* ），同时把结构的控制权交给使用者，让组件可以自由组合，而非固定用法。
- **设计灵活的业务 API**
	面对不确定的业务需求，需要为组件预留足够的内部扩展空间时，可以使用该技能。它会优先使用 **\*children** \* 来组合节点，而非一开始就引入复杂的 **\*renderProps** \* 或大量配置项，这样可以减少组件内部的复杂度，也更容易应对后续变化。
- **审查组件架构并规范状态**
	你可以将该技能作为团队的组件设计审核工具，在代码审查时用于评估组件架构是否健壮。该技能强制推行状态解耦，确保状态管理内聚在 **\*Provider** \* 中，并定义标准化的 **\*Context** \* 接口，保证复杂组件树中的状态流向清晰、易于维护。
- **适配 React 19 API**
	当需要重构组件以适配 React 19 的新特性时，可以使用该技能。例如，它会协助你移除冗余的 **\*forwardRef** \* 包装，并使用更灵活的 **\*use()** \* hook 替代传统的 **\*useContext()** \* ，让组件代码更符合最新的 React 演进方向。

以下案例中，AI 调用 “composition-patterns” 技能优化了一个 TypeScript 项目。结果如下：

AI 调用该技能后的输出：

具体优化点（以 diff 形式展示）：

- **消除布尔属性泛滥**
	移除了 **\*hasImage** \* 、 **\*hasIcon** \* 、 **\*showFooter** \* 、 **\*isLoading、isError** \* 等大量用于控制 UI 显隐的布尔属性，改为使用 **\*children** \* 组合。

- **显式变体**
	用明确的 **\*variant** \* 枚举属性替换了原本单一的 **\*isPrimary** \* 布尔值，为后续增加更多样式（如 **\*secondary** \* 、 **\*outline** \* ）提供了扩展性。

- **复合组件架构**
	将原本大而全的庞大 JSX 渲染逻辑（无数个 **\*if/else** \* ），拆分为职责单一的小组件，并通过挂载到主组件上对外暴露。

## 三、效率提升

## agent-browser

### 作者

Vercel

### 简介

agent-browser 是一个面向 AI 智能体的浏览器自动化 CLI 工具，用于执行网页交互与数据操作，包括页面导航、表单填写、点击操作、截图、数据提取及 Web 应用测试等，适用于以编程方式控制浏览器的自动化流程。

该技能支持的典型请求包括：打开页面、填写表单、点击元素、截图、抓取数据、登录网站等。

### 应用场景

- **测试网页中的复杂交互**
	当一个网页包含复杂的表单填写、下拉选择或多步点击时，可以借助该技能来自动化测试该网页。该技能通过快照命令（ **\*snapshot** \* ）获取页面内所有元素的简化标识（如 **\*@e1** \* ），然后通过批量命令（ **\*batch** \* ）执行操作，从而提升执行效率并降低 Token 消耗。
- **抓取网页中的数据**
	当你需要从多个网页提取特定信息或结构化数据时，可以使用该技能。它支持提取页面链接（ **\*--urls** \* ）及指定元素内容（如 **\*get text** \* ），并自动处理 Iframe，非常适用于结构化数据采集。
- **响应式布局与视觉回归验证**
	当需要验证网页在不同屏幕尺寸或设备上的表现时，可以使用该技能。它支持动态调整视口分辨率、模拟各类设备（如 iPhone 14），并生成全页面或特定元素的截图；结合 diff 功能，该技能非常适用于 UI 回归测试与布局校验。

### 实践案例

**场景：** 测试一个包含 “选择套餐”、“高级配置”、“完善信息” 三步流程的企业套餐订阅页面。

**操作与结果：** AI 调用 “agent-browser” 技能，通过 **\*click** \* 、 **\*snapshot** \* 等自动化操作，成功验证了三步流程中的所有交互逻辑（包括价格切换、组件响应、表单校验、数据保留及提交），并发现和修复了一个因 **\*z-index** \* 不当导致按钮被遮挡的层级问题。

## brainstorming

### 作者

Obra

### 简介

Brainstorming 是一个强制性的前置设计与需求分析技能，旨在通过协作式对话，将你的初步想法转化为结构化、可执行的设计方案与需求文档。在完成文档并获得用户确认前，禁止执行任何实现类操作（如编写代码、初始化项目等）。

该技能避免了 “需求太简单而无需设计” 的反模式，所有需求均需经过设计阶段，从而降低最终实现的偏差与返工率。

### 应用场景

- **引入全新功能与组件**
	你可以在需要增加新的业务逻辑、开发独立的模块，或在现有系统中扩展新能力等场景中使用该技能。它会引导你明确新需求，梳理现有代码与新功能的耦合度，并提供最终的设计方案。
- **修改或重构现有逻辑**
	当你需要修改或重构现有逻辑（例如臃肿的代码）时，该技能会在修改前先探索现有结构和瓶颈，然后提出针对性的改进方案。
- **拆解并规划大型项目**
	面对搭建类似 Notion 的协作平台等宏大需求时，该技能会在早期阶段对项目范围进行收敛。它会引导你理清各个子系统的依赖关系，确定最小可行性版本（MVP），将整体项目拆分为多个可独立开发的小任务。随后，它会优先为第一个子项目启动设计流程。
- **涉及 UI/UX 的视觉辅助决策**
	当讨论诸如 “仪表盘布局” 或 “页面交互” 等需要直观展示的需求时，该技能会提供基于浏览器的可视化工具（Visual Companion），直接渲染线框图、架构图或多套布局方案。这种直观的对比展示能够帮助你更准确地完成设计相关的决策。

### 实践案例

**第一阶段：提问**

提示词：帮我创建一个宠物用品购物网站。

收到请求后，AI 自动调用 “brainstorming” 技能，在开发前通过一系列提问与我进行头脑风暴，收集关于目标用户、核心功能、设计偏好和技术栈选择的信息。

问题一：

问题二：

问题三：

问题四：

**第二阶段：输出方案**

在获得充足的信息后，AI 输出了一份网页设计方案让我确认。我可以选择接受方案或提出修改意见，待方案设计定稿后再进入开发阶段。

本文就介绍到这里，在下篇文章中，我们将聚焦界面设计、数据分析与内容创作三大实用领域，进一步探索 TRAE SOLO 技能市场的核心技能。

暂停

00:10 / 00:54 直播

00:00

进入全屏H

网页全屏Y

- 不开启

倍速

 <video controls=""><source src="https://sf5-hl-ali-cdn-tos.douyinstatic.com/obj/tos-cn-ve-2774/3a9331fca0c0424d87674111383c36c4?__vid=7630763748059303202" type=""> <source src="https://sf6-cdn-tos.douyinstatic.com/obj/tos-cn-ve-2774/3a9331fca0c0424d87674111383c36c4?__vid=7630763748059303202" type=""></video>

点击按住可拖动视频934 47 86

举报

发布时间：2026.04.20

[

认证徽章

TRAE官方账号](https://www.douyin.com/user/MS4wLjABAAAAwW6KAzmOu3OenU1kgddAiakDE7gXkQs898NLtAaFdYnfUg0VWfq0KJbslaM_pj8E)

粉丝12.2万获赞20.4万

## 推荐视频

- [![5个Claude Code高性价比技巧💻让你编程效率翻倍！ 嗨！大家～
	这是一期 Claude Code 使用技巧分享，都是极易上手又很有效的技能，欢迎查收！ 
	#ClaudeCode #AI #青年创作者成长计划 #AI新星计划 #AI编程 #学术新星计划](https://p9-pc-sign.douyinpic.com/image-cut-tos/ad4557ff20a2dfd6e504933882a2c7b3~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=0XOapJ6NLLK3ee6Kgm8y9upc55c%3D)](https://www.douyin.com/video/7620428002853145891)
	[05:36](https://www.douyin.com/video/7620428002853145891)
	[
	播放中
	](https://www.douyin.com/video/7620428002853145891)
	### 5个Claude Code高性价比技巧让你编程效率翻倍！ 嗨！大家～这是一期 Claude Code 使用技巧分享，都是极易上手又很有效的技能，欢迎查收！ #ClaudeCode #AI #青年创作者成长计划 #AI新星计划 #AI编程 #学术新星计划
	1.3万 [赫赫儿\_](https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7630763748059303202&log_pb=%7B%22impr_id%22%3A%2220260422085614DC94ADE0853102645D39%22%7D&relation=1)
- [![装了 OpenClaw 感觉没啥用？因为你少了这6个技能！ 装了 OpenClaw 之后发现，它好像什么都做不了？别卸载。问题不在工具，在你还没给它装技能。OpenClaw 本身就是个空壳——就像一台刚出厂的手机，系统装好了，但一个 App 都没有。真正让它变成「私人 AI 助理」的，是 ClawHub 里的Skill。这期我从下载量最高的 Skill 里挑出了 6 个，每一个装上去都是立竿见影的那种：
	🟢 GOG — Google 全家桶一句话打通，Gmail、Drive、Docs、Calendar 全部联动 🔵 Tavily Search — 突破知识截止，实时搜索结果直接结构化给 AI 用 
	🟣 Summarize — URL、PDF、会议录音，30 秒出摘要
	⚪ GitHub — Issue、PR、CI 状态，不开浏览器全搞定 
	🟠 Notion — 对话直接写入知识库，信息不再手动整理 
	🩵 Agent Browser — 自动打开网页、点击、填表、批量抓数据 
	6 个安装命令我放在评论区置顶了，复制粘贴就能用，装上之前和装上之后，真的是两个工具。 
	#openclaw #openclaw部署 #aiAgent #ai员工 #skills](https://p3-pc-sign.douyinpic.com/image-cut-tos/3da24b545ab9fad13eced138742aa6d4~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=KZ333EOfomlUsU8RN6YiM5giU%2Fc%3D)](https://www.douyin.com/video/7616379643226049834)
	[04:23](https://www.douyin.com/video/7616379643226049834)
	[
	播放中
	](https://www.douyin.com/video/7616379643226049834)
	### 装了 OpenClaw 感觉没啥用？因为你少了这6个技能！ 装了 OpenClaw 之后发现，它好像什么都做不了？别卸载。问题不在工具，在你还没给它装技能。OpenClaw 本身就是个空壳——就像一台刚出厂的手机，系统装好了，但一个 App 都没有。真正让它变成「私人 AI 助理」的，是 ClawHub 里的Skill。这期我从下载量最高的 Skill 里挑出了 6 个，每一个装上去都是立竿见影的那种： GOG — Google 全家桶一句话打通，Gmail、Drive、Docs、Calendar 全部联动 Tavily Search — 突破知识截止，实时搜索结果直接结构化给 AI 用 Summarize — URL、PDF、会议录音，30 秒出摘要 GitHub — Issue、PR、CI 状态，不开浏览器全搞定 Notion — 对话直接写入知识库，信息不再手动整理 🩵 Agent Browser — 自动打开网页、点击、填表、批量抓数据 6 个安装命令我放在评论区置顶了，复制粘贴就能用，装上之前和装上之后，真的是两个工具。 #openclaw #openclaw部署 #aiAgent #ai员工 #skills
	578 [Geek Leo独立开发者](https://www.douyin.com/user/MS4wLjABAAAA9gFK3svaIbgmVJkZ-6ecpBzORdsiBA_XAEbYIxhWMQp83NpeYhaevtHCjcBoe_R0?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7630763748059303202&log_pb=%7B%22impr_id%22%3A%2220260422085614DC94ADE0853102645D39%22%7D&relation=1)
- [![Claude Code Agent Teams上手指南 用Claude Code干复杂任务总碰到三个问题： 
	上下文越来越长开始遗忘、任务只能串行效率低、单Agent视角单一容易漏检。 
	Claude官方发布的Agent Teams功能正好解决这些痛点 
	一个Team Lead拆任务，多个Teammate并行执行，还能互相通信协调。 
	本期视频从核心概念、使用场景、底层架构到真实项目实战，带你完整搞懂Agent Teams的正确打开方式。 
	#claudecode #agentteam #AI编程 #ai新星计划 #抖音年味新知贺岁](https://p3-pc-sign.douyinpic.com/image-cut-tos/b046bf3fb62542001df41f764664e8f9~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=%2BNRN7PiEepHf8u6bUdQztd26luc%3D)](https://www.douyin.com/video/7604606097898409279)
	[10:06](https://www.douyin.com/video/7604606097898409279)
	[
	播放中
	](https://www.douyin.com/video/7604606097898409279)
	### Claude Code Agent Teams上手指南 用Claude Code干复杂任务总碰到三个问题： 上下文越来越长开始遗忘、任务只能串行效率低、单Agent视角单一容易漏检。 Claude官方发布的Agent Teams功能正好解决这些痛点 一个Team Lead拆任务，多个Teammate并行执行，还能互相通信协调。 本期视频从核心概念、使用场景、底层架构到真实项目实战，带你完整搞懂Agent Teams的正确打开方式。 #claudecode #agentteam #AI编程 #ai新星计划 #抖音年味新知贺岁
	3183 [程序员阿江-Relakkes](https://www.douyin.com/user/MS4wLjABAAAATJPY7LAlaa5X-c8uNdWkvz0jUGgpw4eeXIwu_8BhvqE?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7630763748059303202&log_pb=%7B%22impr_id%22%3A%2220260422085614DC94ADE0853102645D39%22%7D&relation=1)

全部评论

留下你的精彩评论吧

大家都在搜： [带来](https://www.douyin.com/search/trae?aweme_id=7630763748059303202&enter_from=article_detail&gid=7630763748059303202&source=comment_related_search)

[Xiao](https://www.douyin.com/user/MS4wLjABAAAADxT-ezS6pqX9Ffrd3mCqDknBloviSqj4md2f7sEz6kzNE7uvDRN2n2a9M5nQMwAN)

...

今天排队4000多

11小时前·广西

1

分享

回复

[灭世忧郁暴龙神](https://www.douyin.com/user/MS4wLjABAAAA_q_PBkRtfVqAErjT3zCH3kjORJYO0Yce2O172AEUqRw)

...

偷偷上了kimik2.6还不发作品

1天前·广东

3

分享

回复

[落空](https://www.douyin.com/user/MS4wLjABAAAAK27l1GxDRhF8e01rkHTLgvgwwPXcX_LYvcE7t5xCDTU)

...

都没更新竟然上线了kimi2.6，真香

19小时前·湖南

1

分享

回复

[我爸爸](https://www.douyin.com/user/MS4wLjABAAAApbSlB0IbMuoVHOF5Fx17CWBBqoRpclOgAEzptFfeBPM)

...

你们啥时候支持自我进化

18小时前·广东

0

分享

回复

[假装糊涂](https://www.douyin.com/user/MS4wLjABAAAApIl0osnZSlJTHNwqChHepDZDYgYzmVF6mswrhUPRgCU)

...

我买了一年的会员为什么给我我降成了普通会员

1天前·河南

0

分享

回复

[阿浩](https://www.douyin.com/user/MS4wLjABAAAA9MfLIhEAAorqg4Zpr3w5xzbJrKfaZwFjeraCf6_t6ok)

...

排队时间有点长

1天前·北京

3

分享

回复

[陈贻春](https://www.douyin.com/user/MS4wLjABAAAALYmscGiLYil5vfyqXsnBhInLpdoDj8W_D5vpiK3lQ-U)

...

天天排队啊啊啊啊。受不了啊啊啊啊啊啊。

1天前·山东

0

分享

回复

[hzpanda](https://www.douyin.com/user/MS4wLjABAAAA23l61sYvNcKN_yNJ0QvguGmT1swOs-NKMa9wD_Mu0jg)

...

trae干一天不如opencode的大泡菜跑2小时

1天前·浙江

0

分享

回复

[Piu](https://www.douyin.com/user/MS4wLjABAAAAlDWlw_DofBZUdSA05oksVUH76mDfLl0xoZ1P90rMJ1s)

...

我只能说代码折叠问题和光标乱跑真的很恶心

1天前·上海

1

分享

回复

[The.SunRise](https://www.douyin.com/user/MS4wLjABAAAAkJFAQD3E_4QNDJxgrXQaxaCK_cdU7IATuphBiQtqmRo)

...

放弃solo,纯贵

1天前·广东

1

分享

回复

[Piu](https://www.douyin.com/user/MS4wLjABAAAAlDWlw_DofBZUdSA05oksVUH76mDfLl0xoZ1P90rMJ1s)

...

我只能说代码折叠问题和光标乱跑真的很恶心

1天前·上海

0

分享

回复

[凌夏·Dawn](https://www.douyin.com/user/MS4wLjABAAAAR2Yqo2uu0Q0hRr6ik60d3UPne3DZ3YeNeBCdU3tpFf8)

...

对话压缩一次直接变智障了

1天前·内蒙古

0

分享

回复

[張張張](https://www.douyin.com/user/MS4wLjABAAAA0mdZUlOtiGEHHQbi0ImCXI60x4GaFINiObnvUHkhc7Q)

...

就想要邀请码

23小时前·浙江

0

分享

回复

[GMP&GSP检测与验证](https://www.douyin.com/user/MS4wLjABAAAAXoDp4Zt1iPI62KPZWvWUwP3iHakkkS74ZT2xDv-JruSEO7qtYnBLo3lyeP6xtiZB)

...

桌面应用程序可以用吗？

12小时前·湖北

0

分享

回复

[starakie](https://www.douyin.com/user/MS4wLjABAAAATxFVGjcJxlW2iZpwZf0qeNhzuNKHcEjULVY7nU8Zt2w)

...

订阅套餐考虑重做一下吗

1天前·福建

0

分享

回复

[念煜](https://www.douyin.com/user/MS4wLjABAAAAR1xa5hMJp5CuEe0hMMv4S_GKsggsVf0yoBwQ1znL8ws)

...

为什么这些技能我没搜到

18小时前·云南

0

分享

回复

[李](https://www.douyin.com/user/MS4wLjABAAAAhNH_vP81-pQCLqzpoTnFUJ3jVAbLCidJukacOUIiTyc)

...

只有13个skills啊。

17小时前·贵州

0

分享

回复

[巴鲁巴鲁](https://www.douyin.com/user/MS4wLjABAAAAozoSWN8cflmRBIYen-EHfTmQcioAdxsimgo4z875dPY)

...

排队也就算了，一个文档格式识别改一个月改不过来

1天前·广东

0

分享

回复

[fff](https://www.douyin.com/user/MS4wLjABAAAAQ4lFP3CklQNk8KU9HhROw9TZv5cuRkhFdJ0_v0v0sMk)

...

为啥我抢到了资格不能下载

1天前·广西

0

分享

回复

[GG](https://www.douyin.com/user/MS4wLjABAAAA7CapaSW0U5TcZ9Kxr5mjOP4T6xmrWPxPfeJjCly9BDyUlnSaPHuuLXYqF_7DtrHz)

...

有进行代码迁移的skill 嘛

1天前·北京

0

分享

回复

[LiuKeX](https://www.douyin.com/user/MS4wLjABAAAAPQsfWEq_n9oiOW8qCA3Vh9ds-vJXth99sWiNWwWT2j0)

...

码住

1天前·湖南

0

分享

回复

[南竼](https://www.douyin.com/user/MS4wLjABAAAA6B41to_SzmAvK9V9taTFlOj24EdFjt7_KdwAkVQ4AgEPSjh3FrN-QoJeMzXeMpWH)

...

Windows 快点

21小时前·江苏

0

分享

回复

[路人蟹](https://www.douyin.com/user/MS4wLjABAAAAIFAlsG86XThcfFH2Coybf89ZckAsKJQkSZmvgMwgzw7MNYjVgS6SNy9cfKtZONZ_)

...

求资格码

1天前·湖南

0

分享

回复

[不夜候](https://www.douyin.com/user/MS4wLjABAAAA5ddLBnRWFtXk_qQNOsWTWzVhcMSXb19xkrW28nl-yK4MSmxWl-svl-pNwz9lN5fd)

...

solo网页版咋上传项目给他修改啊

20小时前·广东

0

分享

回复

[vveygo](https://www.douyin.com/user/MS4wLjABAAAAZWJP9zbBNcLXOT0qEqZsCMaZTlowWYPKjMFHdWeyCg8iGj7dGvNG1hZsltl8OjL_)

...

下期呢

23小时前·北京

0

分享

回复

加载中

[

认证徽章

TRAE官方账号](https://www.douyin.com/user/MS4wLjABAAAAwW6KAzmOu3OenU1kgddAiakDE7gXkQs898NLtAaFdYnfUg0VWfq0KJbslaM_pj8E)

粉丝12.2万获赞20.4万

## 推荐视频

- [![5个Claude Code高性价比技巧💻让你编程效率翻倍！ 嗨！大家～
	这是一期 Claude Code 使用技巧分享，都是极易上手又很有效的技能，欢迎查收！ 
	#ClaudeCode #AI #青年创作者成长计划 #AI新星计划 #AI编程 #学术新星计划](https://p9-pc-sign.douyinpic.com/image-cut-tos/ad4557ff20a2dfd6e504933882a2c7b3~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=0XOapJ6NLLK3ee6Kgm8y9upc55c%3D)](https://www.douyin.com/video/7620428002853145891)
	[05:36](https://www.douyin.com/video/7620428002853145891)
	[
	播放中
	](https://www.douyin.com/video/7620428002853145891)
	### 5个Claude Code高性价比技巧让你编程效率翻倍！ 嗨！大家～这是一期 Claude Code 使用技巧分享，都是极易上手又很有效的技能，欢迎查收！ #ClaudeCode #AI #青年创作者成长计划 #AI新星计划 #AI编程 #学术新星计划
	1.3万 [赫赫儿\_](https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7630763748059303202&log_pb=%7B%22impr_id%22%3A%2220260422085614DC94ADE0853102645D39%22%7D&relation=1)
- [![装了 OpenClaw 感觉没啥用？因为你少了这6个技能！ 装了 OpenClaw 之后发现，它好像什么都做不了？别卸载。问题不在工具，在你还没给它装技能。OpenClaw 本身就是个空壳——就像一台刚出厂的手机，系统装好了，但一个 App 都没有。真正让它变成「私人 AI 助理」的，是 ClawHub 里的Skill。这期我从下载量最高的 Skill 里挑出了 6 个，每一个装上去都是立竿见影的那种：
	🟢 GOG — Google 全家桶一句话打通，Gmail、Drive、Docs、Calendar 全部联动 🔵 Tavily Search — 突破知识截止，实时搜索结果直接结构化给 AI 用 
	🟣 Summarize — URL、PDF、会议录音，30 秒出摘要
	⚪ GitHub — Issue、PR、CI 状态，不开浏览器全搞定 
	🟠 Notion — 对话直接写入知识库，信息不再手动整理 
	🩵 Agent Browser — 自动打开网页、点击、填表、批量抓数据 
	6 个安装命令我放在评论区置顶了，复制粘贴就能用，装上之前和装上之后，真的是两个工具。 
	#openclaw #openclaw部署 #aiAgent #ai员工 #skills](https://p3-pc-sign.douyinpic.com/image-cut-tos/3da24b545ab9fad13eced138742aa6d4~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=KZ333EOfomlUsU8RN6YiM5giU%2Fc%3D)](https://www.douyin.com/video/7616379643226049834)
	[04:23](https://www.douyin.com/video/7616379643226049834)
	[
	播放中
	](https://www.douyin.com/video/7616379643226049834)
	### 装了 OpenClaw 感觉没啥用？因为你少了这6个技能！ 装了 OpenClaw 之后发现，它好像什么都做不了？别卸载。问题不在工具，在你还没给它装技能。OpenClaw 本身就是个空壳——就像一台刚出厂的手机，系统装好了，但一个 App 都没有。真正让它变成「私人 AI 助理」的，是 ClawHub 里的Skill。这期我从下载量最高的 Skill 里挑出了 6 个，每一个装上去都是立竿见影的那种： GOG — Google 全家桶一句话打通，Gmail、Drive、Docs、Calendar 全部联动 Tavily Search — 突破知识截止，实时搜索结果直接结构化给 AI 用 Summarize — URL、PDF、会议录音，30 秒出摘要 GitHub — Issue、PR、CI 状态，不开浏览器全搞定 Notion — 对话直接写入知识库，信息不再手动整理 🩵 Agent Browser — 自动打开网页、点击、填表、批量抓数据 6 个安装命令我放在评论区置顶了，复制粘贴就能用，装上之前和装上之后，真的是两个工具。 #openclaw #openclaw部署 #aiAgent #ai员工 #skills
	578 [Geek Leo独立开发者](https://www.douyin.com/user/MS4wLjABAAAA9gFK3svaIbgmVJkZ-6ecpBzORdsiBA_XAEbYIxhWMQp83NpeYhaevtHCjcBoe_R0?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7630763748059303202&log_pb=%7B%22impr_id%22%3A%2220260422085614DC94ADE0853102645D39%22%7D&relation=1)
- [![Claude Code Agent Teams上手指南 用Claude Code干复杂任务总碰到三个问题： 
	上下文越来越长开始遗忘、任务只能串行效率低、单Agent视角单一容易漏检。 
	Claude官方发布的Agent Teams功能正好解决这些痛点 
	一个Team Lead拆任务，多个Teammate并行执行，还能互相通信协调。 
	本期视频从核心概念、使用场景、底层架构到真实项目实战，带你完整搞懂Agent Teams的正确打开方式。 
	#claudecode #agentteam #AI编程 #ai新星计划 #抖音年味新知贺岁](https://p3-pc-sign.douyinpic.com/image-cut-tos/b046bf3fb62542001df41f764664e8f9~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=%2BNRN7PiEepHf8u6bUdQztd26luc%3D)](https://www.douyin.com/video/7604606097898409279)
	[10:06](https://www.douyin.com/video/7604606097898409279)
	[
	播放中
	](https://www.douyin.com/video/7604606097898409279)
	### Claude Code Agent Teams上手指南 用Claude Code干复杂任务总碰到三个问题： 上下文越来越长开始遗忘、任务只能串行效率低、单Agent视角单一容易漏检。 Claude官方发布的Agent Teams功能正好解决这些痛点 一个Team Lead拆任务，多个Teammate并行执行，还能互相通信协调。 本期视频从核心概念、使用场景、底层架构到真实项目实战，带你完整搞懂Agent Teams的正确打开方式。 #claudecode #agentteam #AI编程 #ai新星计划 #抖音年味新知贺岁
	3183 [程序员阿江-Relakkes](https://www.douyin.com/user/MS4wLjABAAAATJPY7LAlaa5X-c8uNdWkvz0jUGgpw4eeXIwu_8BhvqE?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7630763748059303202&log_pb=%7B%22impr_id%22%3A%2220260422085614DC94ADE0853102645D39%22%7D&relation=1)

拖拽到此处完成下载

图片将完成下载

AIX智能下载器