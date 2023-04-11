//关于日期对象
// new Date()

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// 7个数字分别指定年、月、日、小时、分钟、秒和毫秒,一月是0开始的。

//JavaScript 将日期存储为毫秒
//JavaScript 将日期存储为自 1970 年 1 月 1 日 00:00:00 UTC（协调世界时）以来的毫秒数。
//零时间是 1970 年 1 月 1 日 00:00:00 UTC。
// var d = new Date(100000000000); 1970 年 1 月 1 日 00:00:00加上100000000000毫秒
// var d = new Date(-100000000000); 1970 年 1 月 1 日 00:00:00减去100000000000毫秒
//

//格式转换
// toUTCString() 方法将日期转换为 UTC 字符串
// toDateString() 方法将日期转换为更易读的格式
//ISO 8601 语法 (YYYY-MM-DD) 也是首选的 JavaScript 日期格式

// let date = new Date();
// let milliseconds = date.getTime(); //getTime() 方法返回自 1970 年 1 月 1 日以来的毫秒数
// console.log('milliseconds :', milliseconds);

// let newDate = new Date('2024-1-1'); //该方法可以根据改格式创建date对象
//----------------------------------------------------------------


