---
📒description: Your launchpad and home base. That's here. That's [[home]].
---
<div class="custom-properties-btn" onclick="app.commands.executeCommandById('properties:open')"> <svg class="properties-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect> <line x1="3" y1="10" x2="21" y2="10"></line> </svg> <span class="properties-text">Properties</span> <span class="properties-arrow">></span> </div> <p class="properties-desc">Your launchpad and home base. That's here. That's <a href="#home" class="home-link">home</a>.</p>
## 📍 快速导航

> [!example]- 🗺️ **Atlas**
> 知识地图与概念索引
> - [[MOC - 核心概念]]
> - [[领域索引]]
> - [[#]] 探索图谱

> [!calendar]- 📅 **Calendar**  
> 日记与时间管理
> - `$= dv.current().file.link`
> - [[日记/今日记录|今日记录]]
> - `$= dv.list(dv.pages('"日记"').file.link.limit(3))`

> [!tip]- ⚡ **Efforts**
> 项目与任务追踪
> - [[当前进行中]]
> - [[已完成项目]]
> - [[任务看板]]

---

## 📊 知识库概览

> [!info]- 📈 统计信息
> ```dataviewjs
> const allFiles = dv.pages('"/"').filter(p => p.file.name != "Home");
> const noteCount = allFiles.length;
> const tagCount = [...new Set(allFiles.flatMap(p => p.file.tags || []))].length;
> const recentNotes = dv.pages('"/"')
>   .sort(p => p.file.mtime, 'desc')
>   .limit(5);
> 
> dv.span(`📄 **笔记总数**：${noteCount} 条`);
> dv.span(`  🏷️ **标签总数**：${tagCount} 个`);
> dv.span(`
> 
> **最近更新的笔记**：
> ${recentNotes.map(p => `- [[${p.file.name}]]`).join('\n')}
> `);
> ```

---

## 🔥 创作热力图

```contributionGraph
title: 近期活跃度
graphType: month-track
dateRangeType: LATEST_DAYS
dateRangeValue: 30
dataSource:
  type: PAGE
  value: ""
  dateField:
    type: FILE_MTIME
titleStyle:
  fontSize: 16px
cellStyleRules: []

```