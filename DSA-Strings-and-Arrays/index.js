//Given an array of integers print all the old index items in a single line...

let arr= [2,5,6,6,8,7,7,10];

let ans="";

for(let i=0; i<arr.length; i++){
  
   if(i%2!==0){
     
     ans+=arr[i]+" ";
   }
}
console.log(ans);