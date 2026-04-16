---
up:
  - "[[Home]]"
created: 2020-06-01
tags:
  - map
---
This is where I keep tabs on some of the sources I have encountered. 
What "sources" should you track? 
How about books and movies?
这是我密切关注我遇到的一些来源的地方。
您应该跟踪哪些“来源”？
书和电影怎么样？

> [!Book]- ### Books
> ```dataview
> TABLE WITHOUT ID
>  year as "Year",
>  file.link as Book
>  
> FROM "Atlas/Notes/Sources" and -#x/readme
> 
> WHERE type = [[Book]]
> 
> SORT year asc
> ```

> [!video]- ### Movies
> ```dataview
> TABLE WITHOUT ID
>  year as "Year",
>  file.link as Movie
>  
> FROM "Atlas/Notes/Sources" and -#x/readme
> 
> WHERE type = [[Movie]]
> 
> SORT year asc
> ```

For the Fall 2023 Ideaverse, I am playing around with a property field called `type`. It allows me a nice way to create a few passive maps for different types of sources. Here's what I have so far, feel free to make more:
对于 2023 年秋季 Ideaverse，我正在玩一个名为 type 的属性字段。它为我提供了一种为不同类型的源创建一些被动地图的好方法。这是我到目前为止所拥有的，请随时制作更多：

- [[Book]] | [[Game]] | [[Movie]] | [[Paper]] | [[Song]] | [[Speech]]
- [[书籍]] |[[游戏]] |[[电影]] |[[纸]] |[[歌曲]] |[[演讲]]

For more ideas, check out the tags pane. Find "source" and twirl it down. The sources I have decided to include tracking over the years include: *books, movies, songs, research papers, plays, paintings, quotes, videos, speeches, poems, tweets, articles, and newsletters*. 
有关更多想法，请查看标记窗格。找到“源”并将其向下旋转。多年来，我决定包括跟踪的来源包括：书籍，电影，歌曲，研究论文，戏剧，绘画，引用，视频，演讲，诗歌，推文，文章和新闻通讯

> [!Script]- ## ALL SOURCES
> This is a simple data view pulling anything from the **Sources** folder.
> 
> ```dataview
> TABLE WITHOUT ID
>  year as "Year",
>  type as Type,
>  file.link as Source
>  
> FROM "Atlas/Notes/Sources" and -#x/readme 
> 
> SORT year asc
> ```

Not included here, but in my personal vault, I enjoy checking out the comprehensive [[Source MOC]] and perusing my [[Bookshelf 📚]]. And to honor the old ones, I also keep a [[Commonplace Book]] based on tags.
这里不包括，但在我的个人保险库中，我喜欢查看全面的[[源MOC]]并仔细阅读我的[[书架📚]]。为了纪念旧的，我还保留了一本基于标签的[[普通书]]。

> [!NOTE]+ Notes on this note
> This is a sanitized version of my actual note. 
> 这是我实际笔记的净化版本。
> - Content and links have been removed.
> - 内容和链接已被删除。
> - This special views 🔬 only render properly in the free downloadable version.
> - 此特殊视图🔬仅在免费下载版本中正确呈现。
> - You won't be able to see the magic unless you [download the kit](https://www.linkingyourthinking.com/download-lyt-kit).







