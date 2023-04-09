//数组去重
//1. 创建新数组
let arr = [1, 3, 4, 5, 6, 9, 3, 2, 5, 4, 3]
let res = []
arr.forEach(e => {
	if (!res.includes(e)) {
		res.push(e);
	}
});
console.log(res);

//2. 使用set ,效率较高
let res2 = [...new Set(arr)]
console.log(res2);

//3. 使用filter
let res3 = arr.filter((e, index, self) => { return self.indexOf(e) == index })
console.log('res3 :', res3);