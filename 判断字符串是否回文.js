var canPermutePalindrome = function(s) {
    let arr = s.split('').sort();
    // console.log('arr :', arr);
    let obj = {}
    arr.forEach((e)=>{
        let keys = Object.keys(obj)
        if(keys.includes(e)){
            obj[e]++
        }else{
            obj[e] = 1
        }
    })
    console.log(obj);    
    let num=0;
    for (k in obj){
        if(obj[k]%2!==0){
            num++
        }
    }
    console.log("出现单数次的字符的数量：",num);
    if(num>1){
        return false
    }
    return true
};

let r = canPermutePalindrome("tactcoa")
// let r = canPermutePalindrome("aaaaaaaaaabbbbbbbbbbbccccccccccc")
// let r = canPermutePalindrome("civic")
console.log('最终结果 :', r);