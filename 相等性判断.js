// // == 判断
// // 如果有一个是bool值，那么会将bool转换为数字
// // console.log(false == 0);
// // console.log(true == 1);

// //如果一个是 string 一个是 number,会将string 转换为number
// // string 转 number 规则如下
// // console.log(parseInt('0123'));
// // console.log(parseInt('23shier')); //遇到非数字字符时停下
// // console.log(parseFloat('01.12'));
// // console.log(parseInt(''));
// // console.log(parseInt(false));
// // console.log(parseInt('false'));

// console.log('1' == 1);
// console.log('2' == 1);

// //如果一个是 对象 另一个不是

// // null 和 undefined是相等的。null 与 undefined 不能转换为其他值跟其他类型比较
// console.log(null == undefined);

// // NaN 不等于任何东西
// console.log(NaN == NaN);


// // a==1&a==2&a==3 宽松相等
// var a = {
//     i: 1,
//     valueOf: function () {
//         return this.i++
//     }
// }
// if(a==1&a==2&a==3){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// a===1&a===2&a===3 
// var value = 0
// Object.defineProperty(global, 'a', {  //在node环境中，global表示全局，在html中，window表示全局。
//     get: function () {
//         return ++value
//     }
// })
// if (a === 1 & a === 2 & a === 3) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

console.log(null==undefined);
console.log(null!==undefined);
