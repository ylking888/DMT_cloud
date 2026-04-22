---
title: "SOLO 必装的14个 Skills，看这一篇就够了 （下） #TRAE #最佳实践"
source: "https://www.douyin.com/article/7631049335999941928"
author:
  - "Trae官方"
published:
created: 2026-04-22
description: "SOLO 必装的14个 Skills，看这一篇就够了 （下） #TRAE #最佳实践 - TRAE.ai于20260421发布在抖音，已经收获了20.4万个喜欢，来抖音，记录美好生活！"
tags:
  - "clippings"
---
本文档精选了 TRAE SOLO 技能市场中的一系列核心技能。在上篇文章中，我们完成了开发工具与效率提升类核心技能的学习，本文将聚焦界面设计、数据分析与内容创作三大实用领域，并通过实践案例，展示了它们在不同场景中的具体应用。

## 一、界面设计

## figma
### 简介
figma 是一个基于 Figma MCP Server 的设计到代码转换工具。其标准流程包括：通过设计链接获取节点结构（get\_design\_context）与参考截图（get\_screenshot），生成初始代码（通常为 React + Tailwind），然后将生成的初始代码重构为符合项目规范的代码。
在实现过程中，该技能会让 AI 优先复用现有设计系统（如 tokens、基础组件、架构模式），并通过原生接口直接集成所需的图像与 SVG 资源，最终通过截图对比来完成视觉与行为校验。
### 应用场景
- **将 Figma 设计稿实现为代码**
	通过该技能，AI 可以把 Figma 中的某个页面、组件或模块实现为精确的前端代码。适用于对视觉一致性要求极高的场景，比如产品官网、落地页、营销页等。
- **用现有组件实现 Figma 设计**
	当设计稿与现有项目的设计系统存在差异时，可以用这个技能做转换。在尽量还原 Figma 视觉效果的前提下，AI 会优先复用项目中已有的组件和样式规范（如 color、typography、spacing 等），避免重复实现或引入不一致的写法。
- **按节点实现或修改代码**
	当你只需要实现或修改 Figma 中的某个具体部分（比如按钮、卡片或一个模块）时，可以直接针对这个节点来开发。通过 Figma 链接定位到对应的节点，并获取相关的设计上下文，只改需要改的部分，适合做局部调整或增量迭代。
>[!hongse] **提示**
> 在使用 “figma” 技能前，你需要从 TRAE SOLO 的 MCP 市场添加 “Figma AI Bridge” 这一 MCP Server，详细步骤参考此文档：https://docs.trae.cn/solo/remote-mcp-server#5f985f98
### 使用案例
Figma 设计稿：
![图片描述](https://p5-ex-gddgtc-sign.douyinpic.com/tos-cn-i-jm8ajry58r/9ab9181c646f4b70b4fac3a29a7c0611~tplv-dy-long-article:0:0.jpeg?lk3s=138a59ce&x-expires=1778025600&x-signature=RaiXUcFQs6bOW%2F0RhHTDj%2FwdDVY%3D&from=327834062)
AI 调用 “Figma AI Bridge” MCP Server 和 “figma” 技能后，其初次生成的代码已具备极高的视觉还原度。
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090341154.png)
## frontend-design
### 作者Anthropics
### 简介
frontend-design 用于生成具备独特风格和高质量的前端界面，满足生产级 UI 标准。它的核心目标是避免生成同质化的“AI 风格” 界面，而是通过选择大胆、明确的美学主题（例如：极简、复古、未来感、野兽派等），并注重排版、色彩、动效、空间布局等细节，来打造具有辨识度和艺术感的前端界面。
### 应用场景
- **构建网页组件或页面**
	在从零开始创建一个具体的 UI 时（如一个 React 组件、一个 HTML/CSS 布局，或一个独立的静态页面），该技能会确保这个 UI 不仅功能完善，而且在视觉上具有辨识度。
- **开发完整的 Web 应用或网站**
	在构建落地页、仪表盘或小型网站等产品时，该技能会让 AI 从整体出发，确立一个统一且鲜明的设计风格，并将其全局应用到产物中。
- **美化或重塑现有界面**
	针对已有但设计质量较低的界面，可以使用该技能来提升界面的整体视觉质量，包括优化字体、配色、动效、布局等。

在以下案例中，我让 SOLO 开发一款 MBTI 心理测试小游戏，可明显观察到使用 “frontend-design” 技能前后的视觉差异：

- **使用技能前：** UI 界面充满了典型的 AI 审美——高饱和度的霓虹渐变色、通用的 “闪亮星星” 图标以及粗壮的无衬线字体。整体视觉显得较为套路化，缺乏心理测试产品应有的神秘、探索感。
- **使用技能后：** UI 质量显著提升。在不失细节和保持体验完整性的前提下，整体设计更简约、独特。克制的暗色调与优雅的衬线排版赋予了 UI 界面一种深邃、神秘的质感。
使用 “frontend-design” 技能前：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090434142.png)
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090441005.png)
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090448725.png)
使用 “frontend-design” 技能后：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090456455.png)
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090504555.png)
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090510722.png)
## frontend-skill
### 作者OpenAI
### 简介
frontend-skill 适用于打造视觉冲击力强的落地页、网站、应用、原型、Demo 或游戏界面。它强调克制的构图、图像主导的层级、统一的内容结构和精致动效。

该技能要求在编写代码前建立明确的视觉基调、内容规划、交互理念。当界面质量更依赖于艺术指导和视觉张力，而非功能堆砌时，该技能可以帮助你交付具有明确设计意图、符合现代审美的作品。其实现方式通常是聚焦于一个核心创意，并通过突出的视觉元素、简洁的文案、严格的间距和令人印象深刻的动效来呈现。
### 应用场景
- **构建高质量的落地页与官网**
	该技能可用来构建需要建立强烈视觉焦点的页面。它在设计上强调首屏全画幅视觉、大面积留白与高对比度的文字排版，通过精简的内容结构清晰传达产品信息，避免使用堆叠式卡片与过多装饰元素。
- **开发现代化的 Web 应用**
	该技能可用来开发强调效率和信息密度的软件界面，它会采用克制的层级关系和极简风格（类似 Linear 的设计语言），采用合适的字体排印和间距来组织内容，仅保留必要的边框和强调色，去除多余的阴影与渐变背景，且仅在真正代表交互的模块上使用卡片，以确保界面的整洁与易读性。
- **开发高质量的原型与 Demo**
	该技能可用来制作对视觉质量、叙事性和动态效果有较高要求的演示项目。设计上强调图像的叙事作用，要求使用具有临场感的高质量真实摄影图，避免使用抽象的 3D 渲染或带 UI 边框的网图。同时严格限制动效的数量，仅保留 2-3 个能改变页面氛围的核心动效，确保整体的交互克制但令人印象深刻。

在以下案例中，我让 SOLO 开发一个 AI 协作平台的首页，主题为 “Work with AI”，可明显观察到使用 “frontend-skill” 技能前后的视觉差异：

- **使用技能前：** 界面呈现了典型、模版化的 AI 风格，包括居中排版，高饱和度的双色渐变与夸张的环境光晕。整体视觉虽然炫酷，但带有浓重的 “AI 味”，缺乏品牌个性。
- **使用技能后：** UI 设计成功跳出了常规的 AI 审美框架，整体采用左对齐结构，页面排版更具特色。同时，单色高亮、直角按钮以及收敛的光影处理，让整体视觉更具克制、深邃的质感。

使用 “frontend-skill” 技能前：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090534685.png)
使用 “frontend-skill” 技能后：![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090543205.png)
哪个前端设计 skill 更适合我？

## 二、数据分析
## chart-visualization
### 作者ByteDance
### 简介
chart-visualization 技能可以帮你快速将数据可视化。它会根据数据特征，从 26 种图表类型中自动选择最合适的一种，并提取生成图表所需的参数。随后，它会通过 Node.js 脚本生成高质量的图表图片，并返回图片 URL 及完整参数信息。

