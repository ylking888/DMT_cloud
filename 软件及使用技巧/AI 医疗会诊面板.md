项目地址：[DragonChenCL/ai-doctor: ai多医生会诊](https://github.com/DragonChenCL/ai-doctor)
## 📖 项目预览

[https://dragonchencl.github.io/ai-doctor/](https://dragonchencl.github.io/ai-doctor/)

根据提供的项目信息，该项目（ai-doctor）目前未直接提供Docker部署配置（无Dockerfile或docker-compose.yml相关内容），主要采用前端原生部署方式。以下是基于Windows 10环境的详细部署步骤（含常规本地部署和Docker化部署两种方案）：

### 方案一：常规本地部署（推荐，基于项目原生方式）

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
