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

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#%E5%9C%A8%E7%81%AB%E5%B1%B1%E5%BC%95%E6%93%8E%E8%8E%B7%E5%8F%96%E5%AF%B9%E5%BA%94%E7%9A%84%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E7%9A%84%E5%80%BC)

主要分为三部分, 火山方舟/字节Tos/音频识别大模型

### 火山方舟

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#%E7%81%AB%E5%B1%B1%E6%96%B9%E8%88%9F)

#### MODEL_ID

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#model_id)

⚠️: 最新版本的 AI-Media2Doc 已经不再需要 ENDPOINT_ID, 由 MODEL_ID 代替。

登录[方舟控制台](https://console.volcengine.com/ark/region:ark+cn-beijing/openManagement?projectName=default)。进入开通管理, 选择开通一个大语言模型。 推荐使用 `doubao-1-5-pro-32k-250115` 。点击开通之后点击该大模型进入详情页，选择通用 LLM(没有就选主线模型), 复制红框内的 `模型 ID`，即为 `MODEL_ID` 的值。

[![model id](https://github.com/hanshuaikang/AI-Media2Doc/raw/main/docs/images/model_id.png)](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/docs/images/model_id.png)

#### ARK_API_KEY

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#ark_api_key)

在 API Key 管理中创建一个 API Key [参考文档](https://www.volcengine.com/docs/82379/1399008#_3-%E5%88%9B%E5%BB%BAAPIKey) 你就得到了 `ARK_API_KEY` 的值。

### S3对象存储服务, 以火山引擎为例，你可以选择其他兼容 S3 协议的对象存储服务商。

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#s3%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E6%9C%8D%E5%8A%A1-%E4%BB%A5%E7%81%AB%E5%B1%B1%E5%BC%95%E6%93%8E%E4%B8%BA%E4%BE%8B%E4%BD%A0%E5%8F%AF%E4%BB%A5%E9%80%89%E6%8B%A9%E5%85%B6%E4%BB%96%E5%85%BC%E5%AE%B9-s3-%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E6%9C%8D%E5%8A%A1%E5%95%86)

#### 创建 bucket 设置跨域规则

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#%E5%88%9B%E5%BB%BA-bucket-%E8%AE%BE%E7%BD%AE%E8%B7%A8%E5%9F%9F%E8%A7%84%E5%88%99)

登录[对象存储控制台](https://console.volcengine.com/tos) 创建一个 bucket, 创建完毕之后进入该 bucket。点击右侧权限管理, 找到跨域访问设置, 新建一条跨域访问规则。

[![tos access key](https://github.com/hanshuaikang/AI-Media2Doc/raw/main/docs/images/cors.png)](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/docs/images/cors.png)

当然你也可以根据实际情况灵活选择。

#### STORAGE_ENDPOINT

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#storage_endpoint)

点击 **桶列表** -> **点进去你创建的那个 bucket** -> **点击概览** -> **眼睛往下看**

你会看到一个访问域名, TOS_ENDPOINT 的值就是红框框里面那个，不同的区域 TOS_ENDPOINT 的值可能不一样。

[![tos access key](https://github.com/hanshuaikang/AI-Media2Doc/raw/main/docs/images/tos_endpoint.png)](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/docs/images/tos_endpoint.png)

#### STORAGE_BUCKET

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#storage_bucket)

`STORAGE_BUCKET` 的值就是你创建的 bucket 的名称。

#### STORAGE_REGION

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#storage_region)

`STORAGE_REGION` 的值就是你创建的 bucket 的区域, 例如 `cn-beijing`。

#### STORAGE_ACCESS_KEY 和 STORAGE_SECRET_KEY

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#storage_access_key-%E5%92%8C-storage_secret_key)

进入 [IAM控制台](https://console.volcengine.com/iam/keymanage) 创建一个访问密钥, 你就得到了 `STORAGE_ACCESS_KEY` 和 `STORAGE_SECRET_KEY` 的值。

### 音频识别大模型

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#%E9%9F%B3%E9%A2%91%E8%AF%86%E5%88%AB%E5%A4%A7%E6%A8%A1%E5%9E%8B)

火山方舟每个音频识别大模型都提供了 20 个小时的试用额度, 可以轮流试用。

登录录音文件识别大模型控制台([https://console.volcengine.com/speech/service](https://console.volcengine.com/speech/service)), 点击右侧**语音识别->录音文件识别**(注意不是录音文件识别大模型)， 创建一个应用, 你就得到了 `AUC_APP_ID` 和 `AUC_ACCESS_TOKEN` 和 `AUC_CLUSTER_ID` 的值。

#### AUC_APP_ID

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#auc_app_id)

`AUC_APP_ID` 的值就是你创建的应用的 ID。

#### AUC_ACCESS_TOKEN

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#auc_access_token)

`AUC_ACCESS_TOKEN` 的值就是你创建的应用的 Access Token。

#### AUC_CLUSTER_ID

[](https://github.com/hanshuaikang/AI-Media2Doc/blob/main/backend/README.md#auc_cluster_id)

点击试用 `录音文件识别-通用-标准版` 或者极速版，**开通试用之后有 20 个小时的试用额度**，`Cluster ID` 列就表示 AUC_CLUSTER_ID 的值。