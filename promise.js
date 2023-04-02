// class Person{
//     function Person(name,age) {
//         name;
//         age
//     }
// }

fetch('http://localhost:8080/goods')
.then(res=>res.json())
.then(json=>console.log(json))
.then()
.catch(err=>console.log(err))
.finally(()=>console.log('done'))