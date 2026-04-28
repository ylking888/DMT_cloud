---
title: "2026-04-24 工作日志"
date: 2026-04-24
source: WorkBuddy
workspace: 20260424153924
imported: 2026-04-28 18:46
tags:
  - workbuddy
  - 日志
---

# 2026-04-24 工作日志

## Hermes Agent 模型切换

**问题**：qwen3-hermes:latest 模型上下文窗口只有 16K，但 Hermes Agent 要求 64K
**解决方案**：切换到 qwen3:14b（40K 上下文）

**模型配置**：`C:\Users\ylking\.hermes\config.yaml`
```yaml
model:
  default: qwen3:14b
  provider: custom:local-(127.0.0.1:11434)
  base_url: http://127.0.0.1:11434/v1
  context_length: 32768
```

## Hermes Web UI 安装

**安装**：npm install -g hermes-web-ui
**访问**：http://localhost:8648
**令牌**：2797bbd742e98c98b5e225b4d4d437fc9038baf1367460491998d632c5030165

## API Server 问题（关键！）

**问题**：Gateway 只启动了 weixin 平台，没有启动 API Server，导致 Web UI 502 错误
**原因**：config.yaml 中 platforms: {} 为空
**解决**：在 `C:\Users\ylking\.hermes\.env` 中添加：
```
API_SERVER_ENABLED=true
```

## Ollama 环境

**版本**：0.21.0
**GPU**：RTX 5080 16GB，CUDA 13.0
**可用模型**：default:latest, qwen2:7b, qwen3-hermes:latest, qwen3:14b
