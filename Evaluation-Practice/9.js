let n=5;
let arr=[1,2,3,4,5];
let min= Infinity;
 for (let i=0; i<=n-1; i++){
   if (arr[i] < min){
     min=arr[i];
   }
 }
console.log(min);
