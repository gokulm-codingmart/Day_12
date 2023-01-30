const input = require(`readline-sync`)

function binarySearch(arr,key,x){

    let leftArr = 0         //first index
    let rightArr = x - 1;   //last index

    while(leftArr<=rightArr){
    let mid = Math.floor((leftArr+rightArr)/2);
    if(key === arr[mid]){
        return mid;
    }
    else if(key < arr[mid]){
        rightArr = mid - 1;
    }
    else if(key > arr[mid])
    {
        leftArr = mid + 1;
    }
    }
    return -1;
}

//Binary can be done Only in an sorted Array

let x = input.question("Enter the Length of the Array : ")
let arr = []
for(let i=0;i<x;i++){
    arr[i] = input.question("Enter the Array Elements : ")
}
let key  = input.question("Enter the Key element to be found : ");
arr.sort();
console.log(binarySearch(arr,key,x))
