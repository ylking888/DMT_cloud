---
title: Obsidian-安装浏览器 Obsidian 插件
author:
  - 豆包
created: 2026-04-17
tags:
  - clippings
---
装的是 Obsidian 官方的 **Web Clipper（网页剪藏）** Edge 插件，下面分 **官方商店安装（最稳）、Chrome 商店安装（更新版）、手动加载（备用）** 三步，附连接 Obsidian 的配置，直接照着做就行。
### 一、官方 Edge 商店安装（推荐，最简单）
1. 打开 Edge，点右上角 **三个点（...）→ 扩展 → 管理扩展** （或直接输入 `edge://extensions/` ）
2. 打开页面左下角的 **允许来自其他商店的扩展** （开关打开，必须开，否则搜不到）
3. 点页面顶部的 **Edge 加载项商店** ，进入 Edge 官方扩展市场
4. 搜索框输入： **Obsidian Web Clipper** ，找到带 Obsidian 宝石图标、官方发布的那个
5. 点 **获取 → 添加扩展** ，完成安装；右上角会出现 Obsidian 图标（没显示就点扩展拼图图标，固定到工具栏）
### 二、从 Chrome 商店安装（Edge 商店版本旧时用）

1. 进入 `edge://extensions/` ，打开 **允许来自其他商店的扩展**
2. 访问 Chrome 网上应用店： [https://chrome.google.com/webstore/detail/obsidian-web-clipper/hdifnppkilcdcnhofoggfcofmilkecllk](https://chrome.google.com/webstore/detail/obsidian-web-clipper/hdifnppkilcdcnhofoggfcofmilkecllk)
3. 点 **添加至 Chrome** ，Edge 会自动安装并兼容
### 三、手动加载（离线 / 开发版，备用）

1. 下载官方源码包： [https://github.com/obsidianmd/obsidian-clipper/archive/refs/heads/main.zip](https://github.com/obsidianmd/obsidian-clipper/archive/refs/heads/main.zip) ，解压到本地文件夹
2. Edge 进入 `edge://extensions/` ，打开右上角 **开发者模式**
3. 点 **加载已解压的扩展程序** ，选中刚才解压的文件夹（选到包含 manifest.json 的目录），完成安装
### 四、安装后连接 Obsidian（必做，否则无法保存）

1. 确保 Obsidian 已打开、并进入你要保存的 **目标仓库** （Obsidian 必须后台运行）
2. 点 Edge 工具栏的 Obsidian 图标 → 点 **Connect to Obsidian**
3. 弹出 Obsidian 授权窗口，点 **允许** ，完成连接
4. 进入插件设置：设置默认保存文件夹（比如 Inbox、网页剪藏）、模板、格式，之后就能一键剪藏网页到 Obsidian 指定文件夹了

