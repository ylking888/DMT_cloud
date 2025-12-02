[Google AI Studio](https://aistudio.google.com/prompts/new_chat)
![](assets/Google%20AI%20Studio/file-20251202095028610.png)
# 简介及界面
![](assets/Google%20AI%20Studio/file-20251202095503756.png)
# 参数设置
## 基础参数配置

### 模型选择
![500](assets/Google%20AI%20Studio/file-20251202101300576.png)

### 系统指令
全局系统提示词，可以把个人的喜好和信息全部写进去

![](assets/Google%20AI%20Studio/file-20251202100401553.png)
### 计费状态
免费版不用管
### 提示词温度
使用Gemini3强烈建议设为1
![](assets/Google%20AI%20Studio/file-20251202102023221.png)
#### Temperature和Top-p原理
这两个参数都是用来控制大模型回答的答案的随机性和创造力的。
![](assets/Google%20AI%20Studio/file-20251201102528384.png)
##### 生成分数
![](assets/Google%20AI%20Studio/file-20251201102907920.png)
![](assets/Google%20AI%20Studio/file-20251201102932070.png)
##### 转换概率
![](assets/Google%20AI%20Studio/file-20251201103252894.png)
![](assets/Google%20AI%20Studio/file-20251201103320110.png)
##### 加权采样

![](assets/Google%20AI%20Studio/file-20251201112828410.png)
##### Temperature
![](assets/Google%20AI%20Studio/file-20251201113027918.png)
![](assets/Google%20AI%20Studio/file-20251201113455661.png)
##### Top-p
![](assets/Google%20AI%20Studio/file-20251201113619975.png)
![](assets/Google%20AI%20Studio/file-20251201113700660.png)
![](assets/Google%20AI%20Studio/file-20251201113856131.png)
### 媒体分辨率
大部分情况下保持默认值
如果有大量图片，或者复杂的工程图纸，再开启high高分辨率
### 思考等级
默认High，保持完整的推理分析
### 工具开关
#### Structured outputs
强制AI按照你定义的JSON结构输出
#### Code execution
允许大模型执行Python代码
### Function calling
函数调用：调用API时开启
在使用智能体的时候调用的，比如调用外部的API
### Grounding with Google Search
开启谷歌搜索：时效性强的任务
Gemini 3训练数据截止：2025年1月
### URL context
发送网址给AI，建议保持开启。当你发送的内容中有网址的时候，Gemini就会读取网址上的内容。
比如Github、论文、文献的链接上的内容。

