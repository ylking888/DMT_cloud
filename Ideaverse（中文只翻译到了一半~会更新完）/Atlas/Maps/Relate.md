---
up:
  - "[[Home]]"
related:
  - "[[Add]]"
  - "[[Communicate]]"
created: 2022-02-22
tags:
  - map/view
obsidianUIMode: preview
cssclasses:
  - wide-page
---
Your **Relate** note is a place of joy—without expectations or obligations.
您的连接笔记是一个快乐的地方——没有期望或义务。

This will be a head-scratcher for a culture obsessed with tasks, but when you start giving your thoughts the honor they deserve, you start to have better and better thoughts!
对于一个痴迷于任务的文化来说，这将是一个令人头疼的问题，但是当你开始给你的想法应有的荣誉时，你开始有越来越好的想法！

Here's how it works: When you are in a note and have a feeling that you want to return to it—for some fuzzy or clear reason—just add a tag in that note. Then through the magic of data views, you can confidently use these auto-updating lists to find them later:
它的工作原理是这样的：当你在一个笔记中，并且有一种想要返回它的感觉——**出于某种模糊或明确的原因—— 只需在该笔记中添加一个标签**。然后，通过数据视图的魔力，您可以放心地使用这些自动更新列表在以后找到它们：

> [!Multi-column] 
> 
> > [!Sailboat]+ ## Boats 🚤
> > You probably made these notes in a rush. These [[BOAT notes]] are *lonely boats floating in an empty ocean*. All you need to do is tether them to other notes.
> > 你可能匆忙做了这些笔记。这些[[船笔记]]是漂浮在空旷海洋中的孤独船只。您需要做的就是将它们与其他笔记绑定。
> > 
> > ```dataview
> > LIST
> > FROM #note/boat🚤 
> > SORT file.cday desc
> > LIMIT 10
> > ```
> > This sorts up to the most recent `10`.
> > 
> 
> > [!Leaf]+ ## Develop 🍃 
> > You can develop these notes by making remarks, clarifying, and critiquing. Add your opinion and if needed cite your sources.
> > 您可以通过发表评论、澄清和批评来发展这些笔记。添加您的意见，并在需要时引用您的来源。
> > 
> > ```dataview
> > LIST
> > FROM #note/develop🍃 
> > SORT file.cday desc
> > LIMIT 10
> > ```
> > This sorts up to the most recent `10`.
> > 

---

> [!NOTE]+  Only the "Boat" and "Develop" data views are included in Ideaverse for Obsidian.只有“船”和“开发”数据视图包含在黑曜石的 Ideaverse 中。
> This is a sanitized version of my actual note. 
> 这是我实际笔记的净化版本。
> 
> - Content and links have been removed.
> - 内容和链接已被删除。
