---
up: "[[../Atlas/Obsidian/OBsidian攻略|OBsidian攻略]]"
---
## 资源网站
https://feathericons.com/
https://tablericons.com/

##  2. 图标自定义（替换为你想要的图标） 
Obsidian 原生支持 Lucide 图标库，直接修改 --callout-icon 即可，无需 SVG：
- 书本图标：`lucide-book-open`
- 日历图标：lucide-calendar 
- 哑铃图标：lucide-dumbbell ​
- 完整图标列表：https://lucide.dev/icons/ ​ 
- ​  示例：把 Atlas 图标换成文件夹：--callout-icon: lucide-folder !important;
### 网站资源使用方法
步骤 1：找到你下载的 SVG 文件
比如：properties.svg、icon.svg 之类
步骤 2：用【记事本】打开它
Windows：右键 → 打开方式 → 记事本
打开后你会看到一段代码，大概长这样：
```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
```
步骤 3：复制 `<svg ...> 到 </svg>` 的全部内容
把整段代码全部复制。
步骤 4：替换你笔记里的图标代码

## 直接调用
在[Tablericons - Free SVG Icons](https://tablericons.com/)网站上，可以直接点图标上的 「Copy SVG」（复制 SVG 代码）

