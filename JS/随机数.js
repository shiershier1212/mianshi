function getRandomNumber(min, max) {
	//random 返回的是0到1之间的数，然后乘以差值，加上最小值就得到了随机值。
	return parseInt(Math.random() * (max - min) + min);
}
for(var i = 0; i <50;i++){
    console.log(getRandomNumber(1,20));
}