// Problem-2
// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value.

function masaiStudent(Marks1,Marks2) {
  let masaiStudent = Marks1-Marks2;

  if(masaiStudent < 0){
    masaiStudent = masaiStudent * -1;
  }
  return masaiStudent;
}

let result = masaiStudent(4,12);
console.log(result);