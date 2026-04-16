<div class="custom-properties-btn" onclick="app.commands.executeCommandById('properties:open')"> 
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-6.99 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
</svg>
<span class="properties-text">  首页导航</span> 
<span class="properties-arrow">></span> </div><p class="properties-desc">Your launchpad and home base. That's here. That's <a href="#home" class="home-link">home</a>.</p>
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