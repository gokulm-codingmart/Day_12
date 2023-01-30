const input  = require(`readline-sync`);
function mergesort(arr){
    if(arr.length < 2){
        return arr
    }
        let mid = Math.floor(arr.length/2);
        let leftArr = arr.slice(0,mid)
        let rightArr = arr.slice(mid);
        // console.log("leftarray" ,leftArr);
        // console.log("right",rightArr)
        // console.log(arr[mid]);
        return merge(mergesort(leftArr),mergesort(rightArr))
}

function merge(leftArr,rightArr){
    let result = []
    while(leftArr.length && rightArr.length){
    if(leftArr[0]<=rightArr[0]){
        result.push(leftArr.shift())
    }
    else{
        result.push(rightArr.shift())
    }
    }
    // console.log("result",result);
    // console.log("l1",rightArr)
    return [...result,...leftArr,...rightArr];
}

let x = input.question("Enter the Length of array");
let arr = []
for(let i=0;i<x;i++){
    arr[i] = input.question("Enter the array elements")
}
console.log(`Before Sorting`);
console.log(arr);
console.log(mergesort(arr));
console.log(`After Sorting`);
// console.log(arr);