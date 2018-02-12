## 让网页支持emoji

> 你的页面对emoji支持不是很好，有些表情不能正常的进行渲染。系统自带的emoji在web页面上显示有问题。这时候你就可以用twitter开源的[emjoji](https://github.com/twitter/twemoji)包了

### twemoji

所有的表情都可以在这里找到[preview.html](https://github.com/twitter/twemoji/blob/gh-pages/preview.html)

- 首先导包

``` javascript
<script src="https://cdn.bootcss.com/twemoji/2.5.0/2/twemoji.min.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.2.1/core.js"></script>
```

- JS

``` javascript
    var ul = document.getElementsByTagName('ul')[0];
    var total = ul.getElementsByTagName('li').length;
    var elapsed = +new Date;
    twemoji.parse(ul, {"size":72});
    elapsed = (+new Date) - elapsed;
    
// 选择表情后 在文本域添加表情
 	(function (img, metaKey, i) {
      function clickImg(e) {
       em = re(this.src)
       var txt_content = $('#txt_box').val().trim()
       //添加表情
       txt_content = txt_content + "[:"+em+"]"
       $('#txt_box').val(txt_content)
      }
      for (i = 0; i < img.length; img[i++].onclick = clickImg) {}
    }(
      document.getElementsByTagName('img'),
      /\b(?:Mac |i)OS\b/i.test(navigator.userAgent) ? 'Command' : 'Ctrl'
    ));

	//正则表达式
	function re(text){
		text = text.replace("https://twemoji.maxcdn.com/2/72x72/","")
		text = text.replace(".png","")
		return text;
	}
```

- HTML

``` javascript
<ul class="emoji-list">
  <li>&#x1F004;</li>
</ul>
<button onclick="topost()">发布</button>
```

- JS

``` javascript
// 提交文本域的时候对文本域中的表情进行处理
function topost(){
  var txt = $('#txt_box').val()
  //正则过滤
  var rgExp = /([^\:\[\]]+)(?=\])/g
  var temp = txt.match(rgExp)
  for(var i = 0 in temp){
    //console.log(temp[i])
    before_word = "[:"+ temp[i] +"]";
    after_word = "<li>&#x" + temp[i] + ";</li>";
    //console.log("before：",before_word)
    //console.log("after：",after_word)
    txt = txt.replace(before_word,after_word)
  }
     return txt
}
```

- JS（点击清空文本域）

``` javascript
	$(function(){
			$("#txt_box").bind("focus", function () {
				var text = $("#txt_box").val().trim()
				if(text.trim() === "发帖..."){
					 $("#txt_box").val("")
				}
		    });
			$("#txt_box").blur(function(){
		        var text = $("#txt_box").val()
		        if(text == null || text ==""){
		        	$("#txt_box").val("发帖...")
		        } 
		    });
		})
```

- 渲染`emoji`表情

``` java
// 渲染emoji
$(function(){
  $("ul").each(function(){
    twemoji.parse(this, {"size":72});
  });
});
```

- `emoji` 样式修改

``` css
/* 渲染emoji */
.emoji-list li{
  font-size: 16px;
  display:inline-block;
}
img.emoji {
  cursor: pointer;
  height: 1em;
  width: 1em;
  margin: 0 .05em 0 .1em;
  vertical-align: -0.1em;
}
i{
  font-size: 20px;
}
```

