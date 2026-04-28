AI 回答内容永久中文设置（核心解决英文回答问题）
# 方法 1：修改默认人格配置（推荐）
编辑~/.hermes/config.yaml文件hermes-agent.nousresearch.com
找到agent.personalities部分，修改默认人格的 system_prompt：
```yaml
agent:
  personalities:
    - id: default
      name: Hermes
      description: 通用助手
      system_prompt: |
        你是Hermes，一个由Nous Research开发的AI助手。
        你博学多才，乐于助人，回复简洁清晰。
        无论用户使用何种语言提问，你都必须用中文回复，技术术语保留英文。
```
保存文件，无需重启，立即生效
# 方法 2：全局人格文件设置（影响所有会话）
编辑~/.hermes/SOUL.md文件（全局人格配置）
添加或修改以下内容：
```markdown
# Agent人格设定
- 语言偏好: 交互过程必须使用中文，代码注释可以使用英文，生成文档采用中文为主
- 沟通风格: 简洁专业，直接给出解决方案
```
保存后立即生效，所有新会话都会遵循此语言设置
# 方法 3：通过设置向导初始化（适合新安装）
如果是新安装，可运行初始化向导重新配置：
```bash
运行
hermes setup
```
在向导中选择语言偏好为中文，配置会自动保存到config.yaml
# 进阶强化设置（确保万无一失）
## 1. 配置文件完整语言设置示例
```yaml
# ~/.hermes/config.yaml完整配置片段
preferences:
  language: "zh-CN"  # 语言偏好设置
  response_length: "medium"
  technical_level: "intermediate"

agent:
  default_personality: default  # 确保使用默认人格
  personalities:
    - id: default
      name: Hermes
      description: 通用中文助手
      system_prompt: |
        你是Hermes中文助手，所有回答必须用中文，保持专业且易懂。
        即使遇到英文问题，也请用中文解释和回答。
```
## 2. 临时切换与验证
临时切换人格（测试是否生效）：/personality default
验证语言设置：向 AI 提问 "Hello, how are you?"，应得到中文回答
# 常见问题排查
## 设置后仍英文回答
检查config.yaml中default_personality是否指向正确人格
确认SOUL.md中的语言偏好设置是否正确
重启 Hermes 服务：hermes restart
## WebUI 界面仍英文
清除浏览器缓存，重新登录
确认配置文件中dashboard.language设置正确
更新 WebUI 到最新版本
完成以上设置后，Hermes Agent 将永久默认使用中文界面和中文回答，无需每次手动切换。
