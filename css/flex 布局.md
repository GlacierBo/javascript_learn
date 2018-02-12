## flex 布局

flex属性

``` powershell
# 元素的排列方向
flex-direction
# 元素如何换行（排列不下时）
flex-wrap
# flex-direction 和 flex-wrap 的简写
flex-flow 
# 元素在主轴上的对齐方式
justify-content 
# 元素在交叉轴的对其方式
align-items
```

- justify-content 属性

| flex-start    | 默认值。项目位于容器的开头。           |
| ------------- | ------------------------ |
| flex-end      | 项目位于容器的结尾。               |
| center        | 项目位于容器的中心。               |
| space-between | 项目位于各行之间留有空白的容器内。        |
| space-around  | 项目位于各行之前、之间、之后都留有空白的容器内。 |

flex元素属性

``` shell
# 当有多余空间时，元素的放大比例
flex-grow 
# 当有空间不足时，元素的缩小比例
flex-shrink
# 元素在主轴上占据的空间
flex-basis
# 是grow shrink basis的简写
flex
# 定义元素的排列顺序
order
# 定义元素自身的对齐方式
align-self
```

### 相对定位和绝对定位

- 相对定位的元素是相对`自身` 进行定位，参照物是`自己`
- 绝对定位的元素是相对`离它最近的一个已定位的父级元素`进行定位


``` css
/*根据最近的父级元素来进行定位*/
position: absolute; 
```




















