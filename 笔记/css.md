### 关于div
1. div默认是块级元素，display:inline可以设置成行内元素，但是这时宽高属性不起作用，可以设置display:inline-block


### 元素实现水平居中的方式
1. 使用absolute绝对定位 + transform:translate(-50%,-50%)

2. 使用布局：
   1. 使用flex布局：
      1. `justify-content:center` 实现 主轴 水平居中
      2. `align-items:center` 实现垂直居中
   2. 使用grid布局：
   3. 使用table布局：

3. absolute + 负margin

4. 


### 盒模型
1. 标准盒模型：设置宽和高时设置的是content的宽高，盒子的总宽高还要加上padding和border。
2. 怪异盒模型：设置宽高设置的是盒子的宽高，这样会压缩content的宽高。


### BFC
1. 可以看作是隔离了的独立容器，内部元素的布局，不会影响外部元素。