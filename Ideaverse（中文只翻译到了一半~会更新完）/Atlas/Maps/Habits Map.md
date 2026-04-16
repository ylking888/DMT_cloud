---
related:
  - "[[The 3 Phases of MOCs]]"
created: 2023-08-19
tags:
  - map
---

*I am an unrelenting evolutionary adaptation—whether you like it or not!*  我是一个无情的进化适应者——不管你喜欢与否！

> [!NOTE]+ Navigate with your new Map of Content (MOC) 使用新的内容地图 （MOC） 进行导航
> Connect your new Map of Content (MOC) with the the rest of your network of knowledge so you can *navigate your notes near the speed of thought*. 
> 将新的内容地图 （MOC） 与知识网络的其余部分连接起来，以便您可以以接近思维的速度浏览笔记
> 
> Enjoy the spatial constellation you created. Your MOCs will be meaningful to you. 享受您创建的空间星座。您的MOC对您有意义。
> 
> Use your more mature MOCs for different purposes:
> 将更成熟的 MOC 用于不同的目的：
> - for final products (content creation) 用于最终产品（内容创建）
> - as a reference point in the future, as a navigational hub 作为未来的参考点，作为导航中心
> - for the inherent joy the ideas provide. 为了想法提供的内在快乐。
>
> As you finish work on an area of interest, the MOC remains as a renewable summation of thought for the future you. An MOC is your easy access point back into the topic—whether that's tomorrow or in ten years. 
>当您完成感兴趣的领域的工作时，MOC 仍然是您对未来的可再生思想总结。MOC 是您回到主题的简单接入点 - 无论是明天还是十年后。


> Below is an assembly of the notes in some sort of formalized structure. I have continued adding to this whenever it made sense.
下面是某种形式化结构中的笔记组合。只要有意义，我就会继续添加。


## Understanding Habits 了解习惯
- [[Defining a habit]] 定义习惯
- [[Habit formation provides an evolutionary advantage]] 习惯形成提供了进化优势
- [[Habits carry a ton of hidden inertia]] 习惯带有大量隐藏的惯性
- [[The neural formation of habits is additive]] 习惯的神经形成是累加的
	- [[The truest habit metaphors are additive]] 最真实的习惯隐喻是累加的
	- [[Ant pheromone trails act like potential habits]] 蚂蚁信息素踪迹就像潜在的习性

## Designing Habits 设计习惯
- [[Understanding the habit cycle and habitual cues]] 了解习惯周期和习惯线索
	- [[How Atomic Habits fit into the conversation on habits]] 原子习惯如何融入关于习惯的对话
	- [[Resiliency Routines help regain a sense of control]] 弹性例程有助于重新获得控制感
	- [[Improving Micro Habits at the Point of Contact]] 改善接触点的微习惯
- [[Small Wins foster a Sense of Control]] 小胜利培养控制感
- [[An asymptotic curve models the development of skills, strength, habits, and more]] 渐近曲线模拟技能、力量、习惯等的发展
	- [[The mechanism for breaking through development plateaus]] 突破发展高原的机制

### Example of Habit Design 习惯设计示例
- [[Charting out habit cycles in my life circa 2013]] 绘制我生活中的习惯周期图，大约在2013年

### Important Habits 重要习惯
[[Being able to adapt is an important habit]]
[[Important habits preserve mental clarity and a sense of control]]
[[Preparing for the next day is an important habit]]
[[Writing down daily goals in the morning is an important habit]]
[[Journaling in the morning is an important habit]]
[[能够适应是一个重要的习惯]]
[[重要的习惯保持头脑清晰和控制感]]
[[为第二天做准备是一个重要的习惯]]
[[早上写下每日目标是一个重要的习惯]]
[[早上写日记是一个重要的习惯]]

## Related Concepts 相关概念
[[Feedback Loop]], [[Like begets like]]
[[Cobwebs into Cables]], [[Reps]], [[Sense of Control]]
[[Natural Selection]], [[Selfish Gene]], [[Survival of the Fittest]]
[[Flywheel Effect]], 
[[反馈循环]]， [[喜欢产生喜欢]]
[[蜘蛛网成电缆]]、[[代表]]、[[控制感]]
[[自然选择]]， [[自私的基因]]， [[适者生存]]
[飞轮效应]]，

## Other Miscellaneous 其他杂项
 - [[Words I've used to describe important habits]]
[[我用来描述重要习惯的词]]

[[Changing a habit is really about replacing a routine]]
[[改变习惯实际上是要取代常规]]

---

Finish the walkthrough: [[The 3 Phases of MOCs, a coda]]
完成演练：[[MOC 的 3 个阶段，一个 coda]]

---


## LYT Vision 利特愿景
Activate "LYT Vision" to resurface thoughts in context. When you twirl this open, it's like you are putting on night vision goggles: you see things hidden in the shadows.
激活“LYT视觉”以在上下文中重新呈现思想。当你打开它时，就像你戴上夜视镜一样：你看到隐藏在阴影中的东西。

The main contextual queries I prefer are "unrequited" & "unmentioned" notes.
我更喜欢的主要上下文查询是“单相思”和“未提及”的笔记。

### Unrequited notes
These notes point directly to this note. But this note doesn't point back.
这些注释直接指向此注释。但这个注释并没有指向后面。

```dataview
table file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified
from [[Habits MOC]]
and !outgoing([[Habits MOC]])
sort file.mtime desc
```

### Unmentioned notes, with related tag 
未提及的注释，带有相关标签

These notes have the tag `#` and are not mentioned above.
这些注释具有标记 # ，上面未提及。 

```dataview
table file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified
from #on/habit 
and !outgoing([[Habits MOC]])
sort file.mtime desc
```


