---
up: "[[OBsidian攻略]]"
date: 2026-04-16
tags:
  - OBsidian
---
![](assets/OBsidian-Dataview%20自动生成的动态列表/file-20260417175702332.png)
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
### 步骤3：Home中的代码
```Markdown
# Home

<!-- Properties 按钮（保留你原来的） -->
<div class="custom-properties-btn" onclick="app.commands.executeCommandById('properties:open')">
  <svg class="properties-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
  <span class="properties-text">Properties</span>
  <span class="properties-arrow">></span>
</div>
<p class="properties-desc">Your launchpad and home base. That's here. That's <a href="#home" class="home-link">home</a>.</p>

<!-- Efforts 面板（外层 Callout） -->
> [!efforts]- Efforts
> > For a concentrated view, go to [[Efforts]].
> > Use this to keep priorities in order and quickly adjust your bandwidth as needed.
> 
> <!-- On 子面板（自动生成，修复版） -->
> > [!on]- 🔥 On
> > ```dataview
> > TABLE WITHOUT ID
> >   ("( " + length(rows) + " ) " + file.link) AS "任务",
> >   rank AS Rank
> > FROM "00 - Projects"
> > WHERE status = "On"
> > SORT rank DESC
> > ```
> 
> <!-- Ongoing 子面板（自动生成，修复版） -->
> > [!ongoing]- ♻️ Ongoing
> > ```dataview
> > TABLE WITHOUT ID
> >   ("( " + length(rows) + " ) " + file.link) AS "任务",
> >   rank AS Rank
> > FROM "00 - Projects"
> > WHERE status = "Ongoing"
> > SORT rank DESC
> > ```
```
最近打开的文件文章列表
```Markdown
> [!efforts]- 📌 最近打开的文件
> ```dataview
> TABLE WITHOUT ID
>   file.link AS "文件名",
>   dateformat(file.mtime, "yyyy-MM-dd HH:mm") AS "最后修改时间"
> FROM "/"
> SORT file.mtime DESC
> LIMIT 5

```
![](assets/OBsidian-Dataview%20自动生成的动态列表/file-20260417175702331.png)
最近创建的笔记文章列表
```Markdown
> [!note]- 📝 最近创建的笔记
> ```dataview
> TABLE WITHOUT ID
>   file.link AS "文件名",
>   dateformat(file.ctime, "yyyy-MM-dd") AS "创建日期"
> FROM "/"
> SORT file.ctime DESC
> LIMIT 5
> ```
```
![](assets/OBsidian-Dataview%20自动生成的动态列表/file-20260417175702325.png)
等等文章列表都可以通过dataview插件来实现的。
