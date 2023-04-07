// 1. 提取字符串中所有的数字
// let str = 'shie123rshi3ersh234ier';

// let res = [...str].filter((s) => {
// 	//如果字符是数字，Number()返回 该数字,isNaN(该数字)就会返回 false
// 	//如果字符不是数字，Number()返回 NaN,isNaN(NaN)就会返回 true
// 	return !isNaN(Number(s, 10));
// });
// let res2 = str.match(/\d/g).join('')
// console.log('res2 :', res2);

//-------------------------------------------------------------------
// let str = 'houdunren.com'
// let a = 'c'
// //简单地检测是否含有某字符,但是 缺点是不能将 变量 放进去检测
// console.log(/o/.test(str));
// console.log(/ou/.test(str));
// console.log(/oua/.test(str));
// console.log(/a/.test(str));  //false
// // 使用 eval方法可以将字符串变为 js代码
// console.log(eval(`/${a}/`).test(str));
//--------------------------------------------------------------------
// 使用正则对象
// let str = 'houdunren.com';
// let reg1 = new RegExp('u', 'g'); //检测字符中有没有u
// let reg2 = new RegExp('@', 'g');
// console.log(reg1.test(str));
// console.log(reg2.test(str));

// |选择符检测
// let str = 'houdunren.com12324';
// console.log(/o|a/.test(str)); // 检测有o或者a吗
// console.log(str.match(/mb|a/));
// console.log(str.match('e'));
// console.log(str.match(/\d/g));
// console.log(str.replace(/u/g, 'aaaa'));

// let str = "aaabbcccbbcjhdjkb"
// console.log(/[abc]+/.test(str)); //只能从[]里面取字符
// console.log(str.match(/[abc]+/));

// let str = '12345dhj';
// console.log(/[0-9a-z]+/.test(str));
// console.log(str.match(/[0-9a-z]+/));
// console.log(str.match(/[^0-9]+/)); //除了数字字符

//检测电话号码
// let tel = "010-99999999"
// let tel2 = "020-99999999"
// let tel3 = "020"
// console.log(/(010|020)\-\d{7,8}/.test(tel));
// console.log(/(010|020)\-\d{7,8}/.test(tel2));
// console.log(/(010|020)\-\d{7,8}/.test(tel3));

// 转义
// let price = "23.45"
// let price = 23.45
// console.log(/\d+\.\d+/.test(price));

// let reg = new RegExp(/\d+\.\d+/,"g")
// let reg2 = new RegExp("\\d+\\.\\d+","g")
// console.log(reg.test(price));
// console.log(reg2.test(price));

//限定符
// let str = "abababbc"

// let reg = new RegExp(/(ab){1,}/,"g")
// console.log(reg.test(str));
// console.log(str.match(reg));

//元字符
// let str = '11432hgjfs7fyisu';
// console.log(str.match(/\d+/g));
// console.log(str.match(/\D+/g));
// console.log(str.match(/\w+/g));
// console.log(str.match(/\W+/g));
// console.log(str.match(/[^0-9]+/g));
// console.log(str.match(/^1*/g));

// 匹配字符长度
// let tel = '15717759710';
// console.log(tel.match(/^\d{11}$/g)); //限定了行首与行尾之间只有11个数字
// console.log(/\d{11}\b/g.test(tel));
// console.log(/\D+/g.test(tel));
// console.log(/^\d{11}$/g.test(tel));
// console.log(tel.match(/\d+/g));

//匹配ip地址
// let ip = '127.0.0.12'
// let ip = '255.0.0.12'
// console.log(ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/));
// console.log(ip.match(/\d+\.\d+\.\d+\.\d+/g));
// console.log(ip.match(/[0-255]\.[0-255]\.[0-255]\.[0-255]/)); //不行

//除去空白
// let str = `
//     张三：010-99999999，李四：010-88888888

// `;
// console.log(str.match(/\d{3}-\d{8,9}/g)); //返回数字
// console.log(str.match(/[^:：,，-\d\n\s]+/g)); //返回文字，返回除去[]里面的东西

//邮箱匹配
// let email = '262236378@qq.com'
// let email = '262236378@qq.com'
// console.log(email.match(/^\w+@\w+\.com$/));

//密码
// let psw = '1233546__adas'
// console.log(psw.match(/^\w{11,16}$/));

