// Problem 2 : Given an array of string count the overall total number of characters

let arr = ["Kate Bishop","Steven Grant","T'Challa","Kamala Khan"];
let sum = 0;
for (let i = 0; i <= arr.length-1; i++) {
   sum += arr[i].length;
}
console.log(sum);