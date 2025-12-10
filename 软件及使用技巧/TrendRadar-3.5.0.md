开源项目地址[sansan0/TrendRadar: 🎯 告别信息过载，AI 助你看懂新闻资讯热点，简单的舆情监控分析 - 多平台热点聚合+基于 MCP 的AI分析工具。监控35个平台（抖音、知乎、B站、华尔街见闻、财联社等），智能筛选+自动推送+AI对话分析（用自然语言深度挖掘新闻：趋势追踪、情感分析、相似检索等13种工具）。支持企业微信/个人微信/飞书/钉钉/Telegram/邮件/ntfy/bark/slack 推送，1分钟手机通知，无需编程。支持Docker部署⭐ 让算法为你服务，用AI理解热点](https://github.com/sansan0/TrendRadar)


# 1、安装windows Hyper-V组件
![](assets/TrendRadar-3.5.0/file-20251210140205898.png)

# 2、安装Docker Desktop
![](assets/TrendRadar-3.5.0/file-20251210140342244.png)

# 3、获取代码
```
git clone https://github.com/sansan0/TrendRadar.git
``` 
但是，git失败，所以我用的方法是到## [Releases](https://github.com/sansan0/TrendRadar/releases)下载了最新版本到本地，解压到文件夹D:\TrendRadar-3.5.0

# 4、获取飞书`Webhook URL` 测试使用
- 在飞书上新建一个群组——创建群组
	- **群模式**：选择对话
	- **群名称**：可以简单命名为 `TrendRadar测试群`。
	- **添加成员**：为了测试不打扰他人，**在搜索框中搜索并添加自己的名字**，创建一个只有一个人的群即可。
	- 创建完成后，就可以在群设置里添加“自定义机器人”,- 给机器人起个名字，例如 “热点雷达”。并获取 `Webhook URL` 。
` https://open.feishu.cn/open-apis/bot/v2/hook/a6d65e5f-0003-43b7-a8ea-26bf83281543`

#  🎛️5、检查设置环境变量
来到代码的目录下，使用记事本查看`.env`文件。
- **开启核心开关**（如果还没开启）：
```
    # 是否启用爬虫 (true/false)
    ENABLE_CRAWLER=true
    # 是否启用通知 (true/false)
    ENABLE_NOTIFICATION=true
```
- 将飞书机器人**webhook URL**添加到指定位置：
```
# 飞书机器人 webhook URL（多账号用 ; 分隔）
FEISHU_WEBHOOK_URL=https://open.feishu.cn/open-apis/bot/v2/hook/a6d65e5f-0003-43b7-a8ea-26bf83281543
```
保存。

# 6、装载Docker镜像并运行
- 在D:\TrendRadar-3.5.0\docker地址栏输入CMD回车进入命令窗口。
目录中的 `docker-compose.yml` 和 `docker-compose-build.yml` 区别在于：
- `docker-compose.yml`：**直接使用线上编译好的镜像**，启动最快，是常规选择。
- `docker-compose-build.yml`：**从源代码重新构建镜像**，仅在你想修改代码或Dockerfile，需要自定义构建时使用。
**使用docker-compose up -d命令**，它会默认读取 `docker-compose.yml` 文件。
![](assets/TrendRadar-3.5.0/file-20251210142541553.png)
此时Docker Desktop上随即运行起trend-rad，单击后可查看运行日志详情。
![](assets/TrendRadar-3.5.0/file-20251210142752787.png)
