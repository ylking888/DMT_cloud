---
title: "2026-04-28 工作日志"
date: 2026-04-28
source: WorkBuddy
workspace: 20260428143145
imported: 2026-04-28 18:46
tags:
  - workbuddy
  - 日志
---

# 2026-04-28 工作日志

## html-ppt 测试 Demo
- 使用 html-ppt skill 创建了测试演示文稿，6 页，tokyo-night 主题
- 基于 tech-sharing full-deck 模板，自定义 style.css 使用 tokyo-night 配色
- 输出路径：`c:\Users\ylking\WorkBuddy\20260428143145\html-ppt-demo\index.html`
- 内容：HTML PPT Studio 功能介绍（封面/核心能力/键盘交互/模板/技术栈/CTA）

## 理论物理讲课 PPT
- 为用户制作了 20 页讲课用 PPT，资料来源：D:\DMT_cloud\理论物理学\第三章 运动方程的积分（来自豆包超能模式）.md
- 输出路径：`c:\Users\ylking\WorkBuddy\20260428143145\physics-lecture\index.html`
- 风格：学术冷色调（Nord 配色 + academic-paper 排版），公式大字号突出，带逐字稿
- 20 页结构：封面/总览/§11×2/§12×2/§13×2/§14×3/§15×3/考试重点×2/习题×3/小结
- 特殊设计：公式用 .formula 类 26px 衬线体醒目展示；有效势能页含 SVG 示意图；开普勒轨道分类用表格对比；习题分 3 页逐步推导
- 用户需求提示词模板已整理，可复用于后续 PPT 制作

## 投影仪对比 PPT（HTML→PPTX 转换）
- 将 `D:\DMT_cloud\营销\projector-ppt\index.html`（16页杂志风演示）转换为 .pptx
- 输出路径：`D:\DMT_cloud\营销\projector-ppt\projector-comparison.pptx`
- 使用 pptxgenjs 从零生成，保留靛蓝瓷配色（深靛蓝 INK #0A1F3D + 浅灰纸白 PAPER #F1F3F5）
- 16 页完整对应：封面/Act I 幕封/参数速览/DMD芯片/亮度/Act II 幕封/色彩三方/徕卡详解/问题页/系统对比/Act III 幕封/游戏性能/选购指南/扩展机型/核心结论/结尾
- 生成脚本：`D:\DMT_cloud\营销\projector-ppt\generate-pptx.js`
