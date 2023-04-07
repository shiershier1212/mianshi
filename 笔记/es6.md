[toc]
# ES6简单学习

---
---

# let 和 const

# Map 和 Set

# 模块化

# 解构

1. 数组中取值
2. 对象中取值
3. 交换两个变量的值

# 拓展运算符

1. 用来拷贝、合并数组
2. 克隆、合并对象
3. 箭头函数中获取args

# 函数参数直接赋值

具有默认参数的一般放在后面

# 对象属性的简写

# 异步

1. promise:
 promise有三种状态：pending,fulfilled,rejected
 当promise的状态改变时，会立即调用then方法（相当于then方法一直在监听该promise），除了then，还有catch和finall

``` javascript
<script>
let promise = new Promise(function (resolve, reject) {
 if(true){
  resolve("success");//改变promise的状态
 }
 else {
  reject("failure");//出错
 }
});
promise.then(res =>{//当promise状态改变时执行该方法
 console.log(res);
}).catch(err=>{//当promise出错时执行该方法
 console.log(err);
}).finally(function(){});//总会执行该方法
</script>
```
    promise.all()对所有的异步方法进行操作
    promise.race()会返回 结果获得最快 的那个  
 ``` javascript
 let p1 = new Promise(function (resolve, reject) {
 setTimeout(()=>{resolve("success")},2000);
});
let p2 = new Promise(function (resolve, reject) {
 setTimeout(()=>{reject("fail")},400);
});
Promise.race([p1,p2]).then(res=>{//比较race里面的方法，看谁快，快的先返回结果
 console.log(res);
}).catch(err=>{
 console.log(err);
})
```

2. async
 在函数前面加上async表示 异步调用，会返回一个promise对象，
3. await
 在函数前加上，表示等待该函数执行完成才会去执行接下来的代码

# includes方法



# Object.keys,values,entries

分别用于获取对象的键集合，值集合，和键值对集合

# null传导运算符?. 判断运算符？？



# 模板字符串
使用 `` 将一大段不换行的字符包裹住，成为一个字符串。其中变量的替换可以使用${}进行替换。

# 箭头函数与普通函数的this指向问题
1. 普通函数的this指向调用者所在的作用域
2. 箭头函数没有this，箭头函数内部的this只能通过查找作用域链来确定。
3. 在对象中定定义函数时不要使用箭头函数。

