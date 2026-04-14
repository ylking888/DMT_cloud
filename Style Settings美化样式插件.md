## 一、插件核心作用
Style Settings 是 Obsidian 最核心的**样式管理插件**，它的核心功能是：
✅ 给 CSS 片段 / 主题添加**可视化设置面板**，不用手动改 CSS 代码
✅ 一键开关、调整样式（如标题色块、文字颜色、字体、布局等）
✅ 实时预览修改效果，无需重启 Obsidian
✅ 完全兼容你现有的所有插件（Excalidraw、Templater 等）
✅ 支持自定义 CSS 变量，实现你要的「标题色块 / 文字色」自由切换
## 二、安装与启用（你已安装，直接跳过）

1. 社区插件市场搜索 `Style Settings`
2. 安装并启用插件
3. 启用后，设置中会新增「Style Settings」选项卡
## 三、核心界面与基础操作（中文说明）
### 1. 打开设置面板
- 路径：Obsidian → 设置 → Style Settings（在社区插件分类下）
- 面板结构：
    - 左侧：**样式分类列表**（如「全局样式」「标题样式」「Callout 样式」等）
    - 右侧：**具体设置项**（开关、颜色选择器、数值输入框等）
    - 底部：**重置 / 保存**按钮
### 2. 基础操作流程
1. 左侧选择要修改的样式分类
2. 右侧调整对应设置（如「标题色块宽度」「标题文字颜色」）
3. 实时预览效果（编辑 / 阅读模式同步生效）
4. 点击「保存」，永久生效
5. 点击「重置」，恢复默认样式
## 四、针对你需求的「标题色块 / 文字色」设置教程
### 1. 前提：给你的 CSS 片段添加 Style Settings 支持
你之前写的 CSS 片段，需要**添加 Style Settings 变量**，才能在面板中可视化调整。
#### 示例：给标题色块 / 文字色添加 Style Settings 变量
```CSS
/* ============== Style Settings 变量定义 ============== */
/* 标题色块默认颜色 */
body {
  --title-bar-color: #ffcc00;
  --title-text-color: #ffb700;
  --bar-width: 6px;
  --border-radius: 3px;
}

/* ============== 标题基础样式 ============== */
h1, h2, h3, h4, h5, h6 {
  position: relative !important;
  padding-left: 16px !important;
  margin-top: 8px !important;
  margin-bottom: 0 !important;
}

h1::before, h2::before, h3::before,
h4::before, h5::before, h6::before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 0.2em !important;
  bottom: 0.2em !important;
  width: var(--bar-width) !important;
  border-radius: var(--border-radius) !important;
  background-color: var(--title-bar-color) !important;
  display: block !important;
}

/* 标题文字颜色 */
h1 { color: var(--title-text-color) !important; }
h2 { color: #ffcc00 !important; }
h3 { color: #f0f0f0 !important; }
```
2. 配套 Style Settings 配置文件
在 .obsidian/snippets/ 文件夹下，新建 title-style-settings.json，写入：
```CSS
{  
"title-bar-color": {    
"type": "color",    
"label": "标题左侧色块颜色",    
"description": "设置标题左侧竖条的颜色",    
"default": "#ffcc00"
  },  
"title-text-color": {    
"type": "color",    
"label": "标题文字颜色",    
"description": "设置一级标题的文字颜色",    
"default": "#ffb700"
  },  
"bar-width": {    
"type": "number",    
"label": "色块宽度",    
"description": "设置标题左侧竖条的宽度（单位：px）",    
"default": 6,    
"min": 2,    
"max": 12
  },  
"border-radius": {    
"type": "number",    
"label": "色块圆角",    
"description": "设置标题左侧竖条的圆角（单位：px）",    
"default": 3,    
"min": 0,    
"max": 10
  }
}
```
### 3. 启用后，在 Style Settings 面板中可视化调整
- 打开 Style Settings → 找到「标题样式」分类
- 直接用**颜色选择器**改色块 / 文字颜色
- 用**数值输入框**调整色块宽度、圆角
- 实时预览效果，一键保存，不用手动改 CSS
## 五、完整使用教程（从入门到精通）
### 1. 给现有 CSS 片段添加 Style Settings 支持
#### 步骤 1：定义 CSS 变量
在你的 CSS 片段开头，添加变量定义：
```CSS
/* 定义 Style Settings 可调整的变量 */
body {  
--callout-bar-color: #4a90e2;  
--callout-title-size: 1.4em;  
--title-bar-color: #ffcc00;  
--title-text-color: #ffb700;
}
```
#### 步骤 2：在 CSS 中使用变量
```CSS
/* Callout 竖条样式 */
.callout {
  border-left: 8px solid var(--callout-bar-color) !important;
}
.callout .callout-title {
  font-size: var(--callout-title-size) !important;
}

/* 标题色块样式 */
h1::before {
  background-color: var(--title-bar-color) !important;
}
h1 {
  color: var(--title-text-color) !important;
}
```
#### 步骤 3：创建 JSON 配置文件
在 `.obsidian/snippets/` 下，新建 `style-settings.json`，写入变量配置：
```CSS
{
  "callout-bar-color": {
    "type": "color",
    "label": "Callout 竖条颜色",
    "default": "#4a90e2"
  },
  "callout-title-size": {
    "type": "number",
    "label": "Callout 标题字号",
    "default": 1.4,
    "min": 1,
    "max": 2
  },
  "title-bar-color": {
    "type": "color",
    "label": "标题色块颜色",
    "default": "#ffcc00"
  },
  "title-text-color": {
    "type": "color",
    "label": "标题文字颜色",
    "default": "#ffb700"
  }
}
```
#### 步骤 4：启用并使用
- 重启 Obsidian，打开 Style Settings 面板
- 找到对应分类，可视化调整所有样式，实时生效
### 2. 管理已安装主题的样式
Style Settings 最常用的功能是**管理第三方主题**：
1. 安装第三方主题（如 Minimal、AnuPpuccin）
2. 打开 Style Settings → 找到对应主题的分类
3. 调整主题的颜色、字体、布局、图标等所有样式
4. 一键保存，实时预览，不用手动改主题 CSS
### 3. 常用设置项说明
|设置类型|功能|适用场景|
|---|---|---|
|颜色选择器|调整元素颜色（如标题、链接、背景）|标题色块、文字色、Callout 竖条|
|数值输入框|调整尺寸（如宽度、字号、间距）|色块宽度、标题字号、行高|
|开关|开启 / 关闭样式（如隐藏色块、隐藏标签）|选择性显示色块 / 文字色|
|下拉菜单|选择预设样式（如面板位置、字体）|固定属性面板位置、切换字体|
## 六、针对你需求的「标题色块 / 文字色」一键设置方案

