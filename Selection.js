function swap(x,min,j){
    let temp = x[min];
    x[min] = x[j]
    x[j] = temp
}

//using index values.....

function selection(x,n){
    let min,i,j
    for( i=0;i<n;i++){
        min  = i;
        for( j=i+1;j<n;j++){
            if(x[j]<x[min]){
                min = j
            }
        }
        // console.log(x[i]);
        swap(x,min,i)
    }
}

const input = require(`readline-sync`);
let x = []
let n = input.question("Enter the length of the array")
for(let i=0;i<n;i++){
    y = input.question("Enter Array Elements");
    x[i]= y;
}
console.log(x);
selection(x,n); //array, length
console.log(x);

