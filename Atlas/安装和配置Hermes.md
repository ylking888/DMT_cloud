## 1、Windows的虚拟环境
打开 “启用或关闭 Windows 功能”
找到并勾选：
-[*] 适用于 Linux 的 Windows 子系统
-[*] 虚拟机平台
确定 → 重启电脑
管理员 PowerShell 执行：wsl --set-default-version 2（把默认设为 WSL2）

## 2、尝试启动 Ubuntu 子系统
```Powershell
wsl --shutdown
```
我先关闭所有的虚拟机，