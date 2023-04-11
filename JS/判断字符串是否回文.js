var canPermutePalindrome = function (s) {
	let obj = {};
	for (let i = 0; i < s.length; i++) {
		// if (obj[s[i]] == undefined) {
		// 	obj[s[i]] = 1;
		// } else {
		// 	obj[s[i]]++;
		// }

		//如果相等，表明已经存在，加一，否则设为1 
		obj[s[i]] = obj[s[i]]?obj[s[i]]+1:1;
	}
	if(Object.keys(obj).length==1) return true
	// console.log(obj);
	let num = 0;
	for (k in obj) {
		if (obj[k] % 2 != 0) {
			num++;
			if (num > 1) {
				return false;
			}
		}
	}
	return true;
};
// let r = canPermutePalindrome('tactcoa');
// let r = canPermutePalindrome('aaaaaaaaaabbbbbbbbbbbccccccccccc');
// let r = canPermutePalindrome("civic")
let r = canPermutePalindrome("c")
console.log('最终结果 :', r);
//主要想法就是 出现次数为奇数次的字符数量不能超过一个。
