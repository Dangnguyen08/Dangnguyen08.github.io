// 1 các kiểu dữ liệu 
// Number: 1,2,3
// String: "hello world" - cho vào ngoặc ""
// Boolean: true, false 

// 2 loop
// for (giá trị, điều kiện, step) {
//     do something
// }
// while(điều kiện){

// }

// if else

// function functionName(){

// }

// let functionName = ()=>{

// }

// in ra các số chẵn từ 1 đến n (n là cái ta truyền vào)

// input (7)
// output ("2,4,6")

// input (8)
// output ("2,4,6,8")

// let b1 = (n)=>{
//     var output = ""
//     for(let i = 0; i<=n; i++){
//         if(i%2 == 0){
//             output += i
//             if(i<n-1){
//                 output += ","
//             }
//         }
//     }
//     console.log(output);
// }
// b1(8)

// Bài 1:
// let student = [
//     {
//         name: "NVA",
//         age: 16,
//         course: ["mindX 01", "mindX 02", "mindX 03"]
//     },
//     {
//         name: "NVB",
//         age: 18,
//         course: ["mindX 01", "mindX 02", "mindX 04"]
//     },
//     {
//         name: "NVC",
//         age: 17,
//         course: ["mindX 01", "mindX 03", "mindX 04"]
//     },
//     {
//         name: "NVD",
//         age: 15,
//         course: ["mindX 01", "mindX 02", "mindX 03"]
//     }
//     ]
// let i = prompt("Nhập tuổi")
// for(let n =0; n<4; n++){
//     if(i ==student[n.age]){
//         console.log
//     }
// }

let getDataAPI = async (city)=>{
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}saigon&appid=7674da634845e7c2d8c53ab0a48b8e29`

    let preData = await fetch(api) 
    let data = await preData.json()

    console.log(data);
}
getDataAPI("thailand")
getDataAPI("hanoi")