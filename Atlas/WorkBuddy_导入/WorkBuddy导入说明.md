---
title: WorkBuddy 数据导入总览
date: 2026-04-28
tags:
  - workbuddy
  - atlas
---

# WorkBuddy 数据导入总览

> 导入时间: 2026-04-28 18:46
> 目标位置: `D:\DMT_cloud\atlas\WorkBuddy_导入`

---

## 已导入内容

### 1. 工作日志 (8 篇)

按日期归档的 WorkBuddy 工作会话总结，包含：
- Forest VPN 网络诊断
- Claude Code / DeepSeek 配置
- Hermes Agent 部署
- PPT 生成等

| 日期 | 文件 |
|------|------|
| 2026-04-28 | [[2026-04-28_html-ppt 测试 Demo]] |
| 2026-04-28 | [[2026-04-28_工资考核分析PPT制作]] |
| 2026-04-27 | [[2026-04-27_Forest 开机自启清理 + 网络诊断优化]] |
| 2026-04-24 | [[2026-04-24_Hermes Agent 模型切换]] |
| 2026-04-24 | [[2026-04-24_Hermes Dashboard 构建修复]] |
| 2026-04-23 | [[2026-04-23_2026-04-23 工作记录]] |
| 2026-04-23 | [[2026-04-23_修复 360AlbumViewer 开机弹窗错误]] |
| 2026-04-22 | [[2026-04-22_Hermes Agent 部署问题]] |

### 2. 对话产物索引

65 个对话产生的文件（代码、配置、PPT等）的元数据索引。

**产物类型分布：**
- Markdown (.md) - 14 个
- HTML (.html) - 5 个（PPT）
- Python (.py) - 4 个
- YAML (.yaml) - 9 个
- JSON (.json) - 11 个
- Batch (.bat) - 7 个
- PowerShell (.ps1) - 4 个
- 其他 - 11 个

### 3. 源文件位置

对话产物原始文件位于：
```
C:\Users\ylking\AppData\Roaming\WorkBuddy\User\History\
```

---

## 相关链接

- [[索引]] - 日志文件索引
- [[对话产物索引]] - 产物元数据

---

## 后续建议

1. **定期导入**：建议每周或每月运行一次导入脚本同步新数据
2. **清理脚本**：可删除本目录下的 `.py` 临时文件
3. **Obsidian 插件**：可安装 "WorkBench" 或 "Dataview" 插件增强导航
