项目地址：https://github.com/hanshuaikang/AI-Media2Doc
# 1、下载项目最新版
克隆项目git clone https://github.com/hanshuaikang/AI-Media2Doc.git
或下载最新版本到本地，解压到一个目录下
# 2、安装 Node.js
我本地的 node 版本为 `22.17.0`
D:\AIMedia2Doc>node -v
v22.17.0

这是一个 **Python 后端 + 前端** 的项目：
```
AI-Media2Doc/ 
├── backend/ ← Python 后端 
│ └── requirements.txt 
├── frontend/ ← 前端目录（这里才有 package.json）
│ └── package.json 
├── docker-compose.yml 
└── README.md
```
# 3、安装依赖
```
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