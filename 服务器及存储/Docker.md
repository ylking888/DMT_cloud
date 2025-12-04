# 启动Docker Desktop时的错误提示
![450](assets/Docker/file-20251204150559757.png)
这个错误是 **Docker Desktop 在 Windows 系统上与 Hyper-V 兼容性相关的问题**，具体表现为：

**错误原因：**

- Docker Desktop 在启动引擎时，尝试配置网络或通信时，发现 Hyper-V 只支持 `AF_VSOCK`（一种虚拟化环境的socket通信协议），而 Docker 可能尝试使用了不兼容的网络配置。
- 这通常发生在 **Windows 10/11 家庭版** 或 **Hyper-V 配置不完整/损坏** 的情况下，因为家庭版默认不支持 Hyper-V，或者 Docker 的 Hyper-V 后端配置有问题。
### 如果不使用VMware虚拟机可以打开Hyper-V
![300](assets/Docker/file-20251204150824399.png)
### 主用 Docker/WSL2，同时用 VMware（推荐给Docker/WSL2重度用户）

如果你主要使用 Docker、WSL2 或基于 Hyper-V 的其他虚拟机（如 Windows Sandbox）：
1. **保持 Hyper-V 启用**。
2. 将 **VMware Workstation 升级到 15.5.5 或更高版本**，或者使用最新的 VMware Player。
3. 在 VMware 中创建或配置虚拟机时，**必须勾选“虚拟机设置 -> 处理器 -> 虚拟化引擎 -> 启用 ‘Hyper-V 兼容性’ 选项**。
- _这个选项会让 VMware 虚拟机运行在 Hyper-V 的顶层，性能会有小幅下降，但可以正常工作。_

### 方案三：使用 Windows 的 Hypervisor Platform 接口（折中方案）

这是一个较新的 Windows 功能，旨在让不同的管理程序共享底层。

1. 在“Windows 功能”中，**你可以不开启完整的“Hyper-V”，而是仅开启“Windows 虚拟机监控程序平台”**。
2. Docker Desktop（使用 WSL2 后端） 和 **较新版本的 VMware（16.0+）** 都可以基于这个平台运行。
3. 这是一个折中方案，兼容性较好，但并非所有旧版 VMware 功能都支持。