### 应用场景

- **多维数据对比**
	通过该技能，AI 可将时间序列与分类数据转换为折线图、柱状图或双轴图，帮助你观察核心指标随时间的变化趋势及周期性波动，并在同一视图中对比不同类别的数据的差异。例如，你可以用该技能来同时展示多项产品的销量变化与利润数据，用于评估业务的整体表现。
- **复杂层级与拓扑网络梳理**
	针对具有层级关系或流向关联的非线性数据，AI 可以通过该技能生成相应的组织架构图、网络关系图或桑基图。通过解析节点与连接关系，呈现层级结构、流转路径及关键转化情况，适用于梳理系统结构、分析资源流向或分析用户行为路径等场景。
- **地理性数据可视化**
	当数据包含地理信息或需要对数据统计分析时，AI 可以通过该技能生成区域地图、轨迹图，以及箱线图、直方图。它既可展示数据在空间上的分布情况，也可展示数据的分布特征，如数据的集中趋势、中位数及异常值，特别适用于区域市场监控和底层数据特征排查。
### 使用案例一：
- 提示词：
```
1 帮我生成一张双轴图，用来展示“2025年各季度线上与线下营收及核心指标趋势对比”。
2 X 轴的含义为“季度”，包含四个季度：Q1（春季）、Q2（大促季）、Q3（淡季）、Q4（年末旺季）。
3 Y 轴的含义为“营收规模”。
4 这张图需要包含以下两个数据系列：
5 第一个系列是“线上营收（百万元）”，数据依次为：320、580、410、750。
6 第二个系列是“线下营收（百万元）”，数据依次为：450、480、430、620。
7 两个系列的数据都使用柱状图展示。此外，需要应用 academy 主题，并且自定义两个系列的颜色面板依次为：#5B8FF9（蓝色）、#5AD8A6（绿色）。
```
- AI 使用 “chart-visualization” 技能后生成的图表
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090659856.png)
### 使用案例二：
- 提示词：
```
1 帮我生成一张网络关系图，用于梳理“电商交易核心微服务架构拓扑”。
2 首先，系统包含以下10个核心节点：
3 API网关、用户服务、商品服务、订单服务、支付服务、促销服务、消息队列（MQ）、库存服务、关系型数据库（DB）、缓存集群（Redis）。
4 它们之间的调用和依赖流向关联如下：
5 - API网关 -> 用户服务（说明：身份鉴权）
6 - API网关 -> 商品服务（说明：浏览商品）
7 - API网关 -> 订单服务（说明：创建订单）
8 - 用户服务 -> 缓存集群(Redis)（说明：读取热点商品）
9 - 商品服务 -> 缓存集群(Redis)（说明：读取热点商品）
10 - 商品服务 -> 关系型数据库(DB)（说明：商品主数据）
11 - 订单服务 -> 用户服务（说明：验证用户状态）
12 - 订单服务 -> 商品服务（说明：获取商品快照）
13 - 订单服务 -> 促销服务（说明：计算优惠）
14 - 订单服务 -> 库存服务（说明：扣减库存）
15 - 订单服务 -> 关系型数据库(DB)（说明：订单落库）
16 - 订单服务 -> 支付服务（说明：发起支付）
17 - 支付服务 -> 消息队列(MQ)（说明：支付成功事件）
18 - 消息队列(MQ) -> 订单服务（说明：更新订单状态）
19 - 消息队列(MQ) -> 库存服务（说明：释放超时库存）
20 图表宽度设为 900，高度设为 600，使用 academy 主题。
```
- AI 使用 “chart-visualization” 技能后生成的拓扑图：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090749898.png)
## data-analysis
### 作者ByteDance
### 简介
data-analysis 技能基于 DuckDB（嵌入式分析型 SQL 引擎），用于处理用户的 Excel（.xlsx/.xls）和 CSV 文件，并对结构化数据进行分析与探索。整体流程包括：理解用户需求、检查文件结构以及执行数据分析。

该技能通过统一的 Python 脚本完成数据结构检查、基于 SQL 的查询和统计摘要生成，支持多工作表 Excel 文件处理，以及聚合、筛选、表关联（join）等操作，并可将结果导出为 CSV、JSON 或 Markdown 文件。
### 应用场景
- **数据结构理解与初步探索**
	在获取新的 Excel/CSV 文件后，快速查看表结构、字段类型、数据规模及样例数据，用于建立对数据内容的基本认知。
- **SQL 查询与数据筛选**
	基于明确条件对数据进行查询、过滤和排序，从原始数据中提取所需结果，适用于定向的数据检索与问题验证。
- **聚合统计与指标分析**
	通过分组与聚合计算（如 SUM、AVG、COUNT），生成关键指标或对比不同维度的数据的表现，是最常见的分析场景。
- **多表关联与综合分析**
	若一个 Excel 文件包含多个工作表或需要同时分析多个文件，该技能会通过 join 来关联数据，然后对跨源数据进行整体分析，例如对订单、用户与商品数据的整合与分析。
### 使用案例
待分析的 Excel 文件（sales\_data\_2025.xlsx）中的数据：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090834686.png)
AI 调用 “data-analysis” 技能后的分析结果，经人工核算，AI 提供的数据完全准确。
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090841957.png)
## 三、内容创作
## canvas-design
### 作者Anthropics
### 简介
canvas-design 技能用于生成静态视觉设计作品（如海报、艺术页、封面），并可将作品输出为.md、.pdf 和.png 文件。它的执行流程分为两个步骤：

1. **生成设计哲学：** 首先，该技能会生成一份设计哲学文档（.md），以确立创作的核心理念。
2. **完成画布作品：** 然后，基于这份设计哲学，完成最终的视觉设计。
该技能强调通过构图、色彩、图形、留白和少量文字进行艺术表达，并要求所有输出均为原创，严禁模仿或复制现有作品。
### 应用场景
- **海报设计**
	该技能可用来制作线下活动、艺术展览或主题分享会的宣传海报。你只需提供活动主题，该技能会自动帮你完成排版：它会以图形、色块和几何分割为主来构成画面，并仅在画面特定位置保留标题、时间等少量核心文本。
- **封面设计**
	该技能可用来为行业报告、白皮书、电子书或音乐专辑等制作封面。它会将你提供的主题转化为视觉元素，例如网格、纹理等抽象图形，然后最终会生成一张带主标题的静态图像，可直接作为长篇文档或出版物的封面。
- **系列视觉图集**
	该技能可用来制作一组风格一致、但内容不同的图像。例如：一套四张的节气明信片、同一场活动的三天倒计时海报，或类似实体画册的连贯配图。该技能会先固定一套色彩和图形规则，再在此基础上连续生成多张构图各异的图片，确保整组物料在视觉风格上属于同一系列。
### 使用案例一：
- 提示词：
```
帮我生成一张海报，用于展示早春的美好景色，就像诗句“草长莺飞二月天，拂堤杨柳醉春烟”中描写的一样唯美。
```
- AI 使用 “canvas-design” 技能后的输出：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422090959346.png)
- AI 生成的海报：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422091007425.png)
### 使用案例二：
- 提示词：
```
1 帮我生成一组四季（春、夏、秋、冬）系列的明信片，整体风格需要偏中式、诗意。
```
- AI 使用 “canvas-design” 技能后的输出：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422091038967.png)
- AI 生成的明信片：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422091046404.png)
## byted-seedream-image-generate
### 作者ByteDance
### 简介
byted-seedream-image-generate 是一个基于火山引擎 Seedream（豆包·星绘）大模型开发的高效图像生成 skill。它能够通过文本提示词直接生成高质量、多风格的图像。支持文生图（Text-to-Image）、图生图（Image-to-Image）、批量生成、自定义图片尺寸以及水印控制。
该技能提供三个不同的模型版本以应对不同需求：
- 4.0：适合日常使用，快速生成所需图像，响应迅速且稳定。
- 4.5：细节表现更优，适合处理复杂的图像。
- 5.0：提供最高的图像质量，且支持联网搜索工具及自定义输出格式。
### 应用场景
- **根据文本生成图像（文生图）**
	当你只提供文字描述，希望通过自然语言提示词直接生成符合语意的高质量图片时，可以使用该技能。
