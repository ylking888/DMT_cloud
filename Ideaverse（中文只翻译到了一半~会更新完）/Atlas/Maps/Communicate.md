---
up:
  - "[[Home]]"
related:
  - "[[Add]]"
  - "[[Relate]]"
created: 2022-01-01
tags:
  - map/view
---
This **Communicate** notes is a place to track your various *outputs*.
此交流笔记是跟踪各种输出的地方

Below are simple examples using the tag `output` to track my, well, outputs. 
下面是使用标签输出来跟踪我的输出的简单示例。

This is enough to get you started. Over time, you might to customize your views.
这足以让您入门。随着时间的推移，您可能会自定义视图。

> [!Script]- ###### Newsletters
> 这足以让您入门。随着时间的推移，您可能会自定义视图。
> ```dataview
> TABLE WITHOUT ID
>  file.link as "",
>  created as "Published"
>  
> FROM #output/newsletter and -#x/readme
> 
> SORT created desc
>  ```

# Videos

> [!Watch]+ ###### Videos on Deck
> This filters for `#output/youtube◻️` with a rank above `3`.
> 这会过滤排名高于 3 的 #output/youtube
> 
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


> [!Video]- ###### Published Youtube Videos
> 已发布的 Youtube 视频
> ```dataview
> TABLE WITHOUT ID
>  file.link as "",
>  created as "Published"
>  
> FROM #output/youtube☑️  and -#x/readme
> 
> SORT created desc
>  ```


