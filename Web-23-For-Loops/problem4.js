// print odd numbers b/w 1 and 20 in a horizontal line

//getting odd numbers
//printing them
//horizontally

let horizontal = "";
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {

    horizontal += i + " ";
  }
}

console.log(horizontal);