//url 解析
// let url = 'myUrl@key1=name&key2=age&key3=password';
// console.log(url.match(/\W/g));
// console.log(url.match(/@/g));
// let url2 = url.substring(url.match(/@/).index + 1);
// // console.log(url.substring(url.match(/@/).index+1));
// let arr = url2.split('&');
// let res = {};
// // console.log(url2.split("&"));
// for (let i = 0; i < arr.length; i++) {
// 	let a = arr[i].split('=');
// 	res[a[0]] = a[1];
// }
// console.log(res);
// console.log(url.replace(/\w*@/, '')); //去除@前的东西

//多行修正,并解构出字符
// let hd = `
//     #1 js,200元 #
//     #2 php,300元 #
//     #9 houdunren.com # 后盾人
//     #3 node.js,180元 #

// `;
// let res = hd.match(/^\s*#\d+\s+.+\s+#$/gm).map((a) => {
// 	a = a.replace(/^\s*#\d+\s+/, '').replace(/\s+#/, '');
// 	[myName, price] = a.split(','); //解构赋值
// 	return { myName, price };
// });
// console.log(res);
// console.log(JSON.stringify(res));


//匹配中文
// let str = '234一二三四五六七八shier,ew?sdf.你好'
// console.log(str.match(/\p{L}/gu)); //匹配所有字符
// console.log(str.match(/\p{P}/gu)); //匹配所有标点符号
// console.log(str.match(/\p{sc=Han}/gu)); //匹配所有中文

//使用原子组
// let str = `
//     <h1>
//         houdunren
//         </h1>
//     <h2>hdcms</h2>
// `
// // console.log(str.match(/<h[1-6]>[\s\S]*<\/h[1-6]>/gi));
// console.dir(str.match(/<(h[1-6])>[\s\S]*<\/\1>/i));
// console.dir(str.match(/<(h[1-6])>[\s\S]*<\/\1>/gi));


//邮箱匹配
// let mail = '4235sf453-4@q-q.com'
// let mail = '4235sf453-4@q-q.com.cn'
// console.log(mail.match(/^[\w-]+@[\w-]+\.(com|org|cn|net)$/));
// console.log(mail.match(/^[\w-]+@([\w-]+\.)+(com|org|cn|net)$/));

//原子组完成 字符替换
// let str = `
//     <h1>houdunren</h1>
//     <span>后盾人</span>
//     <h2>hdcms</h2>
// `
// let reg = /<(h[1-6])>([\s\S]+)<\/\1>/gi
// console.log(str.replace(reg,'<p>$2</p>')); //把<h1>houdunren</h1> 替换成 <p>houdunren</p>，$2表第二个原子组

// let reg1 = /<h[1-6]>/g
// let reg2 = /<\/h[1-6]>/g
// str = str.replace(reg1,'<p>').replace(reg2,'<p>')
// console.log(str);


//域名提取 不记录组
// let url = `
//     https://www.houdunen.com
//     http://baidu.com
//     http://google.cn
// `
// let reg = /https?:\/\/((w*\.)?\w+\.(com|org|cn|net))/gi
// let reg = /https?:\/\/((?:w*\.)?\w+\.(?:com|org|cn|net))/gi
// console.dir(url.match(reg));
// console.dir(reg.exec(url));
// console.log(reg.lastIndex);
// console.dir(reg.exec(url));
// console.log(reg.lastIndex);
// console.dir(reg.exec(url));
// console.log(reg.lastIndex);
// while(res = reg.exec(url)){
//     console.log(res[1]);
// }


// 先行断言
let str = '1313131aZ$'
let reg = /(?=\d)/
// console.log(str.match(reg));
// console.log(reg.test(str));
// let reg2 = /(?=\d)(?=\w)/ 
// console.log(reg.test(reg2));
// regs = [
//     // /(?=\d)/,
//     // /(?=\w)/,
//     // /[0-9a-zA-z]+/
//     /[0-9]+/,
//     /[a-z]+/,
//     /[A-Z]+/,
//     /[^!#$%^&*()+=\-[\]\\\';,/{}|\":<>?~_]/g
// ]

// let f = regs.every((e)=>{
//     return e.test(str)
// })
// console.log('f :', f);

// console.log(/[^$]*/.test('str$'));
// console.log('str$'.match(/[^$]*/));

