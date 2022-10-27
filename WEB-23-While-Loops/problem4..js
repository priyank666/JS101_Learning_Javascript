//Problem 4: Print the average of even numbers from 1 to 100 (both included)

// Even numbers between the limit
// Calculate the sum of even numbers and countof even numbers
//Calculate the average


let i = 1;
let sum = 0;
let count = 0;

while (i <= 100) {

  if (i % 2 == 0) {
    sum = sum +i;
    count++;
  }
  i++;
}

console.log("The Average is", sum / count);