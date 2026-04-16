![](assets/Home页面/file-20260416104047802.png)![](assets/Home页面/file-20260416151246822.png)
### 🛠️ 
这个 Home 页面主要由四个插件/功能协作完成：


### 📄 Obsidian 原生 Callout（提示框）+ 自定义 CSS 美化
无需额外社区插件（仅需 Obsidian 1.0+ 原生支持），核心是：
1. 用原生 `> [!note]` 等 Callout 语法创建可折叠面板
2. 用 CSS 自定义每个面板的**背景色、边框色、图标、圆角、箭头样式**
3. 实现点击按钮展开 / 收起内容，完全匹配你截图的效果
#### 步骤 1：在 Home 笔记中插入 Callout 代码（直接复制）
```markdown
> [!note]- Atlas
> Where would you like to go?
> 
> - To do inspired work, go to [[Add]], [[Relate]], and [[Communicate]].
> 
> ![](https://example.com/your-image.jpg) <!-- 替换为你的图片链接 -->
> 
> - To launch into your knowledge, try out: [[Library]] | [[People Map]] | [[Sources Map]].
> - To catalyze your mind, go to your [[Thinking Map]] and [[Concepts Map]].
> - For grounding, [[Life Map]]. For training, [[Ideaverse Map]]. For rules, [[Meta PKM]].

> [!tip]- Calendar
> 你的日历内容（可放 Dataview 日程、任务等）

> [!warning]- Efforts
> 你的努力追踪、习惯打卡等内容
```
#### 语法说明：
- `[!note]-`：`-` 代表**默认折叠**，去掉 `-` 则默认展开
- `Atlas`：自定义面板标题（替换为你需要的文字）
- 标题下方：面板展开后的内容，支持 Markdown 列表、图片、链接、Dataview 等所有 Obsidian 语法
- 不同 Callout 类型（`note`/`tip`/`warning`）对应不同默认颜色，我们用 CSS 自定义成你要的青 / 紫 / 绿配色
#### 📝 代码说明
*   **YAML Frontmatter**：
  笔记开头的 `---` 部分是为笔记设置属性的，比如 `cssclasses` 可以隐藏属性本身，`sticker` 可以为笔记添加图标。
*   **`> [!info]` 等 Callout**：这些就是图片中看到的彩色模块。
  `[!note]`、`[!example]`、`[!calendar]` 等决定了模块的标题和颜色。
  `-` 号（如 `[!note]-`）表示该模块默认是折叠的。
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