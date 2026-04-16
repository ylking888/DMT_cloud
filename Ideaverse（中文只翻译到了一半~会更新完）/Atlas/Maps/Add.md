---
up:
  - "[[Home]]"
related:
  - "[[Relate]]"
  - "[[Communicate]]"
created: 2022-01-01
obsidianUIMode: preview
tags:
  - map/view
---
This **Add** note isn't just an inbox. It's a cooling pad 🧊.
Thoughts come in hot. But after a few days, they cool down.
When cooler thoughts prevail, you can better prioritize. Cool? 

此添加笔记不仅仅是一个收件箱。这是一个**冷却垫**🧊.
思绪滚滚而来。但几天后，它们冷却下来。
当冷静的想法占上风时，您可以更好地确定优先级。凉？

> [!activity]+ ## Added Stuff
> This view looks at the 10 newest notes in your **+** folder. As you process each note: add a link, add details, move them to the best folder,  and delete everything that no longer sparks ✨. 
> 此视图查看 + 文件夹中的 10 个最新笔记。在处理每个笔记时：添加一个链接，添加详细信息，将它们移动到最佳文件夹，并删除不再产生火花✨的所有内容。
> 
> ``` dataview
> TABLE WITHOUT ID
>  file.link as "",
>  (date(today) - file.cday).day as "Days alive"
> 
> FROM "+" and -#x/readme 
> 
> SORT file.cday desc
> 
> LIMIT 10
> ```

> [!HINT]- This data view 🔬 only renders in the free downloadable version.
> You won't be able to see the magic unless you [download the kit](https://www.linkingyourthinking.com/download-lyt-kit), but here's what it looks like in "Ideaverse for Obsidian"
> 此视图查看 + 文件夹中的 10 个最新笔记。在处理每个笔记时：添加一个链接，添加详细信息，将它们移动到最佳文件夹，并删除不再产生火花✨的所有内容。
> ![[lyt-kit-example-cooling-pad-.png]]

---

If you want to encounter some new things, check out: [🐦](https://www.twitter.com) or [📚](https://readwise.io/lyt/)          
如果您想遇到一些新事物，请查看：🐦或 📚