const input = require(`readline-sync`);

function quick(arr){
    if(arr.length < 2) return arr
    let pivot = arr[arr.length-1];
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<=pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

let x = input.question("Enter the Length of array : ");
let arr = []
for(let i=0;i<x;i++){
    arr[i] = input.question("Enter the array elements : ")
}
console.log(quick(arr))
 