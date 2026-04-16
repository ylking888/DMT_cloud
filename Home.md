---
cssclasses:
  - hide-properties
  - homepage
sticker: lucide//home
---
## Home
> [!info] 
> Your launchpad and home base. That's here. That's [[home]].

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
dateRangeValue: 365
dataSource:
  type: PAGE
  value: ""
  dateField:
    type: FILE_MTIME
```