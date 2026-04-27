---
title: "Claude code免登录接Deepseek V4 Pro #Claude Code #Deepseek V4 Pro #AI安装部署 #AI编程 #AI自媒体"
source: "https://www.douyin.com/article/7632899907094875446"
author:
published:
created: 2026-04-27
description: "Claude code免登录接Deepseek V4 Pro #Claude Code #Deepseek V4 Pro #AI安装部署 #AI编程 #AI自媒体 - 零基础 AI 实战案例步骤于20260426发布在抖音，已经收获了1.1万个喜欢，来抖音，记录美好生活！"
tags:
  - "clippings"
---
Claude code免登录接Deepseek V4 Pro
搞开发的都知道，Claude Code 才是目前最强的 AI 编码神器。对比各类普通 AI 工具，它深度适配代码逻辑、全局读懂项目文件、批量改代码、排查 BUG，综合能力远超同类工具。
可惜原版有**地区限制，国内无法直接登录使用**，今天教大家完美破/解/限/制， **无需复杂魔法、不用繁琐注册** ，直接让 Claude Code 满血接入 Deepseek V4 Pro。

两大强者强强组合，零门槛上手，解锁超强写码、改程序、项目开发全能玩法，跟着操作，你也能轻松玩转顶级 AI 生产力工具。

下面跟上节奏，不藏着不掖着，我带你一步步将 Claude code 接入 Deepseek V4 Pro 把它部署到本地使用起来。

### 一、准备工作：安装必要软件
#### ✅1、安装 Node.js
- **作用** ：Node.js 是 JavaScript 运行环境，提供 npm 工具用于下载 Claude Code。
- **下载地址** ：https://nodejs.org/zh-cn
- **安装步骤** ：
	- 进入官网，下载适合你电脑系统（Windows/macOS/Linux）的安装程序。
		- 运行安装程序，一路点击 “下一步” 即可完成安装。
		- 验证安装：打开电脑的终端（Windows 可打开命令提示符或 PowerShell，macOS/Linux 打开终端），输入 node --version，如果能看到 Node.js 的版本号，说明安装成功。
```
C:\Windows\system32>node --version
v24.15.0
```
#### ✅2、安装 Claude Code

- **作用** ：用于接入和使用大模型的工具。
- **安装步骤** ：
	- 打开终端，输入命令 npm install -g @anthropic-ai/claude-code，等待安装完成。
		- 验证安装：输入 claude --version，如果能看到版本号，说明安装成功。
```
C:\Windows\system32>claude --version
2.1.119 (Claude Code)
```
#### ✅3、 下载并安装 CC Switch
- **作用** ：开源工具，用于添加和配置 Deepseek 等大模型。
- **下载地址** ：可在其开源仓库（如 GitHub）或相关资源站查找下载，确保下载的是官方正规版本。
- **安装步骤** ：
	1：下载 CC Switch 安装包 访问其 GitHub 仓库地址 https://github.com/ccswitch/ccswitch。 在仓库的 “Releases” 板块（一般在页面右侧或通过顶部导航的 “Releases” 入口进入），找到适合你电脑系统（Windows）的 exe 安装包，点击下载。
	2：安装 CC Switch 找到下载好的 exe 安装包，双击运行。 按照安装向导的提示，一路点击 “下一步”“安装” 等按钮，即可完成安装。 安装完成后，你就可以打开 CC Switch 来配置 Deepseek V4 Pro 模型了。
我下的是这个[发行版 CC Switch v3.14.1 · farion1231/cc-switch](https://github.com/farion1231/cc-switch/releases/tag/v3.14.1)

#### ✅4、 安装 VSCode（可选，为了更方便使用）
- **作用** ：代码编辑器，可安装 Claude code 插件，在其中直接使用大模型功能。
- **下载地址** ：https://code.visualstudio.com/
- **安装步骤** ：进入官网下载对应系统的安装包，运行后按照提示安装即可。
##### 第一次打开VSCode 设置中文界面两种方法：
- 方法一：命令面板（推荐） 
  1. 打开 VSCode 后，按快捷键： Ctrl + Shift + P
  2. 在弹出的命令面板里输入： Configure Display Language
  3. 选择 zh-cn（如果没有会提示安装中文语言包） 
  4. 点击 Restart 重启 VSCode 即生效
  ![](assets/Claude%20code免登录接Deepseek%20V4%20Pro%20Claude%20Code%20Deepseek%20V4%20Pro%20AI安装部署%20AI编程%20AI自媒体/file-20260427085320847.png)
- 方法二：安装中文语言包扩展 
1. 按 Ctrl + Shift + X 打开扩展市场 
2. 搜索： Chinese (Simplified)
3. 找到 Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code（微软官方出品） 
4. 点击 Install 安装 
5. 安装完右下角会弹出提示，点击 Restart and Switch to Chinese Simplified 即可

### 二、跳过 Claude code 登录
- 找到 Claude 的配置文件：
	- Windows 系统：在文件资源管理器中输入 %USERPROFILE%\.claude.json 并回车，找到该文件。
		- macOS/Linux 系统：在终端输入 cd ~，然后找到.claude.json 文件。
- 编辑该文件，添加以下内容：
```json
{ "hasCompletedOnboarding": true }
```
- 保存文件，这样就可以跳过 Claude code 的登录步骤了。

### 三、配置 Deepseek V4 Pro 模型
#### 1\. 获取 Deepseek API Key
- 进入 Deepseek 官网 https://platform.deepseek.com/sign\_in ，注册账号并登录。
- 找到 API 开放平台相关入口，创建并获取 API Key，记住这个 Key，后续会用到。

#### 2\. 在 CC Switch 中添加 Deepseek V4 Pro 模型

- 打开 CC Switch 软件。
- 找到添加模型的入口，选择添加 Deepseek 模型。
- 在配置项中，填写模型名称为 deepseek-v4-pro，然后输入之前获取的 Deepseek API Key。
- 保存配置。

#### 3\. 验证 Claude code 接入 Deepseek V4 Pro

- 关闭 CC Switch，然后打开 Claude code（可在终端中直接输入 claude 启动）。
- 此时可以看到 Claude code 后台使用的模型已经是 Deepseek V4 Pro 了。

### 四、在 VSCode 中使用 Claude code

- 打开 VSCode，在左侧边栏找到扩展图标（四个方块的图标），点击进入扩展市场。
- 在搜索框中输入 “Claude Code for VS Code”，找到对应的插件并点击安装。
- 安装完成后，由于之前已经配置好了跳过登录和模型，所以可以直接在 VSCode 中使用 Claude code 功能，比如询问模型 “你现在是什么大模型？”，会得到它使用 Deepseek V4 Pro 的回复。
