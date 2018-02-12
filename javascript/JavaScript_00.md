简单的介绍一下原生的JavaScript，并附上一些小例子。

使用 document.write() 仅仅向文档输出写内容。

如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。

``` html
<button onclick="myFunction()">点我</button>

<script>
function myFunction() {
   	document.write(Date());
}
</script>
```

``` javascript
document.write("<h1>这是一个标题</h1>");
```

``` javascript
<button type="button" onclick="alert('欢迎!')">点我!</button>
```

``` javascript
x=document.getElementById("demo")  //查找元素
x.innerHTML="Hello JavaScript";    //改变内容
```

``` javascript
x=document.getElementById("demo")  //找到元素 
x.style.color="#ff0000";           //改变样式
```

对象定义

``` javascript
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

// 访问对象属性
// 1. person.lastName;
// 2. person["lastName"];
```

常见的HTML事件

| 事件          | 描述               |
| ----------- | ---------------- |
| onclick     | 用户点击 HTML 元素     |
| onmouseover | 用户在一个HTML元素上移动鼠标 |
| onmouseout  | 用户从一个HTML元素上移开鼠标 |
| onkeydown   | 用户按下键盘按键         |
| onload      | 浏览器已完成页面的加载      |
| onchange    | HTML 元素改变        |

``` javascript
var x = "John";              
var y = new String("John");
(x === y) // 结果为 false，因为 x 是字符串，y 是对象   === 绝对相等，数据类型和值都必须相等
```

#### javascript 变量提升

JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。

JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。

- 例1：

``` javascript
x = 5; // 变量 x 设置为 5

elem = document.getElementById("demo"); // 查找元素 
elem.innerHTML = x;                     // 在元素中显示 x

var x; // 声明 x
```

- 例2：

``` java
var x; // 声明 x
x = 5; // 变量 x 设置为 5

elem = document.getElementById("demo"); // 查找元素 
elem.innerHTML = x;                     // 在元素中显示 x
```

- 例3：

``` javascript
var x = 5; // 初始化 x

elem = document.getElementById("demo"); // 查找元素 
elem.innerHTML = x + " " + y;           // 显示 x 和 y

var y = 7; // 初始化 y

//  --->>  x 为：5，y 为：undefined
```

例1，例2是一样的，没有初始化的变量会提升，例3初始化的变量不会提升。

所以建议：**变量在开始的时候就要进行声明**。

#### javascript严格模式

``` javascript
"use strict"
```

为什么使用严格模式:

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全;
- 提高编译器效率，增加运行速度;
- 为未来新版本的Javascript做好铺垫。

"严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。



参考文档：

[JavaScript | 菜鸟教程](http://www.runoob.com/js/js-tutorial.html)

[JavaScript | 廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)

