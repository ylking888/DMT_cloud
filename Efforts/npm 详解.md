## 什么是 npm？

**npm**（Node Package Manager）是 Node.js 的官方包管理器，也是全球最大的开源软件注册表。它有三个核心组成部分：

| 组件 | 说明 |
|------|------|
| **网站** | npmjs.com — 搜索和浏览包 |
| **CLI 工具** | 命令行界面，用于安装、发布、管理包 |
| **注册表** | 存储了超过 200 万个 JavaScript 包的数据库 |

## 核心概念

### 📦 包（Package）
一个包就是一个包含 `package.json` 文件的目录，描述了项目的元数据和依赖关系。

### 🗂️ package.json
项目的"身份证"，记录项目名称、版本、依赖等信息：

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### 📁 node_modules
所有安装的依赖包存放目录（不要手动修改，也不要提交到 Git）。

### 🔒 package-lock.json
锁定依赖的精确版本，保证团队成员安装的版本一致。

---

## 常用命令速查

### 初始化项目
```bash
npm init          # 交互式创建 package.json
npm init -y       # 全部使用默认值，快速创建
```

### 安装依赖
```bash
npm install                    # 安装 package.json 中所有依赖
npm install express            # 安装到 dependencies（生产依赖）
npm install typescript -D      # 安装到 devDependencies（开发依赖）
npm install -g nodemon         # 全局安装（-g 就是你刚才用的方式）
```

### 卸载依赖
```bash
npm uninstall express          # 卸载包
npm uninstall -g 302cc         # 卸载全局包
```

### 更新依赖
```bash
npm update                     # 更新所有包
npm update express             # 更新指定包
npm outdated                   # 查看哪些包有新版本
```

### 运行脚本
```bash
npm run dev        # 运行 package.json 中 scripts.dev 定义的命令
npm run build
npm start          # 等同于 npm run start
npm test           # 等同于 npm run test
```

### 查看信息
```bash
npm list           # 查看当前项目所有依赖树
npm list -g        # 查看全局安装的包
npm info express   # 查看包的详细信息
npm -v             # 查看 npm 版本
```

---

## 本地安装 vs 全局安装

| 对比项 | 本地安装 | 全局安装（-g） |
|--------|---------|--------------|
| 存放位置 | `./node_modules` | 系统全局目录 |
| 适用场景 | 项目依赖库 | CLI 工具 |
| 示例 | `express`, `react` | `nodemon`, `typescript`, `302cc` |
| 调用方式 | 代码中 `require/import` | 直接在终端输入命令 |

---

## 依赖类型

```bash
dependencies     # 生产依赖，项目运行必须
devDependencies  # 开发依赖，仅开发阶段用（测试、构建工具等）
peerDependencies # 同伴依赖，要求宿主环境提供
optionalDependencies # 可选依赖，安装失败不影响整体
```

---

## 版本号规则（语义化版本 SemVer）

```
1.2.3
│ │ └── Patch：修复 Bug
│ └──── Minor：新增功能（向后兼容）
└────── Major：破坏性变更
```

| 前缀 | 含义 |
|------|------|
| `^1.2.3` | 允许更新 Minor 和 Patch（最常见） |
| `~1.2.3` | 只允许更新 Patch |
| `1.2.3`  | 锁定精确版本 |

---

## 关于你刚才的操作

```bash
npm install -g 302cc
```

这条命令将 **302cc** 这个包**全局安装**到了你的系统中。`added 51 packages` 说明它安装了 51 个依赖包，`17 packages are looking for funding` 只是一个提示，说明有 17 个包的作者在寻求赞助，不影响使用。

安装完成后，你就可以直接在终端中使用 `302cc` 命令了。

---

> 💡 **小贴士**：中国大陆使用 npm 可能较慢，可以切换到淘宝镜像加速：
> ```bash
> npm config set registry https://registry.npmmirror.com
> ```