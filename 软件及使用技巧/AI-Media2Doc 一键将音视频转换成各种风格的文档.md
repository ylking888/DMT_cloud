项目地址：https://github.com/hanshuaikang/AI-Media2Doc
# 1、下载项目最新版
克隆项目git clone https://github.com/hanshuaikang/AI-Media2Doc.git
或下载最新版本到本地，解压到一个目录下
# 2、安装 Node.js
我本地的 node 版本为 `22.17.0`
D:\AIMedia2Doc>node -v
v22.17.0

这是一个 **Python 后端 + 前端** 的项目：
```Txt
AI-Media2Doc/ 
├── backend/ ← Python 后端 
│ └── requirements.txt 
├── frontend/ ← 前端目录（这里才有 package.json）
│ └── package.json 
├── docker-compose.yml 
└── README.md
```
# 3、安装依赖
```Shell
# 进入前端目录再安装
cd frontend
npm install
```

# 4、启动服务
```shell
npm run dev
```
## 浏览器访问
打开浏览器访问 `http://localhost:5173/` 即可。
![](assets/AI-Media2Doc%20一键将音视频转换成各种风格的文档/file-20251211094957179.png)
# 5、后端部署
## 5.1、安装依赖
```shell
cd backend
pip install -r requirements.txt
```
![](assets/AI-Media2Doc%20一键将音视频转换成各种风格的文档/file-20251211095552358.png)
报错：这是一个典型的 **Python 依赖版本冲突** 问题。
### 🔴 问题原因
- 项目依赖的库 **`melotts` (用于语音合成)** 强制要求 PyTorch 版本必须 **小于 2.0** (`torch<2.0`)。
- 你当前的电脑环境安装了 **PyTorch 2.3.0** (而且是带 CUDA 12.1 的版本)。
- 两者互不兼容，导致报错。
#### 第一步：卸载当前冲突的 PyTorch
在终端（backend 目录下）执行：
```Bash
pip uninstall torch torchvision torchaudio
```
_(过程中如果提示确认，输入 `y` 并回车)_
#### 第二步：安装兼容版本的 PyTorch (1.13.1)
这里分为 **CPU版本** 和 **GPU版本**，请根据你的需求选择：
**选项 A：如果你只需要 CPU 运行（简单，文件小）**
```Bash
pip install torch==1.13.1 torchvision==0.14.1 torchaudio==0.13.1
```
**选项 B：如果你有 NVIDIA 显卡并需要 GPU 加速（推荐）**  
_注意：Torch 1.x 通常配合 CUDA 11.x。_
```Bash
pip install torch==1.13.1+cu117 torchvision==0.14.1+cu117 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu117
```
#### 第三步：重新安装项目依赖
安装好正确的 Torch 后，再次运行项目依赖安装命令，确保其他库安装完整：
```Bash
pip install -r requirements.txt
```
### 💡 重要提示：关于虚拟环境
看你的报错信息，你似乎是直接安装在全局 Python 环境或者现有的环境中。
为了避免以后别的项目需要 Torch 2.0 导致再次冲突，强烈建议使用 **Conda** 或 **venv** 创建一个独立的虚拟环境：
```Bash
# 1. 创建名为 media2doc 的虚拟环境 (Python 3.10)
conda create -n media2doc python=3.10
# 或
python -m venv venv
D:\OpenVoiceV2-fix\OpenVoiceV2\py310\python -m venv venv

# 2. 激活环境
.\venv\Scripts\activate
# (注意：执行完这行后，你的命令行前面应该会出现 `(venv)` 的字样，说明成功进入了独立环境)

# 3. 在这个新环境中重新安装依赖
pip install torch==1.13.1+cu117 torchvision==0.14.1+cu117 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu117
# 如果安装报错，下载失败，请按照下面的方式先下载再安装
pip install -r requirements.txt
```
对于这种 2GB 以上的大文件，直接用 pip 下载非常容易失败。推荐使用 **“迅雷/IDM/浏览器手动下载，再本地安装”** 的方式，或者**换用国内镜像源**。
**步骤 1：下载 `whl` 文件**  
复制下面的链接到浏览器或下载工具中进行下载：
> **[点击下载 torch-1.13.1+cu117-cp310-win_amd64.whl](https://download.pytorch.org/whl/cu117/torch-1.13.1%2Bcu117-cp310-cp310-win_amd64.whl)**  
> _(注意：这个文件约 2.25GB，请耐心等待下载完成)_
**步骤 2：安装下载好的文件**  
假设你把文件下载到了 `D:\` 文件夹下。  
在你的 CMD 窗口（确保已经激活了 venv）中执行：
```cmd
# 注意把下面的路径换成你实际下载文件的路径
pip install "D:\torch-1.13.1+cu117-cp310-cp310-win_amd64.whl"
```
![](assets/AI-Media2Doc%20一键将音视频转换成各种风格的文档/file-20251211101920912.png)

**步骤 3：补全另外两个小文件**  
Torch 装好后，还需要 torchvision 和 torchaudio。这两个文件比较小，直接 pip 安装即可：
```cmd
pip install torchvision==0.14.1+cu117 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu117
```
## 5.2、 配置环境变量(除了 WEB_ACCESS_PASSWORD 之外缺一不可)
```shell
export MODEL_ID=xxxx
export LLM_API_KEY=xxxx
export STORAGE_ACCESS_KEY=xxxx
export STORAGE_SECRET_KEY=xxxx
export STORAGE_ENDPOINT=xxxx
export STORAGE_REGION=xxxx
export STORAGE_BUCKET=xxxx
export AUC_APP_ID=xxxx
export AUC_ACCESS_TOKEN=xxxx
export AUC_CLUSTER_ID=xxxx 
export WEB_ACCESS_PASSWORD=xxx
```
**环境变量说明:**
**WEB_ACCESS_PASSWORD**【选填】:前端访问后端服务的密码,后端指定之后需要在前端自定义设置-> 访问密码填写该密码才可以正常使用。

## 3. 启动服务
```shell
python app.py
```

## 在火山引擎获取对应的环境变量的值
主要分为三部分, 火山方舟/字节Tos/音频识别大模型
### 火山方舟
#### MODEL_ID
⚠️: 最新版本的 AI-Media2Doc 已经不再需要 ENDPOINT_ID, 由 MODEL_ID 代替。
登录[方舟控制台](https://console.volcengine.com/ark/region:ark+cn-beijing/openManagement?projectName=default)。进入开通管理, 选择开通一个大语言模型。 推荐使用 `doubao-1-5-pro-32k-250115` 。点击开通之后点击该大模型进入详情页，选择通用 LLM(没有就选主线模型), 复制红框内的 `模型 ID`，即为 `MODEL_ID` 的值。
[![model id](https://github.com/hanshuaikang/AI-Media2Doc/raw/main/docs/images/model_id.png)](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/docs/images/model_id.png)
#### ARK_API_KEY
在 API Key 管理中创建一个 API Key [参考文档](https://www.volcengine.com/docs/82379/1399008#_3-%E5%88%9B%E5%BB%BAAPIKey) 你就得到了 `ARK_API_KEY` 的值。

### S3对象存储服务, 以火山引擎为例，你可以选择其他兼容 S3 协议的对象存储服务商。
#### 创建 bucket 设置跨域规则
登录[对象存储控制台](https://console.volcengine.com/tos) 创建一个 bucket, 创建完毕之后进入该 bucket。点击右侧权限管理, 找到跨域访问设置, 新建一条跨域访问规则。
[![tos access key](https://github.com/hanshuaikang/AI-Media2Doc/raw/main/docs/images/cors.png)](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/docs/images/cors.png)
当然你也可以根据实际情况灵活选择。
#### STORAGE_ENDPOINT
点击 **桶列表** -> **点进去你创建的那个 bucket** -> **点击概览** -> **眼睛往下看**
你会看到一个访问域名, TOS_ENDPOINT 的值就是红框框里面那个，不同的区域 TOS_ENDPOINT 的值可能不一样。
[![tos access key](https://github.com/hanshuaikang/AI-Media2Doc/raw/main/docs/images/tos_endpoint.png)](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/docs/images/tos_endpoint.png)
#### STORAGE_BUCKET

`STORAGE_BUCKET` 的值就是你创建的 bucket 的名称。

#### STORAGE_REGION

`STORAGE_REGION` 的值就是你创建的 bucket 的区域, 例如 `cn-beijing`。

#### STORAGE_ACCESS_KEY 和 STORAGE_SECRET_KEY

进入 [IAM控制台](https://console.volcengine.com/iam/keymanage) 创建一个访问密钥, 你就得到了 `STORAGE_ACCESS_KEY` 和 `STORAGE_SECRET_KEY` 的值。

### 音频识别大模型

火山方舟每个音频识别大模型都提供了 20 个小时的试用额度, 可以轮流试用。

登录录音文件识别大模型控制台([https://console.volcengine.com/speech/service](https://console.volcengine.com/speech/service)), 点击右侧**语音识别->录音文件识别**(注意不是录音文件识别大模型)， 创建一个应用, 你就得到了 `AUC_APP_ID` 和 `AUC_ACCESS_TOKEN` 和 `AUC_CLUSTER_ID` 的值。

#### AUC_APP_ID

`AUC_APP_ID` 的值就是你创建的应用的 ID。

#### AUC_ACCESS_TOKEN

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#auc_access_token)

`AUC_ACCESS_TOKEN` 的值就是你创建的应用的 Access Token。

#### AUC_CLUSTER_ID

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#auc_cluster_id)

点击试用 `录音文件识别-通用-标准版` 或者极速版，**开通试用之后有 20 个小时的试用额度**，`Cluster ID` 列就表示 AUC_CLUSTER_ID 的值。