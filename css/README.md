我是公司的前端工程师，但是我的前端并不好，记忆力很差。 :cry:

这里主要是CSS样式的备忘，和一些有关前端样式的笔记。



### 网页自适应

``` css
<meta name="viewport" content="width=device-width, initial-scale=1" />  
```

### 定制样式

``` css
@media screen and (max-device-width: 400px) {
    ...
}
```

## CSS3

### 边框

- 圆角

``` css
div{
  border:2px solid;
  border-radius:25px;
}
/* 指定每个圆角 */
/* border-radius: 15px 50px 30px 5px; */
```

- 阴影

``` css
div{
box-shadow: 10px 10px 5px #888888;
}
```

- 边界图片（不常用）

``` css
div{
border-image:url(border.png) 30 30 round;
-webkit-border-image:url(border.png) 30 30 round; /* Safari 5 and older */
-o-border-image:url(border.png) 30 30 round; /* Opera */
}
```

### 背景

不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。

```css
#example1 { 
    background-image: url(img_flwr.gif), url(paper.gif); 
    background-position: right bottom, left top; 
    background-repeat: no-repeat, repeat; 
}
```

=

``` css
#example1 {
    background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
```

- [background-origin](http://www.runoob.com/cssref/css3-pr-background-origin.html)

``` css
div{
    background:url(img_flwr.gif);
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
 /* background-origin:border-box; */
}
```

### 文本效果

- text-shadow

``` css
h1{
    text-shadow: 5px 5px 5px #FF0000;
}
```

- box-shadow

``` css
#boxshadow {
    position: relative;
    b ox-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    pa dding: 10px;
    bac kground: white;
} 
#boxshadow img {
     width: 100%;
     border: 1px solid #8a4419;
     border-style: inset;
} 
#boxshadow::after {
     content: '';
    position: absolute;
    z-index: -1; /* hide shadow behind image */
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); 
    width: 70%; 
    left: 15%; /* one half of the remaining 30% */
    height: 100px;
    bottom: 0;
}
```

卡片效果：

``` css
div.card {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

div.header {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    font-size: 40px;
}

div.container {
    padding: 10px;
}
```

``` html
<div class="card">
  <div class="header">
    <h1>1</h1>
  </div>

  <div class="container">
    <p>January 1, 2016</p>
  </div>
</div>
```

文本溢出：

``` css
p.test1 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: clip; 
}

p.test2 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis; 
}
```

单词拆分换行：

``` css
p {
  word-wrap:break-word;
  word-break: break-all;
}
```

使用自定义字体：

``` css
@font-face{
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}
div{
    font-family:myFirstFont;
}
```

### 过渡

``` css
div{
	width:100px;
	height:100px;
	background:red;
	transition:width 2s;
	-webkit-transition:width 2s; /* Safari */
}

div:hover{
	width:300px;
}
```

多项改变：

``` css
div {
    width: 100px;
    height: 100px;
    background: red;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* For Safari 3.1 to 6.0 */
    transition: width 2s, height 2s, transform 2s;
}

div:hover {
    width: 200px;
    height: 200px;
    -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */
    transform: rotate(360deg);
}
```

定制光标：

``` html
cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" style="font-size:14px"><text y="16">🦄</text></svg>'), auto;
```

