
| 平台       | 免费模型                    | 免费额度                 | API 地址（OpenAI 兼容）                                   | 注册                           |
| -------- | ----------------------- | -------------------- | --------------------------------------------------- | ---------------------------- |
| **硅基流动** | DeepSeek-V3、DeepSeek-R1 | 部分模型永久免费 + 新用户送 14 元 | `https://api.siliconflow.cn/v1`                     | cloud.siliconflow.cn         |
| **火山引擎** | DeepSeek-V3、DeepSeek-R1 | 100 万 Token          | `https://ark.cn-beijing.volces.com/api/v3`          | console.volcengine.com       |
| **阿里百炼** | DeepSeek-V3、DeepSeek-R1 | 100 万 Token          | `https://dashscope.aliyuncs.com/compatible-mode/v1` | dashscope.console.aliyun.com |
| **百度千帆** | DeepSeek-V3、DeepSeek-R1 | 100 万 Token          | `https://qianfan.baidubce.com/v2`                   | qianfan.baidubce.com         |
| **腾讯云**  | DeepSeek-V3             | 100 万 Token          | `https://api.hunyuan.cloud.tencent.com/v1`          | cloud.tencent.com            |

## 最推荐的方案：硅基流动

理由：
- **永久免费**模型 + 14 元新用户赠金
- 国内直连，速度快
- OpenAI 兼容接口，Claude Code / Continue 都能接
- 注册最简单

### 操作步骤

**1. 注册** → 打开 [cloud.siliconflow.cn](https://cloud.siliconflow.cn)，用手机号注册

**2. 拿 API Key** → 进入「API 密钥」页面，新建一个密钥（格式 `sk-xxx`）

**3. 把 API Key 发给我**，我帮你同时更新两个地方：
   - ✅ `~/.claude/settings.json`（Claude Code 插件用）
   - ✅ `~/.continue/config.yaml`（Continue 插件用）

这样两个 VS Code AI 助手都走免费的 DeepSeek，一分钱不花。