- **创作多种风格的艺术作品**
	当你需要生成特定艺术风格的美术作品时，例如动漫、写实、3D、水彩、插画等丰富多样的视觉风格，可以使用该技能。
- **制作创意项目的视觉物料**
	当你需要为创意项目、营销策划、海报设计或产品方案设计制作引人注目的配图与视觉素材时，可以使用该技能。
- **集成 AI 生成图像能力**
	当你的工作流或开发任务中，需要通过 “AI 生成图像” 的能力来提升效率时，可以使用该技能。
- **转换参考图的风格（图生图）**
	当你已经有一张参考图片，希望在此基础上将其转换成不同艺术风格的图片，或者保留原图结构进行二次创作时，可以使用该技能。
- **批量产出图片**
	当你需要在单次请求中一次性批量生成多张图片，可以使用该技能。
- **产出专业级高质量图片**
	当你对图像的细节、光影、构图有极高要求，需要专业的、可直接用于展示或生产环境的图片时，可以使用该技能。
>[!zise] **提示**
> 
> 在使用 byted-seedream-image-generate 技能前，你需要在火山引擎官网上进入 “火山方舟” 的控制台，然后在 “API Key 管理” 部分生成你的 API 密钥，在 “模型广场” 中开通 Doubao-Seedream 模型。
> 
> 在给 AI 下达指令时，你需要告诉它你的 API Key 和需要调用的模型。

### 使用案例
- 提示词：
```
1 根据以下文字生成一张图片：一座赛博朋克风格的未来城市夜景，密集的高层建筑与巨型霓虹广告牌交错分布，屏幕上滚动着数字与全息影像。街道与空中充满蓝紫与粉色霓虹灯光，强烈对比与高饱和色彩营造出压迫而繁华的氛围。飞行汽车在城市高空穿梭，多层立体交通系统与狭窄街巷交织。建筑表面带有雨水与反光效果，地面湿润，倒映出霓虹灯与广告光影。空气中弥漫轻微雾气与光晕，增强空间纵深与氛围感。整体为电影级光影效果，细节丰富，广角视角，超写实风格，无人物，重点表现城市环境。
2 
3 调用 Doubao-Seedream-5.0-lite 模型
4 
5 我的 api key 是 02892fdb-xxxx-xxxx-ae7f-2bc01511640f
```
- AI 使用 “byted-seedream-image-generate” 技能后生成的图像：
![](assets/SOLO%20必装的14个%20Skills，看这一篇就够了%20（下）%20TRAE%20最佳实践/file-20260422091158260.png)
## doc-coauthoring
### 作者Anthropics

### 简介

doc-coauthoring 是一款引导你编写结构化文档的技能。当您提出写作需求时（例如，“帮我写一个文档”、“写一个 PRD“），它会通过一个协作流程，将你的零散想法转化为逻辑清晰、内容完整的文档。

其工作流包含三个阶段：

1. **收集上下文：** 用户提供所有相关背景信息，AI 通过提问来补充和澄清必要信息。
2. **分块起草与细化：** 通过头脑风暴与编辑，逐步完善各个部分内容
3. **读者视角测试：** 在定稿前，模拟一位不了解背景的读者来审阅文稿，以发现潜在盲点。

这一机制旨在消除 AI 与你之间的信息壁垒，帮助你产出高质量、易于理解的文档。

### 应用场景

- **起草技术规格说明书**
	在从零构建系统设计文档时，引导你逐步细化技术方案，确保技术架构、系统依赖、向后兼容性等关键工程细节被完整且有序地记录。
- **记录工程决策与项目提案**
	帮助你结构化地梳理团队决策过程，清晰呈现问题背景、方案权衡（Trade-offs）、未采纳方案的理由以及最终的决策依据。
- **编写产品需求文档**
	该技能可以辅助你准确界定产品目标与功能边界，从目标受众的视角消除需求描述中的歧义，产出逻辑严密的 PRD。
- **排查文档盲区 & 验证文档可用性**
	在定稿或发布重要文档前，通过模拟“无背景知识读者”的视角进行独立测试，发现并修复仅核心参与者能理解、而外部团队易产生困惑的信息断层与逻辑盲点。

### 使用案例

- 提示词：

- AI 使用 “doc-coauthoring” 技能后，与我的交互过程：
1. 第一阶段：收集上下文

在这个阶段，AI 负责提问和梳理信息，我负责做选择题和提供产品设计方向。通过一系列针对性的问题，AI 了解了我的想法（比如产品叫 Smart Translate、主打自定义 prompt、做成需要账号的 web 应用）

1. 第二阶段：分块起草与细化

在这个阶段，AI 负责搭骨架和提供选项，我负责做决定。 AI 起草了 prd.md 的核心大纲（产品概述、用户权限、核心流程等）。针对复杂的业务逻辑（比如扣费时机、prompt 怎么拼、模型选哪些），AI 没有直接写死，而是列出了不同的方案，让我来做决策。这保证了 PRD 是真正按照我的意志来编写的。

1. 第三阶段：读者视角测试

在这个阶段，AI 负责寻找 PRD 中的潜在问题，我负责填补漏洞。 AI 把自己想象成一个刚拿到这份 PRD 准备写代码的后端开发，专门找文档里含糊不清的地方（比如：只写了注册没写怎么注册、只写了前端限制没写后端要不要校验、没写发给模型的系统提示词用哪种语言）。在我回答这三个问题之后，AI 完善了这份 PRD，使其更加严密。

暂停

00:37 / 01:04 直播

00:00

进入全屏H

网页全屏Y

- 不开启

倍速

 <video controls=""><source src="https://sf5-hl-ali-cdn-tos.douyinstatic.com/obj/tos-cn-ve-2774/f400926dbd7d4d9d8b32cac5f878b773?__vid=7631049335999941928" type=""> <source src="https://sf6-cdn-tos.douyinstatic.com/obj/tos-cn-ve-2774/f400926dbd7d4d9d8b32cac5f878b773?__vid=7631049335999941928" type=""></video>

点击按住可拖动视频43 2 9

举报

发布时间：2026.04.21

