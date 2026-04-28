---
title: "2026-04-24 工作日志"
date: 2026-04-24
source: WorkBuddy
workspace: 20260424172910
imported: 2026-04-28 18:46
tags:
  - workbuddy
  - 日志
---

## Hermes Dashboard 构建修复

- **问题**：`hermes dashboard` 启动时 Web UI 构建失败，原因是 `web/package.json` 中 `sync-assets` 脚本使用了 Unix 命令 `rm -rf` 和 `cp -r`，Windows 上不可用
- **修复**：安装 `rimraf`（跨平台删除）和 `shx`（跨平台 Unix 命令封装）作为 devDependencies，将脚本改为 `rimraf` + `shx cp -r`
- **改动文件**：`D:\hermes-agent-deploy\web\package.json`
- **注意**：如果 hermes 更新覆盖了 package.json，此修复需要重新应用
