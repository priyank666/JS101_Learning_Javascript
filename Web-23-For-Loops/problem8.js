// Calculate the avarage of even numbers in a range of 1 to 50

//1. Identify even numbers
//2. Find sum of even numbers
//3. Find count of even numbers
//4. Calculate average

let sum = 0;
count = 0;

for (let i = 1; i <= 50; i++){
   
  if (i % 2 == 0) {
     sum += i;
    count++;
  }  
} 

console.log("The avg is", sum/count);
