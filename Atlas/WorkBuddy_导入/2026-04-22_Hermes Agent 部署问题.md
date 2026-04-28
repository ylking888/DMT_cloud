---
title: "2026-04-22 工作日志"
date: 2026-04-22
source: WorkBuddy
workspace: 20260422181108
imported: 2026-04-28 18:46
tags:
  - workbuddy
  - 日志
---

# 2026-04-22 工作日志

## Hermes Agent 部署问题

### 问题描述
用户运行 `Hermes update` 时卡在 "Downloading latest version..."，原因是 GitHub 在国内访问极慢。

### 解决过程
1. 卸载旧 Hermes：删除 `D:\hermes-agent-deploy\hermes-agent` 和 `~/.hermes` 配置目录
2. 用 ghfast 镜像重新克隆：`git clone https://ghfast.top/https://github.com/NousResearch/hermes-agent.git`
3. 创建虚拟环境并安装：`uv venv .venv && uv pip install -e "."`
4. 59 个核心依赖安装成功

### 注意事项
- `[all]` 额外包（需要 Rust 编译）暂未安装，基础功能正常
- 启动 Hermes 时需要用 CMD 或 Windows Terminal，PowerShell 环境有 TUI 兼容问题
- 启动前建议执行 `chcp 65001` 避免编码问题
- **未来 update 仍会遇到 GitHub 访问慢问题**，建议提前配置 Git 镜像：
  ```
  git config --global url."https://ghfast.top/https://github.com/".insteadOf "https://github.com/"
  ```

### 环境信息
- Python: 3.14.4 (C:\Python314\python.exe)
- uv: 0.7.13
- Hermes: 0.10.0
- 安装路径: D:\hermes-agent-deploy\hermes-agent
- venv: D:\hermes-agent-deploy\hermes-agent\.venv
