## JQuery: The Write Less, Do More.

[功能概括](https://github.com/GlacierBo/Notes/blob/master/JavaScript/JavaScript_JQuery.md#简介)

[JQuery 效果](https://github.com/GlacierBo/Notes/blob/master/JavaScript/JavaScript_JQuery.md#效果)

[JQuery 遍历](https://github.com/GlacierBo/Notes/blob/master/JavaScript/JavaScript_JQuery.md#遍历)

### 简介

功能概括

``` shell
1、html 的元素选取
2、html 的元素操作
3、html dom遍历和修改
4、js 特效和动画效果
5、css 操作
6、html 事件操作
7、ajax 异步请求方式
```

文档就绪事件

``` javascript
$(function(){
   //开始写 JQuery 代码...
})
```

选择器

``` javascript
// 元素选择器
$("p")
// id 选择器
$("#id")
// class 选择器
$(".class")
```

更多

| 语法                       | 描述                                       |
| ------------------------ | ---------------------------------------- |
| $("*")                   | 选取所有元素                                   |
| $(this)                  | 选取当前 HTML 元素                             |
| $("p.intro")             | 选取 class 为 intro 的 `<p>` 元素              |
| $("p:first")             | 选取第一个 `<p>` 元素                           |
| $("ul li:first")         | 选取第一个 `<ul>` 元素的第一个` <li>` 元素            |
| $("ul li:first-child")   | 选取每个 `<ul>` 元素的第一个 `<li>` 元素             |
| $("[href]")              | 选取带有 `href` 属性的元素                        |
| $("a[target='_blank']")  | 选取所有 `target` 属性值等于 "_blank" 的 `<a>` 元素  |
| $("a[target!='_blank']") | 选取所有 `target` 属性值不等于 "_blank" 的`<a>`元素   |
| $(":button")             | 选取所有 `type="button"` 的 `<input>` 元素 和 `<button>` 元素 |
| $("tr:even")             | 选取偶数位置的 `<tr>` 元素                        |
| $("tr:odd")              | 选取奇数位置的 `<tr>` 元素                        |

``` javascript
关于 : 和 [] 这两个符号的理解
：可以理解为种类的意思，如：p:first，p 的种类为第一个。
[] 很自然的可以理解为属性的意思，如：[href] 选取带有 href 属性的元素。
```

点击事件

``` javascript
$("p").click(function(){
  $(this).hide();
});
```

### 效果

- 隐藏/显示

``` javascript
$(selector).hide(speed,callback);
$(selector).show(speed,callback);
// 可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
// 可选的 callback 参数是隐藏或显示完成后所执行的函数名称。
```

- 淡入/淡出

fadeIn()
fadeOut()
fadeToggle()
fadeTo()

``` javascript
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```

- 滑动

slideDown()
slideUp()
slideToggle()

``` javascript
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```

- 动画

默认情况下，所有的 HTML 元素有一个静态的位置，且是不可移动的。 如果需要改变为，我们需要将元素的 position 属性设置为 relative, fixed, 或 absolute!

``` javascript
// $(selector).animate({params},speed,callback);
$("button").click(function(){
  $("div").animate({left:'250px'});
});

<div style="background:#98bf21;height:100px;width:100px;position:absolute;">
```

操作多个属性：

``` javascript
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
});
```

使用相对值：

``` javascript
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```

- 停止动画

``` javascript
// $(selector).stop(stopAll,goToEnd);
// 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
// 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
$("#stop").click(function(){
  $("#panel").stop();
});
```

- Callback 方法

``` javascript
// $("p").hide(speed,callback);
$("button").click(function(){
  $("p").hide("slow",function(){
    alert("段落现在被隐藏了");
  });
});
```

- 链

下面的例子把 css()、slideUp() 和 slideDown() 链接在一起。"p1" 元素首先会变为红色，然后向上滑动，再然后向下滑动：

``` javascript
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```

``` javascript
// 建议用以下格式，提高代码可读性：
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```

### HTML

**DOM = Document Object Model（文档对象模型）**

``` 
text() - 设置或返回所选元素的文本内容
html() - 设置或返回所选元素的内容（包括 HTML 标记）
val()  - 设置或返回表单字段的值
```

 获得链接中 href 属性的值：

``` javascript
$("button").click(function(){
  alert($("#runoob").attr("href"));
});
```

修改属性：

``` javascript
$("button").click(function(){
    $("#runoob").attr({
        "href" : "http://www.runoob.com/jquery",
        "title" : "jQuery 教程"
    });
});
```

有回调函数的 attr() 方法：

``` javascript
$("button").click(function(){
  $("#runoob").attr("href", function(i,origValue){
    return origValue + "/jquery"; 
  });
});
```

#### 添加/删除元素

- 添加

``` javascript
append()  - 在被选元素的结尾插入内容
prepend() - 在被选元素的开头插入内容
after()   - 在被选元素之后插入内容
before()  - 在被选元素之前插入内容

append/prepend 是在选择元素内部嵌入。
after/before 是在元素外面追加。
```

添加文本

``` javascript
function appendText()
{
    var txt1="<p>文本。</p>";              // 使用 HTML 标签创建文本
    var txt2=$("<p></p>").text("文本。");  // 使用 jQuery 创建文本
    var txt3=document.createElement("p");
    txt3.innerHTML="文本。";               // 使用 DOM 创建文本 text with DOM
    $("body").append(txt1,txt2,txt3);        // 追加新元素
}
```

- 删除

```javascript
remove() - 删除被选元素（及其子元素）
empty()  - 从被选元素中删除子元素
```

删除 `class="italic"` 的所有` <p>` 元素：

``` javascript
$("p").remove(".italic");
```

#### 处理 CSS

``` javascript
addClass()    - 向被选元素添加一个或多个类
removeClass() - 从被选元素删除一个或多个类
toggleClass() - 对被选元素进行添加/删除类的切换操作
css()         - 设置或返回样式属性
```

多个元素：

``` javascript
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});
```

多个类：

``` javascript
$("button").click(function(){
  $("body div:first").addClass("important blue");
});
```

#### JQuery 尺寸

``` javascript
width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
```

### 遍历

#### 祖先

- parent()

``` javascript
$(document).ready(function(){
  $("span").parent();
});
```

#### 后代

- children()

返回类名为 "1" 的所有` <p>` 元素，并且它们是 `<div>` 的直接子元素：

``` javascript
$(document).ready(function(){
  $("div").children("p.1");
});
```

- find()

返回属于` <div>`后代的所有 `<span>` 元素：

``` javascript
$(document).ready(function(){
  $("div").find("span");
});
```

#### 同胞

``` javascript
siblings() - 返回所有同胞元素
next() - 返回之后一个同胞元素 nextAll() - 返回之后所有同胞元素  nextUntil() - 返回之后同胞元素区间
prev() - 返回之前一个同胞元素 prevAll() - 返回之前所有同胞元素  prevUntil() - 返回之前同胞元素区间
```

- siblings()

返回 `<h2>` 的所有同胞元素：

``` javascript
$(document).ready(function(){
  $("h2").siblings();
});
```

- next()

返回 `<h2>` 的下一个同胞元素：

``` javascript
$(document).ready(function(){
  $("h2").next();
});
```

- 过滤

选取首个 `<div>` 元素内部的第一个 `<p>` 元素：

``` javascript
$(document).ready(function(){
  $("div p").first();
});
```

选择最后一个 `<div>` 元素中的最后一个` <p> `元素：

``` javascript
$(document).ready(function(){
  $("div p").last();
});
```

选取第二个` <p>` 元素（索引号 1）：

``` javascript
$(document).ready(function(){
  $("p").eq(1);
});
```

返回带有类名` "url"` 的所有 `<p>` 元素：

``` javascript
$(document).ready(function(){
  $("p").filter(".url");
});
```

返回带有类名 `"url"`的所有 `<p>` 元素：

``` javascript
$(document).ready(function(){
  $("p").filter(".url");
});
```

返回不带有类名 `"url"` 的所有 `<p>` 元素：

``` javascript
$(document).ready(function(){
  $("p").not(".url");
});
```

















