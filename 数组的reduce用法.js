//求和之类的
// let arr1 = [1, 2, 3, 4];
// let res1 = arr1.reduce((x, y) => x + y);
// let res2 = arr1.reduce((x, y) => x * y);
// console.log(res1);
// console.log(res2);

//统计元素出现次数
let arr2 = ['tony', 'alice', 'tony2', 'alice', 'alice2', 'tony'];
let res2 = arr2.reduce((prev, cur) => {
	if (cur in prev) {
		prev[cur]++; //对象的数据可以用方括号取得，也可以用方括号添加
	} else {
		prev[cur] = 1; //方括号可以设置键值 ，也可以用点
	}
	return prev;
}, {}); //初始的话是一个空对象
console.log(res2);
