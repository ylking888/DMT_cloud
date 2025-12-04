# 启动Docker Desktop时的错误提示
![450](assets/Docker/file-20251204150559757.png)
这个错误是 **Docker Desktop 在 Windows 系统上与 Hyper-V 兼容性相关的问题**，具体表现为：

**错误原因：**

- Docker Desktop 在启动引擎时，尝试配置网络或通信时，发现 Hyper-V 只支持 `AF_VSOCK`（一种虚拟化环境的socket通信协议），而 Docker 可能尝试使用了不兼容的网络配置。
- 这通常发生在 **Windows 10/11 家庭版** 或 **Hyper-V 配置不完整/损坏** 的情况下，因为家庭版默认不支持 Hyper-V，或者 Docker 的 Hyper-V 后端配置有问题。
![300](assets/Docker/file-20251204150824399.png)
