## 关于对象的隐式转换
当不同类型的数据进行(==)比较时，js会将其转换成统一数据类型，低级的数据类型向高级的数据类型转换。
object->string->number<-boolean。最终可以转换到number。
1. null-null 会打印出0。
2. undefined和null与任何有意义的值比较 都会返回 false。但是undefined==null 为true。

## 跨选项卡通信
1. localStorage
2. BroadcastChannel API
3. window.postMessage()

## js数据类型
1. 基本数据类型：Number,Boolean,String,null,undefined,BigInt,Symbol 7种。 放在栈中。
2. 引用数据类型：Object,Array等。放在堆中。
3. 如何判断：
   1. console.log(typeof [1,2,3]); 
   2. console.log([1,2,4] instanceof Array);

## arguments
1. 一个对象，存储着函数传入的参数。
2. 箭头函数没有arguments。可以用拓展运算符(...args)