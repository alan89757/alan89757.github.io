# 学习markdown，这篇文章就够了...
[TOC]  
```text
官网：https://daringfireball.net/projects/markdown/
```
## 1.1. 在线markdown(开源)
```text
http://editor.md.ipandao.com/
https://c.runoob.com/front-end/712
```
### 1.1.1. 菜鸟工具
https://c.runoob.com/
## 1.2. 官网
https://www.markdownguide.org/

## 1.3. markdown转html

**[markdown转html](https://daringfireball.net/projects/markdown/dingus "md转html")**


<h1>hello</h1>
<h2>world</h2>

# 2. h1
## 2.1. h2
### 2.1.1. h3
#### 2.1.1.1. h4
##### 2.1.1.1.1. h5
###### 2.1.1.1.1.1. h6
<b>粗体</b>
正常


3. head level 1
====

3.1. head level 2
-----

1231312  
123<strong>13</strong>1321  
123131232  
1231321  
123132

hello**is**world


I'm *tom*  
I'm _Smith_


这真的**很重要**

>这是一个块，可以写文章之类的请小心使用这一特性，因为它很有可能造成安全问题！ 当你的脚本运行设置是开启的，你的电脑很有可能被黑客攻击，如果有人使你运行 文档中的恶意代码。
>
>多块级应用
>>嵌套快引用

> ## 块引用标题
> 
> - 其他元素
> - 我也是其他元素
>
> *Everything is ok* 

1. 有序列表1
2. 有序列表2
   1. 有序子列表1
   2. 有序字列表2
3. 有序列表3

- 1968. A great year!
- I think 1969 was second best.


![](./assets/tux.png)

At the command prompt, type `nano`.

3.2. ***
---
_______________


My favorite search engine is **[Duck Duck Go](https://duckduckgo.com "The best search engine for privacy")**

https://www.markdownguide.org  
<fake@example.com>

[hobbit-hole][1]

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.

<a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>


[link](https://www.example.com/my%20great%20page)

![The San Juan Mountains are beautiful!](./assets/tux.png "San Juan Mountains")

[![An old rock in the desert](./assets/tux.png "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)


\* Without the backslash, this would be a bullet in an unordered list.

<p>italic and **bold**</p>

hel~l~o`world`

``
<div style="color: greenyellow">123</div>
``

""让我们一起玩个`游戏`吧""

``hello w`or`ld ``


```
`我是代码块
```

~~~
~也是实现代码块

~~~


快捷键链接

[百度1][baidu]
[百度2][baidu]
[百度3][baidu]

[baidu]: https://www.baidu.com/  



| left | center | right |
| :--- | :----: | ----: |
| 1    |   2    |     3 |
| 10   |   20   |    30 |




```javascript {.line-numbers highlight=[2-5]}
function add(x, y) {
  return x + y
}
function minus(x, y) {
  return x - y
}
```

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

Content [^1]


ID|姓名|年龄
---|---|---
10| 梁荣军 | 26
11 | 梁晓明 | 27


:smile:
:fa-car:

30^th^

H~2~O


[^1]: Hi! This is a footnote




_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium
The HTML specification
is maintained by the W3C.




==marked==

{++ 

 ++}