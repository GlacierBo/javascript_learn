##  JS函数



### 函数表达式

``` javascript
var x = function (a, b) {return a * b};
//在函数表达式存储在变量后，变量也可作为一个函数使用：
var z = x(4, 3);
```

### 函数可以作为值

``` javascript
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3) * 2;
```

### 函数是对象

- 例1

``` javascript
// arguments.length 属性返回函数调用过程接收到的参数个数：
function myFunction(a, b) {
    return arguments.length;
}
```

- 例2

``` javascript
function myFunction(a, b) {
    return a * b;
}

var txt = myFunction.toString();
```

### 函数参数

- 显式参数 (Parameters)
- 隐式参数 (Arguments)

设置默认参数：

- 例1

``` javascript
function myFunction(x, y) {
    if (y === undefined) {
          y = 0;
    } 
}
```

- 例2

``` javascript
function myFunction(x, y) {
    y = y || 0;
}
```

如果y已经定义 ， y || 返回 y, 因为 y 是 true, 否则返回 0, 因为 undefined 为 false。

### Arguments对象

JavaScript 函数有个内置的对象 arguments 对象。

argument 对象包含了函数调用的参数数组。

``` javascript
x = findMax(1, 123, 500, 115, 44, 88);
 
function findMax() {
    var i, max = arguments[0];
    
    if(arguments.length < 2) return max;
 
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
```

### 函数调用

``` javascript
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // 返回 "John Doe"
```

``` javascript
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}
myObject.fullName();          // 返回 [object Object] (所有者对象)
```



### JS闭包

``` javascript
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
 
// 计数器为 3
```







