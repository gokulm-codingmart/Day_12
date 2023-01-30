//Linear Search
const input = require(`readline-sync`)

function linear(arr,key){
    for(let ele of arr){
        if(ele == key){
            console.log(`Match Found at index of ${arr.indexOf(ele)}`);
            count++;
        }
    }
    if(count) console.log(`The key ${key} is counted as ${count}`);
    else console.log("No such Key is found");
}


let arr = []
let count = 0;
let x = input.question("Enter the Size")
for(let i=0;i<x;i++){
    arr[i] = input.question("Enter the values in array : ")
}
let key = input.question("Enter the key value to be found : ")
linear(arr,key)
