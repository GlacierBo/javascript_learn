能用原生JavaScript尽量不要使用JQuery，因为JQuery比原生JavaScript效率低一些。

#### 定位元素

```javascript
document.getElementById("abc")
```

```javascript
$("#abc") //通过id定位
$(".abc") //通过class定位
$("div") //通过标签定位
```

#### 改变元素内容

```javascript
abc.innerHTML = 'test'
```

```javascript
abc.html("test")
```

#### 显示隐藏元素

```javascript
abc.style.display = "none"
abc.style.display = "block"
```

```javascript
abc.hide();
abc.show();
abc.toggle();//在显示和隐藏之间切换
```

#### 获得焦点

```javascript
abc.focus();
```

#### 为表单赋值

```javascript
abc.value = "test";
```

```javascript
abc.val("test");
```

#### 获得表单的值

```javascript
abc.value
```

```javascript
abc.val()
```

#### 设置元素不可用

```javascript
abc.disabled = true;
```

```javascript
abc.attr("disabled",true);
```

#### 修改元素样式

```javascript
abc.style.fontSize = 18;
abc.className = "test";
```

```javascript
abc.css('font-size',20);
abc.removeClass();
abc.addClass("test");
```

#### 判断选中框是否选中

```javascript
// jQuery
if(abc.attr("checked") == "checked")
```

