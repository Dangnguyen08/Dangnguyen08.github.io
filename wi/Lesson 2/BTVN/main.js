
// Câu 1:
// let arr1 = [1,2,3,4,5];
// let copy = [arr1];
// copy.push(arr1)

// console.log(...copy);

// Câu 2:
// let arrA = ["Hello", "Xin chào"]; 
// let arrB = ["Bonjour", "Olá"];
// let arrC = ["waysToSayHello"];

// arrC.push(arrA,arrB)

// console.log(...arrC);

// Câu 3:
// a)
// let arrX = [0,1,2,3,4,5,6,7,8];
// let arrSquare = []

// arrX.forEach(i =>{
//     arrSquare.push(i*i)
// })
// console.log(arrSquare);
// b)
// let arrX = [0,1,2,3,4,5,6,7,8]
// let arrOdds = []
// arrX.forEach(i =>{
//     if(i%2 == 1){
//         arrOdds.push(i)
//     }
// })
// console.log(arrOdds)

// Câu 4: Em đọc đề xong e k hiểu gì hết :))

// Câu 5: Bài 4 e k hiểu thì bài 5 em cũng k rồi :))

// Câu 6:
// let student = [
//     {
//         name: "Duong",
//         age: 11,
//         hobbies: ["video game","sleep","learn"]
//     },
//     {
//         name: "Dong",
//         age: 12,
//         hobbies: ["video game","sick","study"]
//     },
//     {
//         name: "Minh",
//         age: 13,
//         hobbies: ["video game","sick","learn"]
//     },
//     {
//         name: "Thanh",
//         age: 9,
//         hobbies: ["play game","sleep","learn"]
//     },
//     {
//         name: "Hung",
//         age: 11,
//         hobbies: ["play game","sick","study"]
//     }
// ]
// // a)
// let age = prompt(" Nhap tuoi: ")
// let age= 15
// let result =[]
// for (let index = 0; index < student.length; index++) {
//     if(student[index].age == age){
//         result.push(student[index].name)
//     }
// }
// if(result.length > 0){
//     result.forEach(item => {
//         console.log(item)
//     })
// }else{
//     console.log("Khong tim thay")
// }
// return

// // b)
// let hobbiesName = prompt(" So thich ")
// let hobbiesName = "play game"
// let result = []
// for (let index = 0; index < student.length; index++) {
//     if(student[index].hobbies.includes(hobbiesName)){
//         result.push(student[index].name, student[index].hobbies)
//     }
// }
// if(result.length > 0){
//     result.forEach(item => {
//         console.log(item)
//     })
// }else{
//     console.log("None")
// }

// // c)

// // d)
// let n = student.map(bienAge)
// function bienAge(n){ 
//         if(n.age ==  11){
//             n.age + 4
//         }
//     console.log(n)
// }

// Bài thêm
const array1 = ["hello", "bye", "world", "gia bao"];
const arr2 = array1.slice(0,3)
console.log(arr2);