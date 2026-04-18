---
status:
  - on
rank: "5"
ta:
  - efforts
  - project
---
> [!atlas]- Atlas知识管理/地图集
>> 现在，选择你想去什么地方，或者做什么事情?
> 
> - 若想开展富有灵感的创作，可前往**「添加」**、**「关联」**与**「分享」**板块、
> - 若想深入探索你的知识库，可尝试：「资源库 | 人物图谱 | 来源图谱」.
> - 若想激活你的思维，可查看「思维图谱」与「概念图谱」。
> - 若想落地实践，可查看「生活图谱」；若想提升技能，可查看「**Ideaverse 图谱**」；若想梳理规则，可查看「元个人知识管理」。

> [!calendar]- Calendar日历
>- 若想写日记、聚焦当日事务，或是捕捉灵感闪现，按下  Ctrl-d
> - 若想分类记录特定内容，可前往「日志（Logs）」板块。
> <img src="assets/Home/file-20260416174725312.png"  style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; display: block; margin: 0 0 12px -20px !important;" alt="飞船">
>
> - 若想进行宏观复盘，可前往「计划与复盘（Plan and Review）」板块。
>- 若想了解更多关于 “时间穿梭” 的用法，可查看「日历（Calendar）」相关说明。

> [!efforts]- Efforts努力事项
> > For a concentrated view, go to [[Efforts]].
> > Use this to keep priorities in order and quickly adjust your bandwidth as needed.
> 
> <!-- On 子面板（自动生成） -->
> > [!on]- 🔥 On
> > ```dataview
>> TABLE WITHOUT ID
>>  ("( " + length(rows) + " ) " + file.link) AS "任务",
>>  rank AS Rank
>>FROM "你的任务笔记文件夹路径"
>>WHERE status = "On"
>>SORT rank DESC
> > ```
> 
> <!-- Ongoing 子面板（自动生成） -->
> > [!ongoing]- ♻️ Ongoing
> > ```dataview
> > TABLE WITHOUT ID
> >   ("( " + length(rows) + " ) " + file.link) AS "任务",
> >   rank AS Rank
> > FROM "你的任务笔记文件夹路径"
> > WHERE status = "Ongoing"
> > SORT rank DESC
> > ```


> [!efforts]- 📌 最近打开的文件
> ```dataview
> TABLE WITHOUT ID
>   file.link AS "文件名",
>   dateformat(file.mtime, "yyyy-MM-dd HH:mm") AS "最后修改时间"
> FROM "/"
> SORT file.mtime DESC
> LIMIT 5

> [!note]- 📝 最近创建的笔记
> ```dataview
> TABLE WITHOUT ID
>   file.link AS "文件名",
>   dateformat(file.ctime, "yyyy-MM-dd") AS "创建日期"
> FROM "/"
> SORT file.ctime DESC
> LIMIT 5
> ```










## 🔥 创作热力图

```contributionGraph
title: 近期活跃度
graphType: month-track
dateRangeType: LATEST_DAYS
dateRangeValue: 180
dataSource:
  type: PAGE
  value: ""
  dateField:
    type: FILE_MTIME
titleStyle:
  fontSize: 16px
cellStyleRules: []

```
```contributionGraph
title: OBsidian创作情况
graphType: default
dateRangeValue: 180
dateRangeType: FIXED_DATE_RANGE
startOfWeek: 1
showCellRuleIndicators: true
titleStyle:
  textAlign: left
  fontSize: 15px
  fontWeight: normal
dataSource:
  type: PAGE
  value: ""
  dateField: {}
fillTheScreen: false
enableMainContainerShadow: false
fromDate: 2025-10-01
toDate: 2026-06-30
cellStyleRules: []

```


