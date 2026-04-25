---
title: "国内如何用上Claude code桌面版（图文教程） #claude #claudecode #cc #ai #agi"
source: "https://www.douyin.com/article/7632166483413486857"
author:
published:
created: 2026-04-25
description: "国内如何用上Claude code桌面版（图文教程） #claude #claudecode #cc #ai #agi - 杜一的人生实验室于20260424发布在抖音，已经收获了5.3万个喜欢，来抖音，记录美好生活！"
tags:
  - "clippings"
---
国内如何用上Claude code桌面版（图文教程）
一个是价格。
Claude Max 20x 是每月 200 美金。

另一个是账号。
最麻烦的地方在于：它可能要求外籍证件和真人验证。
如果身份资料过不了，账号就有被限制甚至封掉的风险。
一个月前，我跑通了在国内终端使用 Claude Code 的方式。
![图片描述](https://p3-sign.douyinpic.com/tos-cn-i-jm8ajry58r/b2bb7231466f450187368305f8bc472f~tplv-dy-long-article:0:0.jpeg?lk3s=138a59ce&x-expires=1778306400&x-signature=rjNcZKAv5LiBaOBjkVzBthz00Nw%3D&from=327834062)

在国内使用 Claude Code，不打开终端命令行，直接把 Claude Code 桌面版用起来的方式。

跑通以后，桌面端大概长这样。
![](assets/国内如何用上Claude%20code桌面版（图文教程）/file-20260425142133260.png)
桌面版 Claude Code 跑通效果

先说说我自己用 Claude Code 几个月下来的感觉：
Claude Code 强，一半是模型强，一半是应用强。
就像一个人干活厉害，不能只有脑子好。还得有一副好身体。脑子负责想。身体负责看文件，改代码，跑命令，检查结果。以前这副身体主要在终端里。

现在 Claude Desktop（Claude 桌面客户端）里也有了一个入口。
这篇就写：如何不用终端命令行，把 Claude Desktop 接到第三方 API（模型接口）。
**我用 Kimi 举例。** 火山方舟、小米、其他支持 Anthropic-compatible（兼容 Anthropic 格式）的接口，逻辑一样。

## 先说准备
你需要三样东西：
第一，Claude Desktop。
Claude 的 Mac 桌面客户端。
第二，一个可用的第三方 API。
比如 Kimi。比如火山方舟。比如小米。比如其他支持 Anthropic-compatible（兼容 Anthropic 格式）的接口。
第三，对应服务商的 Base URL（接口地址）和 API Key（接口密钥）。

本文用 Kimi 举例。如果你也用 Kimi，后台地址是：`https://www.kimi.com/code/console`这里拿 Kimi 的 API Key。后面填 Base URL（接口地址）时，也填 Kimi Coding Plan 对应的地址。

三条命令分别执行，把第二行的 sk-你的Key 换成你在 302.ai 复制的实际 Key。
```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://api.302.ai", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "sk-HDj6BCJ4hGl4lEZe8OPLFBzSLls8Vz600QXK0GyKmH6KQ4A2", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_MODEL", "claude-sonnet-4-5", "User")

$env:ANTHROPIC_API_KEY="sk-HDj6BCJ4hGl4lEZe8OPLFBzSLls8Vz600QXK0GyKmH6KQ4A2"
$env:ANTHROPIC_BASE_URL="https://api.302.ai/anthropic"
```

## 第一步：下载 Claude Desktop
打开这个地址：claude.ai,下载 `Claude`。
如果你已经装过 Claude Desktop，
这一步可以跳过。

## 第二步：打开 Claude for Mac
打开以后，会看到这个页面。
点 \`Get started\`。
打开 Claude for Mac
先不用登录 Anthropic 官方账号。

## 第三步：打开开发者模式
在顶部菜单栏找到：
\`Help\`（帮助）
然后进入：
\`Troubleshooting\`（故障排查）
再点：
\`Enable Developer Mode\`（启用开发者模式）
启用开发者模式
它会弹出一个提示。
点 \`Enable\`。
确认启用开发者模式

## 第四步：确认开发者模式已经打开

如果你再次进入：

\`Help -> Troubleshooting\`

看到的是：

\`Disable Hardware Acceleration\`（关闭硬件加速）

说明开发者模式已经打开了。

开发者模式已开启

这一步不用点任何东西。

看到这个状态就可以。

## 第五步：进入第三方推理配置

开发者模式打开以后，

顶部菜单会多出一个：

\`Developer\`（开发者）

点进去，

选择：

\`Configure Third-Party Inference...\`（配置第三方推理）

进入第三方推理配置

点这个。

## 第六步：填写第三方 API

进入配置页以后，

选：\`Gateway\`

它下面会写：\`Anthropic-compatible\`照着下面填。

我用 Kimi 举例。

\`Gateway base URL\`（网关接口地址）：

\`https://api.kimi.com/coding\\\`

\`Gateway API key\`（网关接口密钥）：

填你在 Kimi Code Console 里生成的 API Key。

\`Gateway auth scheme\`（网关认证方式）保持：\`bearer\`

填完点右下角：

\`Apply locally\`（应用到本地）

填写 Gateway 配置

其他服务商也是一样的逻辑：

| 服务商 | Base URL（接口地址） | API Key（接口密钥） |

| 火山方舟 Coding Plan | 火山方舟控制台生成 |

| 小米或其他服务商 | 填服务商给你的 Anthropic-compatible 地址 | 对应服务商后台生成 |

**这里不要混着填。**

比如：Kimi 的 Key，配 Kimi 的 Base URL。

火山方舟的 Key，配火山方舟的 Base URL。

小米的 Key，配小米的 Base URL。

如果报：\`401\`认证失败。

检查 API Key 和 Base URL 是不是同一个平台。

## 第七步：重启 Claude Desktop

点完 \`Apply locally\` 后，会出现这个弹窗：

\`Relaunch Claude?\`

点：

\`Relaunch now\`（立即重启）

重启 Claude Desktop

## 第八步：选择 Gateway 进入

重启后，

你会看到一个选择页面。

选第一个：\`Continue with Gateway\`

下面写着 \`No Anthropic account needed\` 就对了。

这句话的意思是：不需要 Anthropic 官方账号。

选择 Gateway

不要选下面的 \`Sign in to Anthropic\`。

## 第九步：发一句话测试

进入以后，新建一个任务。

先不要上来就让它写代码。先发一句最简单的：

\`\`\`你好\`\`\`

如果它能正常回复，并且右下角显示：

\`Kimi-k2.6\`

说明这条第三方 API 已经接上了。Kimi-k2.6 测试成功

左下角也会出现：\`Cowork 3P | Gateway\`3P 是 Third-Party（第三方）。

**看到这个就对了。**

## 第十步：确认 Cowork 可用

比如你可以让它：整理截图,分析文件,写一段代码,优化一周计划。

或者更具体一点：你把一堆截图丢给它，让它帮你挑出适合做教程的图。

你把一份简历丢给它，让它按岗位要求重构表达。

你把一篇文章草稿丢给它，让它帮你检查结构、删掉废话、补上例子。

你把一个产品页面截图丢给它，让它帮你拆设计问题。

这才是它和普通聊天窗口不一样的地方。

## 最后说一下我的使用感受

Claude Code 当然可以写代码。

但它不只是写代码。

不写代码的人，也可以用它体验更先进的生产力。

比如：看参考图，拆海报设计。

看草稿和截图，改文章结构。

看岗位 JD（招聘要求），重构简历。

看一个文件夹，整理项目资料。

配置只是门票。

你可以先不用命令行，

先用桌面版摸到这套新生产力。

先跑起来。

跑起来以后，

很多事情你自然会重新理解。

暂停

01:01 / 05:13 直播

00:00

进入全屏H

网页全屏Y

- 不开启

倍速

 <video controls=""><source src="https://sf5-hl-ali-cdn-tos.douyinstatic.com/obj/tos-cn-ve-2774/9e8ce102891f408cbc4c9a406fc654cf?__vid=7632166483413486857" type=""> <source src="https://sf6-cdn-tos.douyinstatic.com/obj/tos-cn-ve-2774/9e8ce102891f408cbc4c9a406fc654cf?__vid=7632166483413486857" type=""></video>

点击按住可拖动视频

316 6 33

举报

发布时间：2026.04.24

[

杜一的人生实验室

](https://www.douyin.com/user/MS4wLjABAAAAF9_gcrvRn_mzg0ZLe_VFxwtgj9OyUZTnJNMidsIB6XLOaO0K6JEqayQYZS7BfTSF)

粉丝3526获赞5.3万

## 推荐视频

服务异常，请刷新重试

全部评论

留下你的精彩评论吧

大家都在搜： [claude](https://www.douyin.com/search/claude?aweme_id=7632166483413486857&enter_from=article_detail&gid=7632166483413486857&source=comment_related_search)

服务异常，刷新拉取数据

[

杜一的人生实验室

](https://www.douyin.com/user/MS4wLjABAAAAF9_gcrvRn_mzg0ZLe_VFxwtgj9OyUZTnJNMidsIB6XLOaO0K6JEqayQYZS7BfTSF)

粉丝3526获赞5.3万

## 推荐视频

服务异常，请刷新重试

拖拽到此处完成下载

图片将完成下载

AIX智能下载器