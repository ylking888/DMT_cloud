![](assets/Home页面/file-20260416104047802.png)要生成图片里那样的 Home 页面，需要用到几个插件的组合，并使用一种叫 **Callout** 的语法来实现那些带标题和边框的内容块。
### 🛠️ 核心组件拆解
这个 Home 页面主要由四个插件/功能协作完成：
1.  **Homepage 插件**：负责将你指定的笔记（也就是这个 Home 页面）设置为 Obsidian 启动时自动打开的首页。
2.  **Dataview 插件**：这是实现动态查询功能的核心。图中的 “Recent Files” 等模块，就是通过 Dataview 自动查询并列出最近更新或创建的笔记。
3.  **Callout 语法**：这是 Obsidian 的原生功能。图中 `Home`、`Atlas`、`Calendar`、`Efforts` 这几个带底色和标题的框，就是用 Callout 实现的。
4.  **Contribution Graph 插件**：图中的热力图（类似 GitHub 贡献图）是由 `Contribution Graph` 插件生成的。

### 📄 源代码与配置步骤

你可以新建一个笔记（比如命名为 `Home`），然后将下面的代码复制进去。

```markdown
---
banner: "![[banner.png]]" 
cssclasses:
  - hide-properties
sticker: lucide//home
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
```

```

#### 📝 代码说明

*   **YAML Frontmatter**：笔记开头的 `---` 部分是为笔记设置属性的，比如 `cssclasses` 可以隐藏属性本身，`sticker` 可以为笔记添加图标。
*   **`> [!info]` 等 Callout**：这些就是图片中看到的彩色模块。`[!note]`、`[!example]`、`[!calendar]` 等决定了模块的标题和颜色。`-` 号（如 `[!note]-`）表示该模块默认是折叠的。
*   **Dataview 代码块**：
    *   `TABLE WITHOUT ID ...` 是查询语句，意思是以表格形式，列出指定目录 (`FROM "/"`) 下的文件，并按修改时间 (`SORT file.mtime DESC`) 倒序排列，只显示前5条 (`LIMIT 5`)。
    *   `$=` 开头的行是**内联 DataviewJS 代码**，`dv.list(...)` 会生成一个列表。这里的功能是动态显示“日记”文件夹下的5个笔记链接。
*   **Contribution Graph 代码块**：这部分指定了热力图的数据来源（这里是所有页面的修改时间），并定义了图表的外观。

#### ⚙️ 插件设置步骤

1.  **安装插件**：在 Obsidian 的“第三方插件”市场中，搜索并安装以下四个插件：
    *   **Homepage**
    *   **Dataview**
    *   **Contribution Graph**
    *   （可选）**Style Settings**，用于微调界面样式。

2.  **启用 Dataview 的查询功能**：
    *   进入 `设置` → `Dataview` → 确保 **Enable JavaScript Queries** 选项是**开启**状态。这样笔记中的 `$=` 代码才能正确执行。

3.  **配置 Homepage 插件**：
    *   进入 `设置` → `Homepage`。
    *   在 `Homepage` 选项中，选择你刚刚创建好的 `Home` 笔记。
    *   将 `Open on startup` 选项打开，这样每次打开 Obsidian 都会自动显示这个页面。

4.  **调整外观（可选）**：安装并启用 `Style Settings` 插件后，你可以在 Obsidian 设置中找到它，并选择你当前使用的主题，对 Callout 模块、字体、颜色等进行细节调整，让主页更符合你的审美。

完成以上步骤后，你的 Obsidian 就有了一个美观且实用的 Home 页面了。之后可以根据自己的需要，修改 Dataview 的查询条件和 Callout 里的内容。