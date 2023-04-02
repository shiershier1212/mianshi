//url 解析
let url = 'myUrl@key1=name&key2=age&key3=password';
console.log(url.match(/\W/g));
console.log(url.match(/@/g));
let url2 = url.substring(url.match(/@/).index + 1);
// console.log(url.substring(url.match(/@/).index+1));
let arr = url2.split('&');
let res = {};
// console.log(url2.split("&"));
for (let i = 0; i < arr.length; i++) {
	let a = arr[i].split('=');
	res[a[0]] = a[1];
}
console.log(res);
console.log(url.replace(/\w*@/, '')); //去除@前的东西