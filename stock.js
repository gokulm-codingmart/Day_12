let x = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]
let count = 0;
let slop = []
let set = new Set();
let res = []

for(let i=1;i<x.length;i++){
    for(let j=1;j<x[0].length;j++){
        slope = Math.floor((x[i][j]-x[i-1][j]) / (x[i][j-1] - x[i-1][j-1]));
        slop.push(slope)
    }
}
console.log(slop)
for(let i=0;i<slop.length;i++){
    if(slop[i]!==slop[i+1] && i<slop.length){
        // res.push(1);
        count++;
    }
    else{
        i++;
    }
}
console.log(count);