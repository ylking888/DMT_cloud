---
up:
  - "[[../Home|Home]]"
tags:
  - NAS
  - 群晖
  - Container_Manager
---
遇到访问受限，没有办法搜索到镜像去安装
![](assets/NAS的Container%20Manager访问受限解决方案【暂未成功】/file-20260422172935075.png)
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
version: "3"
services:
  emulatorjs:
    image: lscr.io/linuxserver/emulatorjs:latest
    platform: linux/amd64
    container_name: emulatorjs
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/emulatorjs/config:/config
      - /volume1/docker/emulatorjs/data:/data
    ports:
      - 3000:3000
      - 8080:80
    restart: unless-stopped
```
用它去Container Manager的项目上拉取




```
version: "3"
services:
  # MT Photos 主服务
  mtphotos:
    image: mtphotos/mt-photos:latest
    container_name: mtphotos
    restart: always
    ports:
      - 8063:8063
    volumes:
      - /volume2/docker/mtphotos/config:/config
      - /volume2/docker/mtphotos/upload:/upload
      - /volume2/photo:/photos
    environment:
      - TZ=Asia/Shanghai
    depends_on:
      - mtphotos_ai          # 确保主服务在 AI 服务之后启动
      - mtphotos_face_api    # 确保主服务在人脸识别 API 之后启动

  # AI 核心服务（负责场景识别、以文搜图、OCR文字识别）
  mtphotos_ai:
    image: mtphotos/mt-photos-ai:onnx-latest    # onnx-latest 兼容性好，资源占用相对较低
    container_name: mtphotos_ai
    restart: always
    ports:
      - 8060:8000    # 注意：容器内是8000端口，映射到宿主机的8060
    environment:
      - API_AUTH_KEY=11111111   # 认证密钥，可自行修改（需记住）

  # 人脸识别专用服务（基于 InsightFace，准确性更高）
  mtphotos_face_api:
    image: crpi-gcuyquw9co62xzjn.cn-guangzhou.personal.cr.aliyuncs.com/devfox101/mt-photos-insightface-unofficial:latest
    container_name: mtphotos_face_api
    restart: always
    ports:
      - 8066:8066
    environment:
      - API_AUTH_KEY=11111111   # 建议与上面的密钥保持一致，方便记忆
```
