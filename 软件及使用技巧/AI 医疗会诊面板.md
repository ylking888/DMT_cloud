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
    
4. **构建生产版本（可选）**若需要部署到服务器，可先构建生产包：
    
    ```Bash
    # 构建生产版本，产物在dist目录
    pnpm build
    # 或使用npm
    npm run build
    
    # 预览生产版本（可选）
    pnpm preview --port 4173
    ```
    
5. **访问应用**开发环境启动后，打开浏览器访问：`http://localhost:5173`
    

### 方案二：Docker化部署（需手动创建配置）

由于项目未提供Docker配置，需手动创建Dockerfile和相关配置实现Docker部署。

#### 前置条件

- 已安装 Docker Desktop 并启动（确保Docker服务正常运行）
    

#### 部署步骤

1. **创建Dockerfile**在项目根目录（ai-doctor）下新建文件 `Dockerfile`，内容如下：
    
    ```Dockerfile
    # 阶段1：构建生产版本
    FROM node:16-alpine as builder
    WORKDIR /app
    COPY package*.json ./
    # 安装依赖
    RUN npm install -g pnpm && pnpm install
    COPY . .
    # 构建生产包
    RUN pnpm build
    
    # 阶段2：使用nginx部署
    FROM nginx:alpine
    # 复制构建产物到nginx
    COPY --from=builder /app/dist /usr/share/nginx/html
    # 复制自定义nginx配置（可选，如需解决路由问题）
    # COPY nginx.conf /etc/nginx/conf.d/default.conf
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    ```
    
2. **创建.dockerignore文件**在项目根目录新建 `.dockerignore`，排除不必要文件：
    
    ```Plain
    node_modules
    dist
    .git
    .github
    *.md
    ```
    
3. **构建Docker镜像**在项目根目录执行：
    
    ```Bash
    docker build -t ai-doctor:latest .
    ```
    
4. **运行Docker容器**
    
    ```Bash
    docker run -d -p 8080:80 --name ai-doctor-container ai-doctor:latest
    ```
    
5. **访问应用**打开浏览器访问：`http://localhost:8080`
    

### 注意事项

1. **API代理配置**：生产环境默认直接调用第三方AI API，如需通过代理，构建时需设置环境变量：
    
    ```Bash
    # 构建时启用代理
    VITE_ENABLE_PROXY=true pnpm build
    ```
    
2. **数据存储**：项目使用浏览器`localStorage`本地存储配置和记录，清除浏览器数据会导致数据丢失。
    
3. **HarmonyOS版本**：若需部署HarmonyOS应用，需额外安装DevEco Studio和HarmonyOS SDK（详见项目`harmony/README.md`）。
    

如果部署过程中遇到依赖安装失败，可尝试更新Node.js版本或使用VPN（针对部分国外包）。