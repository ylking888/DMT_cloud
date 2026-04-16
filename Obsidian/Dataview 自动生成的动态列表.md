---
up: "[[OBsidian攻略]]"
date: 2026-04-16
---
### 步骤 1：安装 Dataview 插件
1. 打开 Obsidian → 设置 → 社区插件 → 关闭安全模式
2. 浏览 → 搜索 **Dataview** → 安装 → 启用

### 步骤 2：给你的任务笔记添加统一的 YAML 元数据
在每一个任务 / 项目笔记的**最顶部**，添加这段元数据（必须严格格式）：
```yaml
---
status: "On"  # 可选值：On / Ongoing / Done 等，对应你的分类
rank: 5       # 优先级分数，1-5，数字越大优先级越高
tags: ["efforts", "project"]
---
```
