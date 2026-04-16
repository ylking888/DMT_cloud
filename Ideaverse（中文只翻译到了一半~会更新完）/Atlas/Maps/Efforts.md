---
up:
  - "[[Home]]"
created: 2023-08-19
tags:
  - map
---
Keep your priorities in order. Quickly adjust your bandwidth as needed.
保持优先级有序。根据需要快速调整带宽。

> [!Box]+ ### 🔥 On
> ``` dataview
> TABLE WITHOUT ID
> file.link as "",
>  rank as "Rank"
> FROM "Efforts/On"
> SORT rank desc
> ```


> [!Box]+ ### ♻️ Ongoing
> ``` dataview
> TABLE WITHOUT ID
> file.link as "",
> rank as "Rank"
> FROM "Efforts/Ongoing"
> SORT rank desc
> ```


> [!Box]+ ### 〰️ Simmering  炖煮
> Efforts can easily move from `on` to `simmering` in the background.  努力可以很容易地在后台酝酿。
>
> ``` dataview
> TABLE WITHOUT ID
> file.link as "",
> rank as "Rank"
> FROM "Efforts/Simmering"
> SORT rank desc
> ```

---

> [!faq]+ Learn more about Efforts 了解有关努力的更多信息
> - [[A deeper dive into how ACE works]]
> - [[Why Efforts are Liberating]]
> - [[The Four Intensities of Efforts]]
> - [[How ideas and efforts play nicely together]]
> - [[The big differences between efforts and projects]]
>   
>   ![[robert-mccall-black-hole-concept-art copy.jpg]]

Back to [[Home]].
