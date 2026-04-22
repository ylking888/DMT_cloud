这是 GitHub 上爆火的开源项目 **Agency Agents**，核心理念是把通用 AI 助手，变成一支分工明确、高度专业的“虚拟团队”。
开源地址：[msitarzewski/agency-agents: A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables.](https://github.com/msitarzewski/agency-agents)

### 一、它能解决什么问题？
通用 AI 往往“什么都懂，但什么都不精”，而这个项目给 AI 赋予了**垂直领域的专业角色**，每个 Agent 都有自己的：
- 明确的岗位职责（比如前端开发、产品经理、营销策划）
- 专业的工作流程（比如需求分析→原型设计→代码实现→测试交付）
- 独特的沟通风格（比如严谨的架构师 vs 活泼的营销专家）
### 二、常见应用场景
#### 1.  个人/独立开发者项目（MVP 快速搭建）
- 组建“微型开发团队”：
  - 产品经理 Agent：梳理需求、写 PRD、规划功能优先级
  - 前端/后端开发 Agent：写代码、做架构、调试 Bug
  - 测试工程师 Agent：设计测试用例、排查问题
  - 文案/营销 Agent：写 README、产品介绍、上线文案
- 效果：一个人也能按“正规团队流程”完成从0到1的产品开发。
#### 2.  内容创作与品牌运营
- 多平台内容矩阵：
  - 小红书/抖音运营 Agent：写种草文案、做选题规划、分析热门趋势
  - 知乎/B站策略 Agent：做深度干货、制定内容选题
  - 品牌守护 Agent：把控内容调性，避免偏离品牌定位
- 场景：帮你批量产出适配不同平台风格的内容，甚至完整策划一场营销活动。
#### 3.  学术/科研辅助
- 学术部门 Agent 支持：
  - 文献综述 Agent：帮你梳理研究领域的关键论文、提炼观点
  - 故事讲述 Agent：把复杂的研究成果，改写成通俗易懂的科普内容
  - 论文润色 Agent：优化学术写作逻辑、调整专业表述
- 场景：辅助科研人员做文献整理、论文润色、成果科普。
#### 4.  设计与创意工作流
- 设计团队 Agent：
  - UI/UX 设计 Agent：提供界面设计建议、交互优化方案
  - 创意策划 Agent：帮你做品牌视觉、活动创意的头脑风暴
  - Blender 插件工程师 Agent：辅助3D项目开发、技术实现
- 场景：为设计师提供创意灵感和技术落地的双重支持。
#### 5.  日常办公与效率提升
- 项目管理 Agent：帮你拆解任务、制定进度计划、跟踪里程碑
- 文档整理 Agent：自动梳理会议纪要、生成周报/月报、整理项目文档
- 市场分析 Agent：做竞品分析、行业报告、用户画像梳理
### 三、怎么使用它？
#### 1.  基础用法：直接复制 Agent 提示词
- 每个 Agent 都是一个 `.md` 文件，里面包含完整的角色设定和工作流程
- 直接复制文件内容，粘贴到 ChatGPT/Claude 里，就能激活对应的角色
- 例如：你想写代码，就用“前端开发 Agent”；想做产品规划，就用“产品经理 Agent”
#### 2.  进阶用法：集成到 Claude Code（开发场景）
- 把 Agent 文件复制到 `~/.claude/agents/` 目录
- 在 Claude Code 中直接调用，AI 会自动以对应角色的身份和你协作
- 项目还提供了一键安装脚本，自动帮你配置好所有 Agent
#### 3.  高阶玩法：多 Agent 协作
- 把多个 Agent 组合起来，让它们按真实团队流程协作
- 例如：产品经理先出需求 → 设计师出方案 → 开发工程师实现 → 测试工程师验证
- 你只需要下达一个目标，就能让多个 AI 角色按流程完成一整套工作
### 四、补充说明
- 项目目前包含 **12 大部门、140+ 个专业 Agent**，覆盖开发、设计、营销、产品、学术、游戏开发等几乎所有常见场景
- 它完全开源免费，所有 Agent 提示词都可以直接修改、二次定制，适配你的具体需求
**可以，Agency Agents 完全支持在 Trae 中使用**。

### 一、如何在 Trae 中安装 Agency Agents
**方法 1：命令行一键转换（推荐）**
1. 克隆中文社区版（支持 Trae）：
   ```bash
   git clone https://github.com/jnMetaCode/agency-agents-zh.git
   cd agency-agents-zh
   ```
2. 转换为 Trae 格式：
   ```bash
   ./scripts/convert.sh --tool trae
   ```
3. 安装到你的项目：
   ```bash
   cd /你的项目目录
   /路径/agency-agents-zh/scripts/install.sh --tool trae
   ```
   会自动把角色规则安装到项目内的 `.trae/rules/`

**方法 2：手动复制粘贴（最简单）**
1. 打开 GitHub 上任意一个 `.md` 角色文件（如 `engineering/前端开发工程师.md`）
2. **全选复制**里面的所有提示词内容
3. 打开 Trae → 新建对话 → **直接粘贴** → 发送
4. 成功激活该专业角色，直接下达任务

### 二、在 Trae 里怎么用这些 Agent
- **普通对话**：粘贴角色提示词 → 直接发需求（如“帮我写一个登录页面”）
- **SOLO 模式**：
  - 粘贴角色提示词
  - 开启 SOLO Builder/Coder
  - 描述完整项目需求（如“Vue3 电商后台，带权限”）
  - Trae 会自动拆解、生成代码、出可运行项目
- **Skills 技能包**：
  - 把 Agency Agents 的角色保存为 `skill.md`
  - 导入 Trae 的 Skills 系统
  - 以后一键启用该专业角色

### 三、适合 Trae 的热门 Agent
- 工程类：**前端开发工程师、后端架构师、全栈工程师、DevOps 专家**
- 产品类：**产品经理、需求分析师、PRD 专家**
- 设计类：**UI/UX 设计师、页面交互专家**
- 代码质量：**代码评审官、Bug 修复工程师、测试工程师**

### 四、为什么适合 Trae
- Trae 是**中文原生 AI IDE**，对中文术语、国内框架支持更好
- 支持**SOLO 全自动开发**，配合 Agency Agents 专业角色 = 超级开发团队
- 一键生成**完整项目+可运行代码**，不用自己搭环境

