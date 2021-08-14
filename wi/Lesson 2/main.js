let sum = (a,b)=>{
    return a+ b
}

let tru= (a,b)=>{
    return a+ b
}

export default {sum, tru}

// Sort none thuật toán - method có sẵn - Cách 1:
// let arr = [1,5,8,7,6];
// let arr1 = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr1);


// // Sort thuật toán - Cách 2:
// let arr = [5,8,5,6,1,4]
// for(let i = 0; i<arr.length; i++){
//     let temp = 0
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[j]<arr[i]){
//             temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//         }
//     }
// }
// console.log();
