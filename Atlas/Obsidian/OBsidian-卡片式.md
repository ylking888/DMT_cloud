---
up: "[[OBsidian攻略]]"
date: 2026-04-15
tags:
  - OBsidian
---
![](assets/OBsidian-卡片式/file-20260417175825069.png)
实现方法：使用 Callout 语法
这种**卡片式、带边框、有背景色、居中的“Note”样式**在 Obsidian 中是如何实现的。
这通常是通过 **Obsidian 的“提示框”（Callout）语法**实现的，是 Obsidian 原生支持的功能，不需要任何插件。
```callout
> [!note] 
> 你的内容写在这里
```
- `>` 是引用符号
- `[!note]` 中的 `note` 是 Callout 的类型标识符
- 内容需要写在引用块中（每行开头都要有 `>`）
同时，还可以使用CSS样式表可以自定义颜色等。
