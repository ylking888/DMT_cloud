项目地址：[Usagi-org/ai-goofish-monitor: 基于 Playwright 和AI过滤的闲鱼多任务实时/定时监控与智能分析工具，配备了功能完善的后台管理界面。帮助用户节省闲鱼商品过滤，能及时找到心仪商品。](https://github.com/Usagi-org/ai-goofish-monitor)
- 

# 重要步骤

## 克隆本项目到本地

```cmd
git clone https://github.com/Usagi-org/ai-goofish-monitor
cd ai-goofish-monitor
```

## 安装依赖

```cmd
pip install -r requirements.txt
```

## 获取登录状态 (重要!)

为了让爬虫能够以登录状态访问闲鱼，必须先提供有效的登录凭证。我们推荐使用Web UI来完成此操作：

运行

```cmd
playwright install
```

## 修改配置文件中《AI 模型相关配置》部分

使用记事本打开.env.example文件

- 模型的API Key。 # 申请地址：https://cloud.siliconflow.cn/ (注册后点击“API密钥” -> “新建密钥”) OPENAI_API_KEY="sk-..." # 这里填入你在**硅基流动**获取的以 sk- 开头的密钥

- 模型的API接口地址。 # 硅基流动的官方兼容地址如下，注意最后一定要带 /v1/ OPENAI_BASE_URL="https://api.siliconflow.cn/v1/"

- 使用的模型名称。 # 推荐使用 DeepSeek-V3 (性价比极高，效果好) 或 Qwen/Qwen2.5-7B-Instruct (部分版本免费) # 注意：模型名称必须与平台列表里的一字不差 OPENAI_MODEL_NAME="deepseek-ai/DeepSeek-V3"

- (可选) 为AI请求配置HTTP/S代理。 # 因为是国内服务，这里留空即可！！ PROXY_URL=""

- ... (其他配置保持不变) ...

- 是否启用enable_thinking参数 
  DeepSeek V3 不需要 thinking，如果是 R1 版本才需要。普通任务建议 V3 即可。 ENABLE_THINKING=false

- 是否启用response_format参数 
  硅基流动的 DeepSeek 模型支持 JSON 模式，可以设为 true ENABLE_RESPONSE_FORMAT=true

  使用命令行

  ```
  copy .env.example .env
  ```

  

## 运行登录脚本

如果您可以在本地或带桌面的服务器上运行程序，也可以使用传统的脚本方式：

```
python login.py
```

因为我的python安装在别的目录下，所以python执行的时候要带目录

```
"D:\openvoicev2-fix\openvoicev2\py310\python.exe" login.py
```

运行后会弹出一个浏览器窗口，请使用**手机闲鱼App扫描二维码**完成登录。成功后，程序会自动关闭，并在项目根目录生成一个 `xianyu_state.json` 文件。

![1764751847191](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764751847191.png)

![1764751933147](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764751933147.png)



## 启动 Web 服务

一切就绪后，启动 Web 管理后台服务器。

```
python web_server.py
```

因为我的python安装在别的目录下，所以python执行的时候要带目录

```
 "D:\openvoicev2-fix\openvoicev2\py310\python.exe" web_server.py
```

![1764751761857](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764751761857.png)

#### 默认凭据

如果未在 `.env` 文件中设置认证凭据，系统将使用以下默认值：

- 用户名：`admin`
- 密码：`admin123`

**⚠️ 重要：生产环境请务必修改默认密码！**

![1764751977067](C:\Users\ylking\AppData\Roaming\Typora\typora-user-images\1764751977067.png)

## 开始使用

在浏览器中打开 `http://127.0.0.1:8000` 访问管理后台。

1. 在 **“任务管理”** 页面，点击 **“创建新任务”**。
2. 在弹出的窗口中，用自然语言描述你的购买需求（例如：“我想买一台95新以上的索尼A7M4相机，预算1万3以内，快门数低于5000”），并填写任务名称、关键词等信息。
3. 点击创建，AI将自动为你生成一套复杂的分析标准。
4. 回到主界面，为任务添加定时或直接点击启动，开始自动化监控！