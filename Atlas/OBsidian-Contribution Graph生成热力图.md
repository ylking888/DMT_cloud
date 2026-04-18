## 安装插件Contribution Graph
![](assets/OBsidian-Contribution%20Graph生成热力图/file-20260418120331327.png)

## 命令或快捷键调用
CTRL+P——**Contribution Graph: Add Heatmap**（中文版为**新建热力图**）
![](assets/OBsidian-Contribution%20Graph生成热力图/file-20260418120543686.png)
## 可预览的设置
![](assets/OBsidian-Contribution%20Graph生成热力图/file-20260418120923795.png)
```contributionGraph
title: 近月OBsidian使用情况
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
fillTheScreen: true
enableMainContainerShadow: false
fromDate: 2025-10-01
toDate: 2026-06-30
cellStyleRules:
  - id: Ocean_a
    color: "#8dd1e2"
    min: 1
    max: 2
  - id: Ocean_b
    color: "#63a1be"
    min: 2
    max: 3
  - id: Ocean_c
    color: "#376d93"
    min: 3
    max: 5
  - id: Ocean_d
    color: "#012f60"
    min: 5
    max: 9999
cellStyle:
  borderRadius: 0%
  minHeight: 12px

```
## 设置样式
![](assets/OBsidian-Contribution%20Graph生成热力图/file-20260418121228061.png)