### 1. 完整 CSS 片段（复制到 `title-color-bar.css`）
```CSS
/* ============== Style Settings 变量定义 ============== */
body {
  --title-bar-color: #ffcc00;
  --title-text-color: #ffb700;
  --bar-width: 6px;
  --border-radius: 3px;
  --callout-bar-color: #4a90e2;
  --callout-title-size: 1.4em;
}

/* ============== Callout 竖条样式 ============== */
.callout {
  background-color: transparent !important;
  border: none !important;
  border-left: 8px solid var(--callout-bar-color) !important;
  padding: 4px 12px !important;
  margin: 8px 0 !important;
}
.callout .callout-icon {
  display: none !important;
}
.callout .callout-title {
  color: inherit !important;
  font-size: var(--callout-title-size) !important;
  font-weight: bold !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* ============== 标题色块样式 ============== */
h1, h2, h3, h4, h5, h6 {
  position: relative !important;
  padding-left: 16px !important;
  margin-top: 8px !important;
  margin-bottom: 0 !important;
  line-height: 1.4 !important;
}

h1::before, h2::before, h3::before,
h4::before, h5::before, h6::before {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  top: 0.2em !important;
  bottom: 0.2em !important;
  width: var(--bar-width) !important;
  border-radius: var(--border-radius) !important;
  background-color: var(--title-bar-color) !important;
  display: block !important;
}

/* ============== 标题文字颜色 ============== */
h1 { color: var(--title-text-color) !important; }
h2 { color: #ffcc00 !important; }
h3 { color: #f0f0f0 !important; }
h4 { color: #4a90e2 !important; }
h5 { color: #4caf50 !important; }
h6 { color: #ff9800 !important; }

/* ============== 深色主题适配 ============== */
.theme-dark h1, .theme-dark h2, .theme-dark h3,
.theme-dark h4, .theme-dark h5, .theme-dark h6 {
  color: #fff !important;
}

```
### 2. 配套 JSON 配置文件（复制到 `title-style-settings.json`）
```JSON
{
  "title-bar-color": {
    "type": "color",
    "label": "标题左侧色块颜色",
    "description": "设置所有标题左侧竖条的颜色",
    "default": "#ffcc00"
  },
  "title-text-color": {
    "type": "color",
    "label": "一级标题文字颜色",
    "description": "设置一级标题的文字颜色",
    "default": "#ffb700"
  },
  "bar-width": {
    "type": "number",
    "label": "色块宽度",
    "description": "设置标题左侧竖条的宽度（单位：px）",
    "default": 6,
    "min": 2,
    "max": 12
  },
  "border-radius": {
    "type": "number",
    "label": "色块圆角",
    "description": "设置标题左侧竖条的圆角（单位：px）",
    "default": 3,
    "min": 0,
    "max": 10
  },
  "callout-bar-color": {
    "type": "color",
    "label": "Callout 竖条颜色",
    "description": "设置 Callout 左侧竖条的颜色",
    "default": "#4a90e2"
  },
  "callout-title-size": {
    "type": "number",
    "label": "Callout 标题字号",
    "description": "设置 Callout 标题的字号（单位：em）",
    "default": 1.4,
    "min": 1,
    "max": 2
  }
}
```
### 3. 操作步骤

1. 保存 CSS 和 JSON 文件
2. 启用 `title-color-bar.css` 片段
3. 打开 Style Settings 面板
4. 找到「标题样式」分类，可视化调整所有样式
5. 实时预览，一键保存，永久生效

---

## 七、常见问题排查

### 1. 样式不生效

- 确保 CSS 片段已启用
- 确保 JSON 配置文件格式正确（无语法错误）
- 重启 Obsidian，刷新样式
- 检查 CSS 变量名与 JSON 变量名完全一致

### 2. 找不到设置项

- 确保 JSON 文件放在 `.obsidian/snippets/` 文件夹下
- 确保 CSS 片段已启用
- 升级 Style Settings 到最新版

### 3. 样式被主题覆盖

- 在 CSS 中添加 `!important`，强制生效
- 调整 Style Settings 变量优先级
- 切换到默认主题，确认样式生效后再用第三方主题

---

## 八、总结

✅ Style Settings 是 Obsidian 样式管理神器，无需手动改 CSS

✅ 支持可视化调整标题色块、文字色、Callout 竖条等所有样式

✅ 实时预览，一键保存，一劳永逸

✅ 完全兼容你现有的所有插件和功能

✅ 可管理第三方主题，实现高度自定义