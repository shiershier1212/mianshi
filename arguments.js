// function test(){
//     console.log(...arguments);
//     console.log(arguments);
// }
// test(1,2,3,4,5,6)

// 箭头函数没有arguments
let fn = (...ar)=>{
    console.log(ar);
}
fn(1,3,5,7,9)