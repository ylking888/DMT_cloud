---
up:
  - "[[../../Home|Home]]"
tags:
  - NAS
  - 群晖
  - Container_Manager
---
遇到访问受限，没有办法搜索到镜像去安装
![](assets/NAS的Container%20Manager访问受限解决方案/file-20260422153414979.png)
## 首先尝试
打开 Container Manager → 注册表 → 右上角 设置 → 新增
添加以下任一稳定仓库（建议多选几个）：
- 网易云：https://hub-mirror.c.163.com
- 腾讯云：https://mirror.ccs.tencentyun.com
- Docker 代理：https://dockerproxy.com
- 可用公共加速：https://docker.mirrors.sjtug.sjtu.edu.cn
添加后：
- 选中 Docker Hub → 编辑
- 勾选刚加的镜像仓库 → 确定 → 重启 Container Manager

## 使用yaml文件安装
比如我们要安装EmulatorJS
在Github上可以搜索到：[linuxserver/docker-emulatorjs: Web based retro emulation frontend with rom scanning and automated art ingestion.](https://github.com/linuxserver/docker-emulatorjs)
说明文档上找到docker-compose
```
services:
  emulatorjs:
    image: lscr.io/linuxserver/emulatorjs:latest
    container_name: emulatorjs
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
```
用它去Container Manager的项目上拉取
![](assets/NAS的Container%20Manager访问受限解决方案/file-20260422163343488.png)


