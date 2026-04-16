---
up:
  - "[[Efforts]]"
created: 2020-01-01
rank: "4"
tags:
  - map
---
This note is a simple example of how you can consolidate all of your notes related to an effort into a single spot.
此注释是一个简单的示例，说明如何将与工作相关的所有注释合并到一个位置。

> [!Watch]+ ###### Videos on Deck
> This filters for `#output/youtube◻️` with a rank above `3`.
> 这会过滤排名高于 3 的 #output/youtube
> ```dataview
> TABLE WITHOUT ID
>  file.link as "",
>  rank as "Rank"
> 
> FROM #output/youtube◻️ 
> 
> WHERE rank > 3
> 
> SORT rank desc
> ```

> [!Video]+ ###### Published Youtube Videos 已发布的 Youtube 视频
> ```dataview
> TABLE WITHOUT ID
>  file.link as "",
>  created as "Published"
>  
> FROM #output/youtube☑️  and -#x/readme
> 
> SORT created desc
>  ```

---

See the [[Communicate]] note for a broader view of both videos and newsletters. 有关视频和新闻通讯的更广泛视图，请参阅 [[通信]] 注释。

