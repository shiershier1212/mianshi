// //1.concat() 合并数组

// //2.join() 数组转为字符串

// //3.pop() 删除最后

// //4.shift() 删除最前

// //5.unshift() 前面添加

// //6.push() 后面添加

// //7.reverse() 翻转，返回结果
// let arr7 = [1, 2, 3, 4];
// console.log(arr7.reverse());

// //8.slice() 截取指定位置的数组并返回，不包括第二个下标
// let arr8 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr8.slice(0, 3));

// //9.splice() 可以用于增删改查，第一个参数是开始位置，第二个参数是需要删除的个数，第三个参数是需要增添的内容。
// let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr9.splice(3, 1, '增加的数据');
// console.log(arr9);

// //10.sort()

// //11.toString() 转为字符串
// let arr11 = [1, 2, 6, 8, 4, 2, 7, 5, 4];
// console.log(arr11.toString());
// console.log(arr11.join(''));

// //12.valueOf() 返回数组对象原始值
// let arr12 = [1, 3, 5, 7, 8, 9];
// // console.log(arr12.valuesOf());

// //13.indexOf() 查询并返回数据索引
// let arr13 = [1, 2, 'shier', 'tony', 4, 5];
// console.log(arr13.indexOf('tony'));
// console.log(arr13.includes(5));
// // console.log(arr13.findIndex((item)=>{item == 2}));

// //14.forEach() 参数为回调函数 回调函数接收三个值，item,index,self 没有返回值
// let arr14 = [1, 2, 3, 4, 5, 6, 7];
// arr14.forEach((item, index, self) => {
// 	// item += 1; //如果只是这样修改的话不会修改原数组
// 	// console.log(item);
// 	self[index] += 1;
// });
// console.log(arr14);

// //15.map() 回调函数返回新数据，最后返回新数组
// let arr15 = [1, 2, 3, 4, 5, 6, 7];
// let res15 = arr15.map((item, index, self) => {
// 	return (item += 1);
// });
// console.log(res15);

// //16.filter() 回调函数返回布尔值，最后返回新数组
// let arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let res16 = arr16.filter((item) => {
// 	return item > 5;
// });
// console.log(res16);

// //17.every() 回调函数返回布尔值，如果全为true，every返回true
// let arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res17 = arr17.every((item) => {
// 	// return !isNaN(item);
// 	return typeof item == 'number';
// });
// console.log(res17);

// //18.some() 回调函数返回布尔值，只要有一个为true，就返回true
// let arr18 = [1, 2, 3, 4, 5, 6, 7, '8', 9];
// let res18 = arr18.some((item) => {
// 	return typeof item === 'string';
// });
// console.log(res18);

// //19.reduce(callback,initialValue) 方法的第一个参数是为每一项执行的回调函数，第二个参数是初始值。
// //在回调函数中，回调函数有四个参数，分别是，(prev,cur,index,self)。prev指的是初始值或者上一次回调函数的返回值，
// //如果没有设置initial的话，prev就是数组中的第一个数，cur是数组中的第二个数
// let arr19 = [1, 2, 3, 4, 5];
// let res19 = arr19.reduce((prev, cur, index, self) => {
// 	console.log(prev + '--' + cur + '--' + index);
// 	return cur + 100; // return回去的值 会成为 下一轮的prev
// });
// console.log(res19); //这个结果是最后一轮return的

// //有初始化值的情况
// let arr20 = [1, 2, 3, 4, 5];
// let res20 = arr19.reduce((prev, cur, index, self) => {
// 	console.log(prev + '--' + cur + '--' + index);
// 	return cur + 100;
// }, 0);
// console.log(res20);


