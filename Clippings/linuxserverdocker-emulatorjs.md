---
title: "linuxserver/docker-emulatorjs: Web based retro emulation frontend with rom scanning and automated art ingestion."
source: https://github.com/linuxserver/docker-emulatorjs
author:
published:
created: 2026-04-22
description: "Web based retro emulation frontend with rom scanning and automated art ingestion.  - linuxserver/docker-emulatorjs: Web based retro emulation frontend with rom scanning and automated art ingestion."
tags:
  - NAS
  - docker
---
[![Scarf.io pulls](https://camo.githubusercontent.com/bb18844cd607f665e77bdd8ed700a7aed5cb5f343dfa1dcc16a6d1e8b97f3c1a/68747470733a2f2f73636172662e73682f696e7374616c6c732d62616467652f6c696e75787365727665722d63692f6c696e7578736572766572253246656d756c61746f726a733f636f6c6f723d393433393864266c6162656c2d636f6c6f723d353535353535266c6f676f2d636f6c6f723d666666666666267374796c653d666f722d7468652d6261646765267061636b6167652d747970653d646f636b6572)](https://scarf.sh) [![GitHub Stars](https://camo.githubusercontent.com/a41a6bca665ab73ab679bd72cc3028b6f0a02192ed8d4d1c6e75543b278b88f0/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6c696e75787365727665722f646f636b65722d656d756c61746f726a732e7376673f636f6c6f723d393433393864266c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266c6f676f3d676974687562)](https://github.com/linuxserver/docker-emulatorjs) [![GitHub Release](https://camo.githubusercontent.com/9a2e42e4ab599dbed9bfe5a9397cf70f419276f51e8fb0519fa00c4166e0254a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f72656c656173652f6c696e75787365727665722f646f636b65722d656d756c61746f726a732e7376673f636f6c6f723d393433393864266c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266c6f676f3d676974687562)](https://github.com/linuxserver/docker-emulatorjs/releases) [![GitHub Package Repository](https://camo.githubusercontent.com/6f5a0a8a61d645025cda7e7e39a74168c22b84b9c6327afd73ace30feaa9ea35/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76312e7376673f636f6c6f723d393433393864266c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266c6162656c3d6c696e75787365727665722e696f266d6573736167653d4769744875622532305061636b616765266c6f676f3d676974687562)](https://github.com/linuxserver/docker-emulatorjs/packages) [![GitLab Container Registry](https://camo.githubusercontent.com/2eb8efb801dcb0c05be01ba885e41ec68fcd6d115514fa1eea89601ab2b75172/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76312e7376673f636f6c6f723d393433393864266c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266c6162656c3d6c696e75787365727665722e696f266d6573736167653d4769744c61622532305265676973747279266c6f676f3d6769746c6162)](https://gitlab.com/linuxserver.io/docker-emulatorjs/container_registry) [![Quay.io](https://camo.githubusercontent.com/47be5d4e2dc8b81c3c8da6212ba33dcb8016197f6dcafebad217c1e8a186e6d7/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76312e7376673f636f6c6f723d393433393864266c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266c6162656c3d6c696e75787365727665722e696f266d6573736167653d517561792e696f)](https://quay.io/repository/linuxserver.io/emulatorjs) [![Docker Pulls](https://camo.githubusercontent.com/0d52cc9f6b8b55cb9d04efe139c0c192f1a7abdaf31cc5a7080e7ae1fe823de7/68747470733a2f2f696d672e736869656c64732e696f2f646f636b65722f70756c6c732f6c696e75787365727665722f656d756c61746f726a732e7376673f636f6c6f723d393433393864266c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266c6162656c3d70756c6c73266c6f676f3d646f636b6572)](https://hub.docker.com/r/linuxserver/emulatorjs) [![Docker Stars](https://camo.githubusercontent.com/840e9670fe3589168d0ce87b6cb6bd0e2772eccfe4647ea7ae3ec4dad4cadc94/68747470733a2f2f696d672e736869656c64732e696f2f646f636b65722f73746172732f6c696e75787365727665722f656d756c61746f726a732e7376673f636f6c6f723d393433393864266c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266c6162656c3d7374617273266c6f676f3d646f636b6572)](https://hub.docker.com/r/linuxserver/emulatorjs) [![Jenkins Build](https://camo.githubusercontent.com/4bcd671b505cca86824cafb72f75801f6ce6386b7c522e28d70b7dcf6ff8d38e/68747470733a2f2f696d672e736869656c64732e696f2f6a656e6b696e732f6275696c643f6c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266a6f6255726c3d687474707325334125324625324663692e6c696e75787365727665722e696f2532466a6f62253246446f636b65722d506970656c696e652d4275696c646572732532466a6f62253246646f636b65722d656d756c61746f726a732532466a6f622532466d6173746572253246266c6f676f3d6a656e6b696e73)](https://ci.linuxserver.io/job/Docker-Pipeline-Builders/job/docker-emulatorjs/job/master/) [![LSIO CI](https://camo.githubusercontent.com/a86a9102698c9fc0079d64552a638fee9747694d5cb921aa192a8b445fe69e56/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f64796e616d69632f79616d6c3f636f6c6f723d393433393864266c6162656c436f6c6f723d353535353535266c6f676f436f6c6f723d666666666666267374796c653d666f722d7468652d6261646765266c6162656c3d43492671756572793d43492675726c3d687474707325334125324625324663692d74657374732e6c696e75787365727665722e696f2532466c696e7578736572766572253246656d756c61746f726a732532466c617465737425324663692d7374617475732e796d6c)](https://ci-tests.linuxserver.io/linuxserver/emulatorjs/latest/index.html)

[Emulatorjs](https://github.com/linuxserver/emulatorjs)——在浏览器中基于网页的仿真，几乎可移植到任何设备上，适用于许多复古主机。Libretro 和 EmulatorJS 之间混合使用了多种模拟器。

[![emulatorjs](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/emulatorjs-logo.png)](https://github.com/linuxserver/emulatorjs)

## 支持的架构我们利用 docker manifest 进行多平台的认知。更多信息可通过 docker [获取，我们的](https://distribution.github.io/distribution/spec/manifest-v2-2/#manifest-list)公告[请见此处](https://blog.linuxserver.io/2019/02/21/the-lsio-pipeline-project/) 。

简单拉取 `lscr.io/linuxserver/emulatorjs:latest` 应该能获得你拱门的正确图片，但你也可以通过标签拉取特定的拱门图片。

这张图片支持的架构有：

| 建筑 | 可得 | 标签 |
| --- | --- | --- |
| x86-64 | ✅ | amd64-<version tag> |
| arm64 | ✅ | arm64v8-<版本标签> |
| armhf | ❌ |  |

## 应用设置后端可访问：

- [http://yourhost:3000/](http://yourhost:3000/)

你首先需要做的是点击这个界面下载默认的艺术/配置，这样可以在`你的 /data` mount 里建立一个骨架目录。然后把 rom 添加到相应的 `rom` 目录，按照屏幕说明将它们添加到运行在 80 端口的网页前端。

**  
我知道关于项目名称可能会有些混淆，但这个项目（linuxserver/emulatorjs）刚开始时，本意是为自托管用户提供一个简单的前端，使用当时 [ethanaobrien](https://github.com/ethanaobrien) 正在开发的解混淆代码 https://www.emulatorjs.com/ 代码。从那以后，[EmulatorJS](https://github.com/EmulatorJS/EmulatorJS) 发展成了一个基于高度优化、适合网页运行的 [Libretro](https://github.com/libretro) 核心的惊人项目。该项目主要包含[这里](https://github.com/linuxserver/libretro-cores)提供的自定义 libretro 核心。所以总体来说，尽管这个项目的名字和标志都叫它，但它只是一个基于网页的 docker 容器，用于生成一个可用的自托管模拟网站，与 [EmulatorJS](https://github.com/EmulatorJS/EmulatorJS) 没有任何关联。**

**该容器（除配置文件功能外）只生成一组静态文件，这些文件可以托管在任何网络提供商上，甚至对象存储。所有程序都运行在客户端的浏览器中，且不依赖于这个容器。要提取/复制这个网站，就在容器内的 `/emulatorjs/frontend` 路径上。如果你对自己创建的分类系统满意，不想再运行 IPFS 后端，或者想把这些文件上传到其他托管商，你可以直接复制那个目录的内容，然后终止这个容器。当你的集合设置好环境变量 `-e DISABLE_IPFS=true`，这个容器也可以在没有 IPFS 的情况下启动。**

### 只读 ROM 支架
在现有的 ROM 目录中进行只读挂载，可以通过使用特殊的根路径 `/roms` 实现，例如 NES 系统：

`-v /path/to/nes/roms：/roms/nes：ro`

系统的文件夹名称如下：

- 第三
- 街机
- 雅达利2600
- 阿塔里5200
- 阿塔里7800
- colecovision
- 末日
- 英国
- gba
- gbc
- 捷豹
- 猞猁
- msx
- n64
- nds
- 因为
- ngp
- 奥德赛2
- 选它
- psx
- 世嘉 32X
- 世嘉光盘
- 世嘉 GG
- 世嘉 MD
- 世嘉 MS
- 世嘉土星
- 世嘉 SG
- 超任
- 世界杯
- 维克特雷克斯
- ws

### 兼容且经过测试的浏览器
**基于 Chromium 的浏览器** ——无论桌面还是移动端（安卓）都是黄金标准，Chrome/Chromium/Brave/Edge 都应始终使用。他们在 WebAssembly 方面表现最好。

**Firefox**——这功能（性能下降）可以在没有测试过手柄支持的情况下运行。

**Safari iOS**——Safari 表现不错，支持手柄，但最近更新中单个标签页可用的内存（~265MB）导致无法运行 N64 模拟或任何基于 CD 的程序。不要在 iOS 上使用像 Chrome 或 Firefox 这样的 [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) 应用，它们在客户端软件中无法被正确检测。在 iOS 上，你最好的办法是通过 Safari 把网页添加到主屏幕，然后从那里启动，获得全屏界面。

**Edge Xbox Series X/S**——这款游戏表现也很不错，是该项目的基础，尽管最近的主机更新将单个标签页的内存容量从 1GB 降至 128MB，导致无法运行基于 CD 的游戏或 N64。

### 导航基础
**Retroarch 菜单** ——可以通过键盘上的 F1 键、手柄上的启动/选择/R1/L1 同时使用，或在触摸模式下按下左上角的按钮进入 Retroarch 菜单。

**快速滚动** ——菜单中的物品可以通过键盘上的 PgUp/PgDn 或手柄上的 R1/L1 按钮按字母滚动。在触控模式下，滚动可以通过触摸和拖曳（同时长按）上或下来加速滚动。

**对于 Xbox 用户，请在启动游戏后多次点击选择按钮，以确保 B 键不会在浏览器中触发“返回”操作。（官方名称“查看按钮”，即两个小方块）通过按住开始键 3 秒之前，可以触发退出手柄模式并返回浏览器控制。（官方名称“菜单按钮”三行）**

## 用途为了帮助你开始用这个镜像创建容器，你可以用 docker-compose 或 docker cli。

注释

除非参数被标记为“可选”， *否则必须设置* ，且必须提供一个值。

### docker-compose（推荐， [点击这里了解更多信息](https://docs.linuxserver.io/general/docker-compose) ）\---
services:
  emulatorjs:
    image: lscr.io/linuxserver/emulatorjs:latest
    container\_name: emulatorjs
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - SUBFOLDER=/ #optional
    volumes:
      - /path/to/config:/config
      - /path/to/data:/data
    ports:
      - 3000:3000
      - 80:80
      - 4001:4001 #optional
    restart: unless-stopped

### Docker CLI（ [点击此处了解更多信息](https://docs.docker.com/engine/reference/commandline/cli/) ）docker run -d \\
  --name=emulatorjs \\
  -e PUID=1000 \\
  -e PGID=1000 \\
  -e TZ=Etc/UTC \\
  -e SUBFOLDER=/ \`#optional\` \\
  -p 3000:3000 \\
  -p 80:80 \\
  -p 4001:4001 \`#optional\` \\
  -v /path/to/config:/config \\
  -v /path/to/data:/data \\
  --restart unless-stopped \\
  lscr.io/linuxserver/emulatorjs:latest

参数容器通过运行时传递的参数进行配置（如上述）。这些参数之间隔着结肠，分别表示 `<external>：<internal>`。例如，`-p 8080：80` 会暴露容器内部的端口 `80`，允许主机在容器外端口 `8080` 访问。

| 参数 | 功能 |
| --- | --- |
| `-第3000页：3000页` | ROM/艺术作品管理界面，用于生成/管理配置文件和下载艺术作品 |
| `-第80页：80` | 模拟前端，包含用于浏览和启动游戏的静态网页文件 |
| `-第4001页` | IPFS 对等端口，如果你想参与 P2P 网络分发前端艺术作品，请将此转发到互联网 |
| `-e PUID=1000` | 对于用户 ID——详见下文说明 |
| `-e PGID=1000` | 关于 GroupID——详见下文说明 |
| `-e TZ=等/UTC` | 请指定使用时区，详见此[列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) 。 |
| `-e 子文件夹=/` | 为反向代理指定一个子文件夹，比如“/FOLDER/” |
| `-v /config` | 存储用户配置文件的路径 |
| `-v /data` | 存储 ROM/艺术作品的路径 |

文件中的环境变量（Docker 秘密）你可以通过使用特殊的前置 `FILE__` 来设置文件中的任何环境变量。