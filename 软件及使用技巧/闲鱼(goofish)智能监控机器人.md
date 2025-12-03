项目地址：[Usagi-org/ai-goofish-monitor: 基于 Playwright 和AI过滤的闲鱼多任务实时/定时监控与智能分析工具，配备了功能完善的后台管理界面。帮助用户节省闲鱼商品过滤，能及时找到心仪商品。](https://github.com/Usagi-org/ai-goofish-monitor)
# 配置文件中《AI 模型相关配置》部分
模型的API Key。 # 申请地址：https://cloud.siliconflow.cn/ (注册后点击“API密钥” -> “新建密钥”) OPENAI_API_KEY="sk-..." # 这里填入你在硅基流动获取的以 sk- 开头的密钥

模型的API接口地址。 # 硅基流动的官方兼容地址如下，注意最后一定要带 /v1/ OPENAI_BASE_URL="https://api.siliconflow.cn/v1/"

使用的模型名称。 # 推荐使用 DeepSeek-V3 (性价比极高，效果好) 或 Qwen/Qwen2.5-7B-Instruct (部分版本免费) # 注意：模型名称必须与平台列表里的一字不差 OPENAI_MODEL_NAME="deepseek-ai/DeepSeek-V3"

(可选) 为AI请求配置HTTP/S代理。 # 因为是国内服务，这里留空即可！！ PROXY_URL=""

... (其他配置保持不变) ...

是否启用enable_thinking参数 
DeepSeek V3 不需要 thinking，如果是 R1 版本才需要。普通任务建议 V3 即可。 ENABLE_THINKING=false

是否启用response_format参数 
硅基流动的 DeepSeek 模型支持 JSON 模式，可以设为 true ENABLE_RESPONSE_FORMAT=true