// 可以用拓展算符实现第一层拷贝，但深层依旧是浅拷贝
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [...arr1];
// arr1[0] = 10;
// console.log('arr1 :', arr1);
// console.log('arr2 :', arr2);

// let obj1 = { name: 'tony', age: 19, friends: { name: 'friendTony' } };
// let obj2 = { ...obj1 };
// obj2.age = 199;
// obj2.friends.name = 'new friend';
// console.log('obj1 :', obj1);
// console.log('obj2 :', obj2);
//-------------------------------------------
// //手写深拷贝
let oldObj = {
	name: 'shier',
	age: 19,
	friend: {
		name: '小红',
	},
	arr: [1, 2, 3, 4, 5],
};
function deepClone(obj) {
	//如果不是对象或者数组，直接返回
	if (typeof obj !== 'object' || obj == null) {
		return obj;
	}
	let result;
	//判断进来的是数组还是对象,如果是对象，不事先初始化的话，无法添加键值对。
	if (obj instanceof Array) {
		result = [];
	} else {
		result = {};
	}
	//遍历的是键
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			//必须要循环拷贝才叫“深拷贝”，如果没有循环拷贝，只拷贝了第一层，叫“浅拷贝”
			result[key] = deepClone(obj[key]);
		}
	}
	return result;
}
//进行拷贝
let newObj = deepClone(oldObj);
newObj.name = 'newName';
newObj.friend.name = 'xiaogou';
newObj.arr[0] = 1232;
console.log('oldObj :', oldObj);
console.log('newObj :', newObj);

/*-----------------------------
//简洁写法
var deepCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是新建一个数组还是一个对象
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    // 遍历obj,并且判断是obj的属性才拷贝
    if (obj.hasOwnProperty(key)) {
      // 判断属性值的类型，如果是对象递归调用深拷贝
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
-------------------*/
