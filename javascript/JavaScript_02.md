## Ajax

### 模板

Ajax 格式如下：

```javascript
$.ajax({
        type : "post",
        url : "XXX.action",
      //data : 'name=John&location=china'
        data : {name:John, location:china},
        dataType : "json",
        async : false,
        success : function(data) {
        	do something...
        }
  });
```

**async同步方式**

- 如果需要等待ajax的执行结果，用false，否则永远得不到正确的结果。原因很简单，如果不用false，代码会直接往下执行，这时ajax的值还没返回过来，程序没有按照想象的顺序执行，结果也就可想而知了。
- 如果不需要等待ajax的执行结果最好用true，因为采用“同步的方式”(async=false)时页面会处于“假死”状态，用户看起来就是“卡住”了， 特别是假死次数太多时，体验不佳（ajax不要滥用，能在后台做的工作就在后台做，特别是一些初始化的工作）。

**dataType**

- 一般我们的返回值类型都是“json”, 之前还遇到过跨域请求的，这时候dataType就是'jsonp'。

### load()

``` javascript
$(selector).load(URL,data,callback);
```

如果 load() 方法已成功，则显示"外部内容加载成功！"，而如果失败，则显示错误消息：

``` javascript
$("button").click(function(){
  $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success")
      alert("外部内容加载成功!");
    if(statusTxt=="error")
      alert("Error: "+xhr.status+": "+xhr.statusText);
  });
});
```

### get()/post()

``` javascript
$.get(URL,callback);
```

``` javascript
$.post(URL,data,callback);
```

post :

``` javascript
$("button").click(function(){
    $.post("url",
    {
        test1:"xxx",
        test2:"xxxx"
    },
        function(data,status){
        alert("数据: \n" + data + "\n状态: " + status);
    });
});
```



