## 1、Windows的虚拟环境
打开 “启用或关闭 Windows 功能”
找到并勾选：
-[*] 适用于 Linux 的 Windows 子系统
-[*] 虚拟机平台
确定 → 重启电脑
以管理员身份打开 PowerShell：`wsl --set-default-version 2`（把默认设为 WSL2）

## 2、尝试启动 Ubuntu 子系统
```Powershell
wsl --shutdown
```
我先关闭所有的虚拟机，然后再打开Ubuntu
```
wsl -d Ubuntu
```
![](assets/安装和配置Hermes/file-20260418204906059.png)
期间会要求输入密码，然后进入到这个提示符下。
## 3、先回到你的主目录
你现在在 Windows 的 system32 目录下，不适合在这里操作，先切回 Ubuntu 主目录：
运行
```Powershell
cd ~
```
## 4、更新系统并安装基础依赖
```Powershell
sudo apt update && sudo apt upgrade -y
sudo apt install -y git python3 python3-pip python3-venv
```
