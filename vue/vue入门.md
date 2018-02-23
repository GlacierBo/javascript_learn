#### v指令

`v-for`迭代

`v-bind`可以修改属性，简写`:`

``` html
<img :src="xxx" />
```

`v-on`用于绑定事件，简写`@`

``` html
<!-- 阻止事件冒泡 -->
<form @submit.stop='onSubmit'>
</form>

<!-- 回车 -->
<form @keyup.enter='onEnter'>
</form>
```

`v-model`

``` html
v-model.lazy 懒更新
v-model.trim 删空格
v-model.number 数字
```

`v-if`控制流

`props` 组件通信

任意组件间的通信：事件调度器（常用）

``` java
var Event = new Vue();
```

#### 过滤器

一般是做一些简单的事情

``` html
<div id=app>
{{ price | currency}}
</div>
```

#### 自定义指令

``` javascript
Vue.dirctive('pin',function(el,binding){
    binding.value
})
```

#### 插槽

``` html
<slots></slots>
```









