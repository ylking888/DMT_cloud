项目地址：[DragonChenCL/ai-doctor: ai多医生会诊](https://github.com/DragonChenCL/ai-doctor)
## 📖 项目预览

[https://dragonchencl.github.io/ai-doctor/](https://dragonchencl.github.io/ai-doctor/)

根据提供的项目信息，该项目（ai-doctor）目前未直接提供Docker部署配置（无Dockerfile或docker-compose.yml相关内容），主要采用前端原生部署方式。以下是基于Windows 10环境的详细部署步骤（含常规本地部署和Docker化部署两种方案）：

## 常规本地部署

#### 前置条件
- 安装 Node.js（v16.0.0 及以上，推荐v16+）下载地址：[https://nodejs.org/](https://nodejs.org/)，安装时勾选"Add to PATH"
- 安装 pnpm（推荐，也可使用npm）打开命令提示符（CMD）或PowerShell，执行：
  ```
      npm install -g pnpm
    ```
![](assets/AI%20医疗会诊面板/file-20251210155215309.png)
#### 部署步骤

1. **克隆项目代码**打开CMD/PowerShell，执行：
   ```Bash
    # 克隆仓库（替换为实际仓库地址，若提供的链接可直接使用）
    git clone https://github.com/DragonChenCL/ai-doctor.git
    # 进入项目目录
    cd ai-doctor
    ```
![](assets/AI%20医疗会诊面板/file-20251210155348533.png)
2. **安装依赖**
```
    # 使用pnpm（推荐）
    pnpm install
    # 若pnpm安装失败，可使用npm
    npm install
  ```
3. **启动开发环境**用于本地开发和调试，默认地址：[http://localhost:5173](http://localhost:5173)
 ```Bash
    pnpm dev
    # 或使用npm
    npm run dev
    ```
![](assets/AI%20医疗会诊面板/file-20251210155706178.png)
4. **构建生产版本（可选）**若需要部署到服务器，可先构建生产包：
 ```Bash
    # 构建生产版本，产物在dist目录
    pnpm build
    # 或使用npm
    npm run build
    
    # 预览生产版本（可选）
    pnpm preview --port 4173
    ```
 **访问应用**开发环境启动后，打开浏览器访问：`http://localhost:5173`
![](assets/AI%20医疗会诊面板/file-20251210155900171.png)
## 📚 使用指南
### 第一步：配置医生
1. 点击右上角的 **"设置"** 按钮
2. 在 **"医生配置"** 标签页中添加医生：
    
    - 输入医生名称（例如：Dr. GPT-4）
    - 选择供应商（OpenAI规范 / Anthropic规范 / Gemini规范 / 硅基流动 / 魔搭社区）
    - 填写对应的 API Key
    - 可选：自定义 Base URL（用于代理或私有部署）
    - 选择或输入模型名称
    - 可选：自定义医生的提示词
3. 点击 **"添加医生"** 按钮添加更多医生
    
4. 在 **"问诊医生"** 标签页中选择参与本次会诊的医生
    

### 第二步：输入病例信息
1. 在主页面填写病例信息：
    
    - 患者姓名（必填）
    - 年龄
    - 既往疾病史
    - 本次问题（必填）
2. 点击 **"开始会诊"** 按钮
 
### 第三步：观察会诊过程

- 医生将轮流发言，提出自己的诊断和建议
- 每轮讨论结束后，医生们会互相评估
- 被多数医生标记为"不太准确"的医生将被淘汰
- 会诊将持续到：
    - 只剩一位医生（该医生的诊断为最终答案）
    - 连续多轮无医生被淘汰（达到设定的上限）

### 第四步：查看最终答案


会诊结束后，系统会生成一份完整的诊断总结，包括：

- 核心诊断
- 诊断依据
- 鉴别诊断
- 检查建议
- 治疗建议
- 随访计划
- 风险提示

点击 **"查看最终答案"** 按钮即可查看，还可以导出为图片保存。

## 🔧 配置说明

### 支持的 AI 供应商
#### 1. OpenAI规范
- **API Key 获取**：访问 [OpenAI Platform](https://platform.openai.com/api-keys)
- **推荐模型**：
    - `gpt-4o`：最新、最强大的模型
    - `gpt-4o-mini`：更快、更经济的选择
    - `gpt-4-turbo`：高性能模型
- **Base URL**：默认为 `https://api.openai.com/v1`
- **说明**：符合 OpenAI API 规范的服务商均可使用此选项
![](assets/AI%20医疗会诊面板/file-20251210160925691.png)
如果将API Key输入全局设置后提示获取模型失败，排查网络连接
curl -x http://127.0.0.1:17890 -H "Authorization: Bearer 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" https://api.openai.com/v1/models
如果返回模型列表表示网络没有问题
![](assets/AI%20医疗会诊面板/file-20251210162404691.png)
#### 2. Anthropic规范【提示不对新用户开放，无法获取API Key】
- **API Key 获取**：访问 [Anthropic Console](https://console.anthropic.com/)
- **推荐模型**：
    - `claude-3-5-sonnet-20241022`：最新旗舰模型
    - `claude-3-opus-20240229`：最强推理能力
    - `claude-3-haiku-20240307`：快速响应
- **Base URL**：默认为 `https://api.anthropic.com/v1`
- **说明**：符合 Anthropic API 规范的服务商均可使用此选项

#### 3. Gemini规范【失败，不开放，无法获取API Key】
- **API Key 获取**：访问 [Google AI Studio](https://aistudio.google.com/app/apikey)
- **推荐模型**：
    - `gemini-1.5-pro`：旗舰模型
    - `gemini-1.5-flash`：快速模型
- **Base URL**：默认为 `https://generativelanguage.googleapis.com/v1beta`
- **说明**：符合 Gemini API 规范的服务商均可使用此选项

#### 4. 硅基流动
- **API Key 获取**：访问 [硅基流动控制台](https://cloud.siliconflow.cn/account/ak)
- **推荐模型**：
    - `Qwen/Qwen2.5-7B-Instruct`：通义千问系列
    - `THUDM/glm-4-9b-chat`：智谱 GLM 系列
    - `Pro/Qwen/Qwen2.5-72B-Instruct`：高性能通义千问
- **Base URL**：默认为 `https://api.siliconflow.cn`
- **说明**：硅基流动是国内领先的 AI 推理加速平台，提供高性价比的模型服务
- **文档**：[硅基流动 API 文档](https://docs.siliconflow.cn/cn/userguide/introduction)

#### 5. 魔搭社区【国内，不走墙，需要修改js代码加个判断】
- **API Key 获取**：访问 [魔搭社区 API-KEY](https://modelscope.cn/my/myaccesstoken)
- **推荐模型**：
    - `qwen-turbo`：通义千问 Turbo
    - `qwen-plus`：通义千问 Plus
    - `qwen-max`：通义千问 Max
- **Base URL**：默认为 `https://dashscope.aliyuncs.com`
- **说明**：魔搭社区是阿里云推出的模型即服务平台，提供丰富的国产大模型
- **文档**：[魔搭社区 API 文档](https://modelscope.cn/docs/model-service/API-Inference/intro)