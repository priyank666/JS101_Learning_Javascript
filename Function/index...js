// Problem-1
// Write a function named addNumbers which takes two numbers as input and return their sum

// Use the function to calculate the sum of given three numbers

function addNumbers(a,b) {
  let sum = a+b;
  return sum;
}

// var a = addNumbers(3,4);
// console.log(a);

let m1=3, m2=4, m3=7;
let sum1=addNumbers(m1,m2);

// console.log(sum1);

let result = addNumbers(sum1,m3);
console.log("Result is", result);