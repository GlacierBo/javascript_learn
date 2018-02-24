#### let命令

`var `和`let`都用于定义变量，作用域不同。

#### const （constant）

定义常量

#### 变量的解构赋值

- 数组

``` javascript
var a = 1 , b = 2, c = 3;
var [a, b, c] = [1, 2, 3];

if(a + b >2){
    ...
}
```

``` javascript
var [a, ...c] = [1, 2, 3];
console.log("a:",a);
console.log("c:",c);
->a:1
->c:[2,3]
```

- 对象(看重名称)

``` javascript
var obj = {
    a: 1,
  	b: 2
}
let {a:A, b} = obj;
```

- 其他

``` javascript
let {lenght} = 'Yo.'
let [a, b, c] = 'Yo.'
```

``` javascript
var arr = [1, 2];
function test([a, b])
{
  console.log("a:",a);
  console.log("b:",b);
}
test(arr)
```

``` javascript
var obj = [1, 2];
function test({a, b})
{
  console.log("a:",a);
  console.log("b:",b);
}
test(obj)
```

#### 字符串处理

``` javascript
//包含
console.log('Yo'.includes('Y'))
//开始
console.log('Yo'.startsWith('Y'))
//结束
console.log('Yo'.endsWith('Y'))
//重复
console.log('Yo'.repeat(3))
```

- 模板字符串

``` javascript
let title = '野外基地 2016秋季卫衣'
let tpl = `
<div>
	<span>${title}</span>
</div>
`;
```

#### Symbol 类型

每次创造一个`Symbol`值都是不一样的，用作`key`，这样就没法覆盖了。

``` javascript
let a = Symbol()
```

#### Set

``` javascript
var arr = [1, 2, 3, 3];
var s = new Set([1, 2, 3, 3]); // 1,2,3 会去除重复
s.add(4);
s.delete(2);
s.has(5);//查看有没有某个值
```



