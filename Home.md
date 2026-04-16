---
cssclasses:
  - hide-properties
sticker: 🧿
---
> [!info] 你的名字 / 导航标题
> Your launchpad and home base. That's here. That's home.

# 📇 最近更新

> [!note]- 📌 最近打开的文件
> ```dataview
> TABLE WITHOUT ID
>   file.link AS "文件名",
>   dateformat(file.mtime, "yyyy-MM-dd HH:mm") AS "最后修改时间"
> FROM "/"
> SORT file.mtime DESC
> LIMIT 5
> ```

> [!note]- 📝 最近创建的笔记
> ```dataview
> TABLE WITHOUT ID
>   file.link AS "文件名",
>   dateformat(file.ctime, "yyyy-MM-dd") AS "创建日期"
> FROM "/"
> SORT file.ctime DESC
> LIMIT 5
> ```

# 📚 核心知识库

> [!example]- Atlas (地图)
> - [[概念索引]]
> - [[MOC - 地图笔记]]

> [!calendar]- Calendar (日历)
> - [[日记/2026-04-16|今日记录]]
> - `$= dv.list(dv.pages('"日记"').file.link.limit(5))`

> [!tip]- Efforts (项目)
> - [[当前任务]]
> - [[项目进度跟踪]]

# 🔥 创作热力图

```contributionGraph
title: 近期创作活跃度
graphType: month-track
dataSource:
  type: PAGE
  value: ""
  dateField:
    type: FILE_MTIME