[

认证徽章

TRAE官方账号](https://www.douyin.com/user/MS4wLjABAAAAwW6KAzmOu3OenU1kgddAiakDE7gXkQs898NLtAaFdYnfUg0VWfq0KJbslaM_pj8E)

粉丝12.2万获赞20.4万

## 推荐视频

- [![无需复杂环境搭建，教你低成本玩转 Moltbook！ 深度实测国产 AI 中最能打的 MiniMax Agent 2.0 ，教你轻松操作本地文件、完成复杂数据分析任务、玩转 Moltbook 社区！
	#MiniMax    #Agent  #智能体  #AI工作流  #AI](https://p3-pc-sign.douyinpic.com/image-cut-tos/ed8481f952ee041fea25a229a4a09d42~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=cV%2FPu1xOvtPoTNbLgpVMYNmVvZ0%3D)](https://www.douyin.com/video/7604779632721661194)
	[11:37](https://www.douyin.com/video/7604779632721661194)
	[
	播放中
	](https://www.douyin.com/video/7604779632721661194)
	### 无需复杂环境搭建，教你低成本玩转 Moltbook！ 深度实测国产 AI 中最能打的 MiniMax Agent 2.0 ，教你轻松操作本地文件、完成复杂数据分析任务、玩转 Moltbook 社区！#MiniMax #Agent #智能体 #AI工作流 #AI
	1.4万 [code秘密花园](https://www.douyin.com/user/MS4wLjABAAAAFAdYesIzAsdF1f-rjIEqEMA69l6_CMNA-NrCdQBQoD9E736gbg78-MbOWncvkT02?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![Red/Green TDD提高代码交付质量方法论 #程序员#AI  #claude 
	AI写代码越来越快，但质量谁来保证？Simon Willison（Django创始人）给出了答案——Red/Green TDD。](https://p3-pc-sign.douyinpic.com/image-cut-tos/a8b3c51b7bd710995edab1d92d5e23a3~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=uiInL1tjyyRovsz8FjmSV4Z8oxI%3D)](https://www.douyin.com/video/7611079015830506786)
	[03:52](https://www.douyin.com/video/7611079015830506786)
	[
	播放中
	](https://www.douyin.com/video/7611079015830506786)
	### Red/Green TDD提高代码交付质量方法论 #程序员#AI #claude AI写代码越来越快，但质量谁来保证？Simon Willison（Django创始人）给出了答案——Red/Green TDD。
	1.7万 [大力AI](https://www.douyin.com/user/MS4wLjABAAAAdepbmtUgThsVmoKxyaWUkVtbnW8g48s-OXG0ExL5ew-aQN3mECzWA5B5bkqI2v2x?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![5个Claude Code高性价比技巧💻让你编程效率翻倍！ 嗨！大家～
	这是一期 Claude Code 使用技巧分享，都是极易上手又很有效的技能，欢迎查收！ 
	#ClaudeCode #AI #青年创作者成长计划 #AI新星计划 #AI编程 #学术新星计划](https://p3-pc-sign.douyinpic.com/image-cut-tos/ad4557ff20a2dfd6e504933882a2c7b3~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=wI0gpk8OB2VlNqwv7YMTIa7uvmo%3D)](https://www.douyin.com/video/7620428002853145891)
	[05:36](https://www.douyin.com/video/7620428002853145891)
	[
	播放中
	](https://www.douyin.com/video/7620428002853145891)
	### 5个Claude Code高性价比技巧让你编程效率翻倍！ 嗨！大家～这是一期 Claude Code 使用技巧分享，都是极易上手又很有效的技能，欢迎查收！ #ClaudeCode #AI #青年创作者成长计划 #AI新星计划 #AI编程 #学术新星计划
	1.3万 [赫赫儿\_](https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![如何逼自己7天拿下AI视频创作，存下吧！【2026最新录制】 第12集：如何逼自己7天拿下AI视频创作，存下吧！【2026最新录制】3分钟入门AI视频制作！AI生成视频零基础入门保姆级教程，AI视频制作全流程教学！包含所有干货内容！7天就能从小白到大神！（附AI视频工具）#AI视频  #AI动画  #AI电影  #AIGC  #AI教程](https://p3-pc-sign.douyinpic.com/image-cut-tos/7b674a6a75c3ef026863e939fd87b4f8~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=QbVl7ltpyBwUjSbmgsUiOOI9VOA%3D)](https://www.douyin.com/video/7623772217624513798)
	[07:50](https://www.douyin.com/video/7623772217624513798)
	[
	播放中
	](https://www.douyin.com/video/7623772217624513798)
	### 如何逼自己7天拿下AI视频创作，存下吧！【2026最新录制】 第12集：如何逼自己7天拿下AI视频创作，存下吧！【2026最新录制】3分钟入门AI视频制作！AI生成视频零基础入门保姆级教程，AI视频制作全流程教学！包含所有干货内容！7天就能从小白到大神！（附AI视频工具）#AI视频 #AI动画 #AI电影 #AIGC #AI教程
	873 [罗大众](https://www.douyin.com/user/MS4wLjABAAAAoEKX6DoU7Ox3ojRh2Ikh42aHU8fgHFiQaVXAvvllKUw?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![北朝鲜黑了 1 亿下载代码库 · OpenAI 证书全部轮换 如果你用 Mac 版 ChatGPT 或 Codex，今天可能收到了一封 OpenAI 邮件——5 月 8 日前必须更新。邮件没说的是：北朝鲜黑客污染了全球每周 1 亿下载的代码库，OpenAI 的 Mac 签名证书被迫全部轮换。
	被黑的是 Axios——JavaScript 的"自来水管"。17.4 万 npm 包依赖它，全球 80% 云环境在用。3 月 31 日凌晨，毒版 axios@1.14.1 带 latest 标签发布，任何执行 npm install 的人自动中招。RAT 落到 Mac 上伪装成 com.apple.act.mond 系统进程，每 60 秒连北朝鲜服务器心跳。窗口期 3 小时。
	OpenAI 中招是因为两个配置错误：用了浮动标签 axios@latest + 没配 minimumReleaseAge。签名流水线能访问代码签名证书——证书一旦被偷，黑客能签发假冒的 ChatGPT 装到几亿 Mac 用户电脑里。
	微软归因：Sapphire Sleet（北朝鲜国家级）。Google / Palo Alto：10 个行业 5 大洲受害。CISA 4 月 20 日发了官方公告。
	下一次不会是 Axios——可能是 pip、Cargo、Homebrew。AI 公司已经成了高价值靶子
	三条防御：固定 commit hash · 配 minimumReleaseAge · CI/CD 权限最小化。
	#供应链攻击 #OpenAI  #AI安全  #Axios #npm #小宇玩AI](https://p3-pc-sign.douyinpic.com/image-cut-tos/073e68ead16067e1fc9b8a67e88946cb~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=zp8VTWkNvYfAqsQocmcjwWD%2BROk%3D)](https://www.douyin.com/video/7631063293985131839)
	[04:00](https://www.douyin.com/video/7631063293985131839)
	[
	播放中
	](https://www.douyin.com/video/7631063293985131839)
	### 北朝鲜黑了 1 亿下载代码库 · OpenAI 证书全部轮换 如果你用 Mac 版 ChatGPT 或 Codex，今天可能收到了一封 OpenAI 邮件——5 月 8 日前必须更新。邮件没说的是：北朝鲜黑客污染了全球每周 1 亿下载的代码库，OpenAI 的 Mac 签名证书被迫全部轮换。被黑的是 Axios——JavaScript 的"自来水管"。17.4 万 npm 包依赖它，全球 80% 云环境在用。3 月 31 日凌晨，毒版 axios@1.14.1 带 latest 标签发布，任何执行 npm install 的人自动中招。RAT 落到 Mac 上伪装成 com.apple.act.mond 系统进程，每 60 秒连北朝鲜服务器心跳。窗口期 3 小时。OpenAI 中招是因为两个配置错误：用了浮动标签 axios@latest + 没配 minimumReleaseAge。签名流水线能访问代码签名证书——证书一旦被偷，黑客能签发假冒的 ChatGPT 装到几亿 Mac 用户电脑里。微软归因：Sapphire Sleet（北朝鲜国家级）。Google / Palo Alto：10 个行业 5 大洲受害。CISA 4 月 20 日发了官方公告。下一次不会是 Axios——可能是 pip、Cargo、Homebrew。AI 公司已经成了高价值靶子三条防御：固定 commit hash · 配 minimumReleaseAge · CI/CD 权限最小化。#供应链攻击 #OpenAI #AI安全 #Axios #npm #小宇玩AI
	1256 [小宇玩AI](https://www.douyin.com/user/MS4wLjABAAAAOkwqROLl_a30sQJ9s6QsVPNvvVs6J4moppD-j-UJEuc?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![刷到就是赚到🔥别再死磕提示词了 500+Seedance2.0提示词直接免费抄#ai创作浪潮计划 #seedance2 #AI提示词 #Ai视频制作 #ai工具](https://p3-pc-sign.douyinpic.com/image-cut-tos/69cd5f7152b04cd36adb589dae8958ea~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=CdwUDoBjPig1qu3%2BWTRnthAsSVE%3D)](https://www.douyin.com/video/7613725725380274531)
	[00:30](https://www.douyin.com/video/7613725725380274531)
	[
	播放中
	](https://www.douyin.com/video/7613725725380274531)
	### 刷到就是赚到别再死磕提示词了 500+Seedance2.0提示词直接免费抄#ai创作浪潮计划 #seedance2 #AI提示词 #Ai视频制作 #ai工具
	4659 [柠檬AI（华小二团队）](https://www.douyin.com/user/MS4wLjABAAAAQJF_gROg71gQbFm-XgXL87Z_Bp17Wh5rkSQJHj2UvImN_nhhw9mQw_v1S1tJ0tZe?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![马斯克说4年后人类全部失业，我听完3小时访谈整个人都麻了 #马斯克 #马斯克访谈 #AI #知识](https://p3-pc-sign.douyinpic.com/image-cut-tos/3f2a8788308efd4dc371d48c555bb8a7~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=BMhFni4BGfMqZ%2FHnE9QCn3Q5%2BZs%3D)](https://www.douyin.com/video/7612982429430615348)
	[10:16](https://www.douyin.com/video/7612982429430615348)
	[
	播放中
	](https://www.douyin.com/video/7612982429430615348)
	### 马斯克说4年后人类全部失业，我听完3小时访谈整个人都麻了 #马斯克 #马斯克访谈 #AI #知识
	4.6万 [宇宙的独白](https://www.douyin.com/user/MS4wLjABAAAAFIWBWQXsJHJ1EeZPFnkcp2NXc5v6KM2nkE-T29CJj9o2MoOh3Q858h0i2L4oyFVJ?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![自己写了个AI助手框架 比OpenClaw轻100倍 🚀 OpenClaw太臃肿？2500+文件、50+依赖、600页文档...
	⚡ 所以我自己写了FlashClaw：
	核心只有20个文件
	飞书、定时任务、记忆系统都是插件
	一行命令安装，热加载开发
	WebSocket长连接，不需要公网服务器
	💡 你需要什么就装什么，够用就好！
	🔗 欢迎Star和贡献代码～ 
	#AI助手 #开源项目 #程序员 #flashclaw #飞书机器人](https://p3-pc-sign.douyinpic.com/image-cut-tos/53394220e38ba863c1dc7d7da76f2598~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=X3yHijUqpbS1t9PnGYcNpmUxdHU%3D)](https://www.douyin.com/video/7602987417271848242)
	[00:42](https://www.douyin.com/video/7602987417271848242)
	[
	播放中
	](https://www.douyin.com/video/7602987417271848242)
	### 自己写了个AI助手框架 比OpenClaw轻100倍 OpenClaw太臃肿？2500+文件、50+依赖、600页文档... 所以我自己写了FlashClaw：核心只有20个文件飞书、定时任务、记忆系统都是插件一行命令安装，热加载开发WebSocket长连接，不需要公网服务器 你需要什么就装什么，够用就好！ 欢迎Star和贡献代码～ #AI助手 #开源项目 #程序员 #flashclaw #飞书机器人
	435 [寒冰巨魔](https://www.douyin.com/user/MS4wLjABAAAAEtmXCg0qYW3pw4HVs0pMOVFAnEfo_-Nv7djv4B-m08M?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
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
	578 [Geek Leo独立开发者](https://www.douyin.com/user/MS4wLjABAAAA9gFK3svaIbgmVJkZ-6ecpBzORdsiBA_XAEbYIxhWMQp83NpeYhaevtHCjcBoe_R0?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![最新开源大模型“Happyhorse”碾压 Seedance2.0屠榜全球第一！#AI #AIGC #AI漫剧 #Happyhorse #Seedance2](https://p3-pc-sign.douyinpic.com/image-cut-tos/484d694623d8714810b1520c240331b6~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=MLtaeJH3v13LT%2FW%2FQDXV5dW2ssY%3D)](https://www.douyin.com/video/7627438066172480802)
	[06:06](https://www.douyin.com/video/7627438066172480802)
	[
	播放中
	](https://www.douyin.com/video/7627438066172480802)
	### 最新开源大模型“Happyhorse”碾压 Seedance2.0屠榜全球第一！#AI #AIGC #AI漫剧 #Happyhorse #Seedance2
	2525 [由乃AI视频分享(没回复看主页)](https://www.douyin.com/user/MS4wLjABAAAAAGCkAjY_auGucF37lPRzo_DGkFOycwJ8-FdLwFNDrn4?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![我把D老师从APP里拉出来，在哪儿都能用了 上期视频很多人问怎么用API，这期手把手教你，不需要写代码，不需要是程序员，全网最细手把手API教程，实现AI认知跃迁的一大步~
	#deepseek #DeepSeek#API #AI](https://p3-pc-sign.douyinpic.com/image-cut-tos/ce9db9392b4ceef600ce8304165d33c1~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=VEGKrgI9a18IVZYVpPGCeIPTjRE%3D)](https://www.douyin.com/video/7607373095002852635)
	[08:17](https://www.douyin.com/video/7607373095002852635)
	[
	播放中
	](https://www.douyin.com/video/7607373095002852635)
	### 我把D老师从APP里拉出来，在哪儿都能用了 上期视频很多人问怎么用API，这期手把手教你，不需要写代码，不需要是程序员，全网最细手把手API教程，实现AI认知跃迁的一大步~#deepseek #DeepSeek#API #AI
	1.9万 [人工大黑](https://www.douyin.com/user/MS4wLjABAAAATeYhzyBXKjBFtAce0aPnTBbeedgTYtIUjRa6sDRnreo?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![worktree 才是 agent 生产力开关 很多人以为自己已经在用 agent 开发了，实际上只是把“自己串行写代码”，换成了“看 agent 串行干活”。 
	这期我想讲一个很实用，但很多人没认真用起来的能力：**git worktree**。
	它不是什么新概念，但放到 AI 开发里，真的很像生产力开关。 
	同一个项目里，把任务拆成 A / B / C 三份，分别交给不同 agent 并行推进；
	既能同时干活，又不会互相污染代码。
	前面我会先用 canvas 把这套逻辑讲清楚，后面再做最简单的实战演示：
	开 3 个 worktree，分别开发，最后再合回主分支。#claudecode](https://p9-pc-sign.douyinpic.com/image-cut-tos-priv/d648dcae7676c468e34b1b7eaa35d7db~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=b9VNN1PVpmDQUl0lrnyJtYB80NY%3D)](https://www.douyin.com/video/7628651309188566308)
	[01:15](https://www.douyin.com/video/7628651309188566308)
	[
	播放中
	](https://www.douyin.com/video/7628651309188566308)
	### worktree 才是 agent 生产力开关 很多人以为自己已经在用 agent 开发了，实际上只是把“自己串行写代码”，换成了“看 agent 串行干活”。 这期我想讲一个很实用，但很多人没认真用起来的能力：\*\*git worktree\*\*。它不是什么新概念，但放到 AI 开发里，真的很像生产力开关。 同一个项目里，把任务拆成 A / B / C 三份，分别交给不同 agent 并行推进；既能同时干活，又不会互相污染代码。前面我会先用 canvas 把这套逻辑讲清楚，后面再做最简单的实战演示：开 3 个 worktree，分别开发，最后再合回主分支。#claudecode
	252 [samlai效率研习社](https://www.douyin.com/user/MS4wLjABAAAAzlweFaIvOQJlRgrZluYE2YGcipLHxHVcWzzBM7eS9Fs?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![超越编码 · AI 上手操作电脑｜Codex 大更新实测 这次 OpenAI 把 Codex 大改了一版，尤其是它的「计算机使用 (Computer Use)」功能，在我的 Mac 上实测下来，比之前 Claude 的同类能力聪明太多。 
	本期我用 Codex 做了 4 组实测:让它自己发推、在 Typora 里写文档、用 Keynote 写 5 首关于风的诗并自动配图、再操控我自己做的封面图 APP 批量生成图片。整个过程 Codex 会在后台操作，完全不影响我在前台干别的事。 
	除此之外，这次更新还带来了:
	· 后台计算机使用 (macOS 首发)
	· 原生内置浏览器
	· 多智能体并行 & 长期运行自动化
	· 记忆功能 (Memory) 预览
	· 侧边栏文件预览 (PDF / 幻灯片 / 表格)
	· 摘要面板、SSH 远程 devbox、GitHub 审查评论处理
	· 内置 GPT Image 1.5 图像生成 
	一起来看 Codex 是怎么从「代码助手」升级成「全流程伙伴」的。 
	时间戳 
	00:00 Codex 这次到底更新了啥
	00:12 官方新功能速览
	02:28 实测 
	#Codex  #OpenAI  #ChatGPT  #computeruse   #计算机使用](https://p3-pc-sign.douyinpic.com/image-cut-tos/b9a4e3178a262847aa60520484377ebb~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=wecf6VgseYkSNoCXtHWTPvYAMv0%3D)](https://www.douyin.com/video/7629592303799225651)
	[11:03](https://www.douyin.com/video/7629592303799225651)
	[
	播放中
	](https://www.douyin.com/video/7629592303799225651)
	### 超越编码 · AI 上手操作电脑｜Codex 大更新实测 这次 OpenAI 把 Codex 大改了一版，尤其是它的「计算机使用 (Computer Use)」功能，在我的 Mac 上实测下来，比之前 Claude 的同类能力聪明太多。 本期我用 Codex 做了 4 组实测:让它自己发推、在 Typora 里写文档、用 Keynote 写 5 首关于风的诗并自动配图、再操控我自己做的封面图 APP 批量生成图片。整个过程 Codex 会在后台操作，完全不影响我在前台干别的事。 除此之外，这次更新还带来了:· 后台计算机使用 (macOS 首发)· 原生内置浏览器· 多智能体并行 & 长期运行自动化· 记忆功能 (Memory) 预览· 侧边栏文件预览 (PDF / 幻灯片 / 表格)· 摘要面板、SSH 远程 devbox、GitHub 审查评论处理· 内置 GPT Image 1.5 图像生成 一起来看 Codex 是怎么从「代码助手」升级成「全流程伙伴」的。 时间戳 00:00 Codex 这次到底更新了啥00:12 官方新功能速览02:28 实测 #Codex #OpenAI #ChatGPT #computeruse #计算机使用
	348 [kate人不错](https://www.douyin.com/user/MS4wLjABAAAAUM1OkVrg65jvgDKIc6La383LfYGVaBnhH0tyRHCFSFA?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)

全部评论

留下你的精彩评论吧

大家都在搜： [scratch软件下载](https://www.douyin.com/search/scratch%E8%BD%AF%E4%BB%B6%E4%B8%8B%E8%BD%BD?aweme_id=7631049335999941928&enter_from=article_detail&gid=7631049335999941928&source=comment_related_search)

[用户889214762809](https://www.douyin.com/user/MS4wLjABAAAAQt6wYT-VW_FUWW_PwMr-YH0p9c7IgkeqZQ3lT-4XQ-iTigDkixnHp6ZaBW8YTBHo)

...

scratch程序就不会写。对于我来说没有用。唯有Qcoder可以，其他于事无补。

1小时前·重庆

0

分享

回复

[听说名字长会有天才跟着念](https://www.douyin.com/user/MS4wLjABAAAAdVtDtWiSymgV6NW7wv2LG4qro7guHJn_YHJQqyDXg_U)

...

windows的什么时候出？现在用网页版的上传不了整个项目就很难受

9小时前·广西

0

分享

回复

暂时没有更多评论

[

认证徽章

TRAE官方账号](https://www.douyin.com/user/MS4wLjABAAAAwW6KAzmOu3OenU1kgddAiakDE7gXkQs898NLtAaFdYnfUg0VWfq0KJbslaM_pj8E)

粉丝12.2万获赞20.4万

## 推荐视频

- [![无需复杂环境搭建，教你低成本玩转 Moltbook！ 深度实测国产 AI 中最能打的 MiniMax Agent 2.0 ，教你轻松操作本地文件、完成复杂数据分析任务、玩转 Moltbook 社区！
	#MiniMax    #Agent  #智能体  #AI工作流  #AI](https://p3-pc-sign.douyinpic.com/image-cut-tos/ed8481f952ee041fea25a229a4a09d42~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=cV%2FPu1xOvtPoTNbLgpVMYNmVvZ0%3D)](https://www.douyin.com/video/7604779632721661194)
	[11:37](https://www.douyin.com/video/7604779632721661194)
	[
	播放中
	](https://www.douyin.com/video/7604779632721661194)
	### 无需复杂环境搭建，教你低成本玩转 Moltbook！ 深度实测国产 AI 中最能打的 MiniMax Agent 2.0 ，教你轻松操作本地文件、完成复杂数据分析任务、玩转 Moltbook 社区！#MiniMax #Agent #智能体 #AI工作流 #AI
	1.4万 [code秘密花园](https://www.douyin.com/user/MS4wLjABAAAAFAdYesIzAsdF1f-rjIEqEMA69l6_CMNA-NrCdQBQoD9E736gbg78-MbOWncvkT02?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![Red/Green TDD提高代码交付质量方法论 #程序员#AI  #claude 
	AI写代码越来越快，但质量谁来保证？Simon Willison（Django创始人）给出了答案——Red/Green TDD。](https://p3-pc-sign.douyinpic.com/image-cut-tos/a8b3c51b7bd710995edab1d92d5e23a3~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=uiInL1tjyyRovsz8FjmSV4Z8oxI%3D)](https://www.douyin.com/video/7611079015830506786)
	[03:52](https://www.douyin.com/video/7611079015830506786)
	[
	播放中
	](https://www.douyin.com/video/7611079015830506786)
	### Red/Green TDD提高代码交付质量方法论 #程序员#AI #claude AI写代码越来越快，但质量谁来保证？Simon Willison（Django创始人）给出了答案——Red/Green TDD。
	1.7万 [大力AI](https://www.douyin.com/user/MS4wLjABAAAAdepbmtUgThsVmoKxyaWUkVtbnW8g48s-OXG0ExL5ew-aQN3mECzWA5B5bkqI2v2x?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![5个Claude Code高性价比技巧💻让你编程效率翻倍！ 嗨！大家～
	这是一期 Claude Code 使用技巧分享，都是极易上手又很有效的技能，欢迎查收！ 
	#ClaudeCode #AI #青年创作者成长计划 #AI新星计划 #AI编程 #学术新星计划](https://p3-pc-sign.douyinpic.com/image-cut-tos/ad4557ff20a2dfd6e504933882a2c7b3~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=wI0gpk8OB2VlNqwv7YMTIa7uvmo%3D)](https://www.douyin.com/video/7620428002853145891)
	[05:36](https://www.douyin.com/video/7620428002853145891)
	[
	播放中
	](https://www.douyin.com/video/7620428002853145891)
	### 5个Claude Code高性价比技巧让你编程效率翻倍！ 嗨！大家～这是一期 Claude Code 使用技巧分享，都是极易上手又很有效的技能，欢迎查收！ #ClaudeCode #AI #青年创作者成长计划 #AI新星计划 #AI编程 #学术新星计划
	1.3万 [赫赫儿\_](https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![如何逼自己7天拿下AI视频创作，存下吧！【2026最新录制】 第12集：如何逼自己7天拿下AI视频创作，存下吧！【2026最新录制】3分钟入门AI视频制作！AI生成视频零基础入门保姆级教程，AI视频制作全流程教学！包含所有干货内容！7天就能从小白到大神！（附AI视频工具）#AI视频  #AI动画  #AI电影  #AIGC  #AI教程](https://p3-pc-sign.douyinpic.com/image-cut-tos/7b674a6a75c3ef026863e939fd87b4f8~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=QbVl7ltpyBwUjSbmgsUiOOI9VOA%3D)](https://www.douyin.com/video/7623772217624513798)
	[07:50](https://www.douyin.com/video/7623772217624513798)
	[
	播放中
	](https://www.douyin.com/video/7623772217624513798)
	### 如何逼自己7天拿下AI视频创作，存下吧！【2026最新录制】 第12集：如何逼自己7天拿下AI视频创作，存下吧！【2026最新录制】3分钟入门AI视频制作！AI生成视频零基础入门保姆级教程，AI视频制作全流程教学！包含所有干货内容！7天就能从小白到大神！（附AI视频工具）#AI视频 #AI动画 #AI电影 #AIGC #AI教程
	873 [罗大众](https://www.douyin.com/user/MS4wLjABAAAAoEKX6DoU7Ox3ojRh2Ikh42aHU8fgHFiQaVXAvvllKUw?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![北朝鲜黑了 1 亿下载代码库 · OpenAI 证书全部轮换 如果你用 Mac 版 ChatGPT 或 Codex，今天可能收到了一封 OpenAI 邮件——5 月 8 日前必须更新。邮件没说的是：北朝鲜黑客污染了全球每周 1 亿下载的代码库，OpenAI 的 Mac 签名证书被迫全部轮换。
	被黑的是 Axios——JavaScript 的"自来水管"。17.4 万 npm 包依赖它，全球 80% 云环境在用。3 月 31 日凌晨，毒版 axios@1.14.1 带 latest 标签发布，任何执行 npm install 的人自动中招。RAT 落到 Mac 上伪装成 com.apple.act.mond 系统进程，每 60 秒连北朝鲜服务器心跳。窗口期 3 小时。
	OpenAI 中招是因为两个配置错误：用了浮动标签 axios@latest + 没配 minimumReleaseAge。签名流水线能访问代码签名证书——证书一旦被偷，黑客能签发假冒的 ChatGPT 装到几亿 Mac 用户电脑里。
	微软归因：Sapphire Sleet（北朝鲜国家级）。Google / Palo Alto：10 个行业 5 大洲受害。CISA 4 月 20 日发了官方公告。
	下一次不会是 Axios——可能是 pip、Cargo、Homebrew。AI 公司已经成了高价值靶子
	三条防御：固定 commit hash · 配 minimumReleaseAge · CI/CD 权限最小化。
	#供应链攻击 #OpenAI  #AI安全  #Axios #npm #小宇玩AI](https://p3-pc-sign.douyinpic.com/image-cut-tos/073e68ead16067e1fc9b8a67e88946cb~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=zp8VTWkNvYfAqsQocmcjwWD%2BROk%3D)](https://www.douyin.com/video/7631063293985131839)
	[04:00](https://www.douyin.com/video/7631063293985131839)
	[
	播放中
	](https://www.douyin.com/video/7631063293985131839)
	### 北朝鲜黑了 1 亿下载代码库 · OpenAI 证书全部轮换 如果你用 Mac 版 ChatGPT 或 Codex，今天可能收到了一封 OpenAI 邮件——5 月 8 日前必须更新。邮件没说的是：北朝鲜黑客污染了全球每周 1 亿下载的代码库，OpenAI 的 Mac 签名证书被迫全部轮换。被黑的是 Axios——JavaScript 的"自来水管"。17.4 万 npm 包依赖它，全球 80% 云环境在用。3 月 31 日凌晨，毒版 axios@1.14.1 带 latest 标签发布，任何执行 npm install 的人自动中招。RAT 落到 Mac 上伪装成 com.apple.act.mond 系统进程，每 60 秒连北朝鲜服务器心跳。窗口期 3 小时。OpenAI 中招是因为两个配置错误：用了浮动标签 axios@latest + 没配 minimumReleaseAge。签名流水线能访问代码签名证书——证书一旦被偷，黑客能签发假冒的 ChatGPT 装到几亿 Mac 用户电脑里。微软归因：Sapphire Sleet（北朝鲜国家级）。Google / Palo Alto：10 个行业 5 大洲受害。CISA 4 月 20 日发了官方公告。下一次不会是 Axios——可能是 pip、Cargo、Homebrew。AI 公司已经成了高价值靶子三条防御：固定 commit hash · 配 minimumReleaseAge · CI/CD 权限最小化。#供应链攻击 #OpenAI #AI安全 #Axios #npm #小宇玩AI
	1256 [小宇玩AI](https://www.douyin.com/user/MS4wLjABAAAAOkwqROLl_a30sQJ9s6QsVPNvvVs6J4moppD-j-UJEuc?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![刷到就是赚到🔥别再死磕提示词了 500+Seedance2.0提示词直接免费抄#ai创作浪潮计划 #seedance2 #AI提示词 #Ai视频制作 #ai工具](https://p3-pc-sign.douyinpic.com/image-cut-tos/69cd5f7152b04cd36adb589dae8958ea~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=CdwUDoBjPig1qu3%2BWTRnthAsSVE%3D)](https://www.douyin.com/video/7613725725380274531)
	[00:30](https://www.douyin.com/video/7613725725380274531)
	[
	播放中
	](https://www.douyin.com/video/7613725725380274531)
	### 刷到就是赚到别再死磕提示词了 500+Seedance2.0提示词直接免费抄#ai创作浪潮计划 #seedance2 #AI提示词 #Ai视频制作 #ai工具
	4659 [柠檬AI（华小二团队）](https://www.douyin.com/user/MS4wLjABAAAAQJF_gROg71gQbFm-XgXL87Z_Bp17Wh5rkSQJHj2UvImN_nhhw9mQw_v1S1tJ0tZe?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![马斯克说4年后人类全部失业，我听完3小时访谈整个人都麻了 #马斯克 #马斯克访谈 #AI #知识](https://p3-pc-sign.douyinpic.com/image-cut-tos/3f2a8788308efd4dc371d48c555bb8a7~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=BMhFni4BGfMqZ%2FHnE9QCn3Q5%2BZs%3D)](https://www.douyin.com/video/7612982429430615348)
	[10:16](https://www.douyin.com/video/7612982429430615348)
	[
	播放中
	](https://www.douyin.com/video/7612982429430615348)
	### 马斯克说4年后人类全部失业，我听完3小时访谈整个人都麻了 #马斯克 #马斯克访谈 #AI #知识
	4.6万 [宇宙的独白](https://www.douyin.com/user/MS4wLjABAAAAFIWBWQXsJHJ1EeZPFnkcp2NXc5v6KM2nkE-T29CJj9o2MoOh3Q858h0i2L4oyFVJ?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![自己写了个AI助手框架 比OpenClaw轻100倍 🚀 OpenClaw太臃肿？2500+文件、50+依赖、600页文档...
	⚡ 所以我自己写了FlashClaw：
	核心只有20个文件
	飞书、定时任务、记忆系统都是插件
	一行命令安装，热加载开发
	WebSocket长连接，不需要公网服务器
	💡 你需要什么就装什么，够用就好！
	🔗 欢迎Star和贡献代码～ 
	#AI助手 #开源项目 #程序员 #flashclaw #飞书机器人](https://p3-pc-sign.douyinpic.com/image-cut-tos/53394220e38ba863c1dc7d7da76f2598~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=X3yHijUqpbS1t9PnGYcNpmUxdHU%3D)](https://www.douyin.com/video/7602987417271848242)
	[00:42](https://www.douyin.com/video/7602987417271848242)
	[
	播放中
	](https://www.douyin.com/video/7602987417271848242)
	### 自己写了个AI助手框架 比OpenClaw轻100倍 OpenClaw太臃肿？2500+文件、50+依赖、600页文档... 所以我自己写了FlashClaw：核心只有20个文件飞书、定时任务、记忆系统都是插件一行命令安装，热加载开发WebSocket长连接，不需要公网服务器 你需要什么就装什么，够用就好！ 欢迎Star和贡献代码～ #AI助手 #开源项目 #程序员 #flashclaw #飞书机器人
	435 [寒冰巨魔](https://www.douyin.com/user/MS4wLjABAAAAEtmXCg0qYW3pw4HVs0pMOVFAnEfo_-Nv7djv4B-m08M?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
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
	578 [Geek Leo独立开发者](https://www.douyin.com/user/MS4wLjABAAAA9gFK3svaIbgmVJkZ-6ecpBzORdsiBA_XAEbYIxhWMQp83NpeYhaevtHCjcBoe_R0?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![最新开源大模型“Happyhorse”碾压 Seedance2.0屠榜全球第一！#AI #AIGC #AI漫剧 #Happyhorse #Seedance2](https://p3-pc-sign.douyinpic.com/image-cut-tos/484d694623d8714810b1520c240331b6~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=MLtaeJH3v13LT%2FW%2FQDXV5dW2ssY%3D)](https://www.douyin.com/video/7627438066172480802)
	[06:06](https://www.douyin.com/video/7627438066172480802)
	[
	播放中
	](https://www.douyin.com/video/7627438066172480802)
	### 最新开源大模型“Happyhorse”碾压 Seedance2.0屠榜全球第一！#AI #AIGC #AI漫剧 #Happyhorse #Seedance2
	2525 [由乃AI视频分享(没回复看主页)](https://www.douyin.com/user/MS4wLjABAAAAAGCkAjY_auGucF37lPRzo_DGkFOycwJ8-FdLwFNDrn4?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![我把D老师从APP里拉出来，在哪儿都能用了 上期视频很多人问怎么用API，这期手把手教你，不需要写代码，不需要是程序员，全网最细手把手API教程，实现AI认知跃迁的一大步~
	#deepseek #DeepSeek#API #AI](https://p3-pc-sign.douyinpic.com/image-cut-tos/ce9db9392b4ceef600ce8304165d33c1~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=VEGKrgI9a18IVZYVpPGCeIPTjRE%3D)](https://www.douyin.com/video/7607373095002852635)
	[08:17](https://www.douyin.com/video/7607373095002852635)
	[
	播放中
	](https://www.douyin.com/video/7607373095002852635)
	### 我把D老师从APP里拉出来，在哪儿都能用了 上期视频很多人问怎么用API，这期手把手教你，不需要写代码，不需要是程序员，全网最细手把手API教程，实现AI认知跃迁的一大步~#deepseek #DeepSeek#API #AI
	1.9万 [人工大黑](https://www.douyin.com/user/MS4wLjABAAAATeYhzyBXKjBFtAce0aPnTBbeedgTYtIUjRa6sDRnreo?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![worktree 才是 agent 生产力开关 很多人以为自己已经在用 agent 开发了，实际上只是把“自己串行写代码”，换成了“看 agent 串行干活”。 
	这期我想讲一个很实用，但很多人没认真用起来的能力：**git worktree**。
	它不是什么新概念，但放到 AI 开发里，真的很像生产力开关。 
	同一个项目里，把任务拆成 A / B / C 三份，分别交给不同 agent 并行推进；
	既能同时干活，又不会互相污染代码。
	前面我会先用 canvas 把这套逻辑讲清楚，后面再做最简单的实战演示：
	开 3 个 worktree，分别开发，最后再合回主分支。#claudecode](https://p9-pc-sign.douyinpic.com/image-cut-tos-priv/d648dcae7676c468e34b1b7eaa35d7db~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=b9VNN1PVpmDQUl0lrnyJtYB80NY%3D)](https://www.douyin.com/video/7628651309188566308)
	[01:15](https://www.douyin.com/video/7628651309188566308)
	[
	播放中
	](https://www.douyin.com/video/7628651309188566308)
	### worktree 才是 agent 生产力开关 很多人以为自己已经在用 agent 开发了，实际上只是把“自己串行写代码”，换成了“看 agent 串行干活”。 这期我想讲一个很实用，但很多人没认真用起来的能力：\*\*git worktree\*\*。它不是什么新概念，但放到 AI 开发里，真的很像生产力开关。 同一个项目里，把任务拆成 A / B / C 三份，分别交给不同 agent 并行推进；既能同时干活，又不会互相污染代码。前面我会先用 canvas 把这套逻辑讲清楚，后面再做最简单的实战演示：开 3 个 worktree，分别开发，最后再合回主分支。#claudecode
	252 [samlai效率研习社](https://www.douyin.com/user/MS4wLjABAAAAzlweFaIvOQJlRgrZluYE2YGcipLHxHVcWzzBM7eS9Fs?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)
- [![超越编码 · AI 上手操作电脑｜Codex 大更新实测 这次 OpenAI 把 Codex 大改了一版，尤其是它的「计算机使用 (Computer Use)」功能，在我的 Mac 上实测下来，比之前 Claude 的同类能力聪明太多。 
	本期我用 Codex 做了 4 组实测:让它自己发推、在 Typora 里写文档、用 Keynote 写 5 首关于风的诗并自动配图、再操控我自己做的封面图 APP 批量生成图片。整个过程 Codex 会在后台操作，完全不影响我在前台干别的事。 
	除此之外，这次更新还带来了:
	· 后台计算机使用 (macOS 首发)
	· 原生内置浏览器
	· 多智能体并行 & 长期运行自动化
	· 记忆功能 (Memory) 预览
	· 侧边栏文件预览 (PDF / 幻灯片 / 表格)
	· 摘要面板、SSH 远程 devbox、GitHub 审查评论处理
	· 内置 GPT Image 1.5 图像生成 
	一起来看 Codex 是怎么从「代码助手」升级成「全流程伙伴」的。 
	时间戳 
	00:00 Codex 这次到底更新了啥
	00:12 官方新功能速览
	02:28 实测 
	#Codex  #OpenAI  #ChatGPT  #computeruse   #计算机使用](https://p3-pc-sign.douyinpic.com/image-cut-tos/b9a4e3178a262847aa60520484377ebb~tplv-dy-resize-origshort-autoq-75:330.jpeg?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_WEBPC_RELATED_AWEME&sc=cover&se=false&x-expires=2092176000&x-signature=wecf6VgseYkSNoCXtHWTPvYAMv0%3D)](https://www.douyin.com/video/7629592303799225651)
	[11:03](https://www.douyin.com/video/7629592303799225651)
	[
	播放中
	](https://www.douyin.com/video/7629592303799225651)
	### 超越编码 · AI 上手操作电脑｜Codex 大更新实测 这次 OpenAI 把 Codex 大改了一版，尤其是它的「计算机使用 (Computer Use)」功能，在我的 Mac 上实测下来，比之前 Claude 的同类能力聪明太多。 本期我用 Codex 做了 4 组实测:让它自己发推、在 Typora 里写文档、用 Keynote 写 5 首关于风的诗并自动配图、再操控我自己做的封面图 APP 批量生成图片。整个过程 Codex 会在后台操作，完全不影响我在前台干别的事。 除此之外，这次更新还带来了:· 后台计算机使用 (macOS 首发)· 原生内置浏览器· 多智能体并行 & 长期运行自动化· 记忆功能 (Memory) 预览· 侧边栏文件预览 (PDF / 幻灯片 / 表格)· 摘要面板、SSH 远程 devbox、GitHub 审查评论处理· 内置 GPT Image 1.5 图像生成 一起来看 Codex 是怎么从「代码助手」升级成「全流程伙伴」的。 时间戳 00:00 Codex 这次到底更新了啥00:12 官方新功能速览02:28 实测 #Codex #OpenAI #ChatGPT #computeruse #计算机使用
	348 [kate人不错](https://www.douyin.com/user/MS4wLjABAAAAUM1OkVrg65jvgDKIc6La383LfYGVaBnhH0tyRHCFSFA?author_id=2353385145636283&enter_from=article_detail&enter_method=video_cover_title&from_tab_name=main&group_id=7631049335999941928&log_pb=%7B%22impr_id%22%3A%22202604220859392BF02C1D40AC394FD1D5%22%7D&relation=1)

拖拽到此处完成下载

图片将完成下载

AIX智能下载器