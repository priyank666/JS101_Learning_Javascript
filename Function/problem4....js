//Problem 4: Write a function to check if the char is a small case or not.

function check(character) {
  let lower = "qwertyuiopasdfghjklzxcvbnm";

  let isThere = false;

  for (let i=0; i<=lower.length-1; i++) {
    if(character == lower[i]) {
       isThere = true;
      break;
    }
  }
  return isThere;
}

let ans = check("a");

if(ans == true) {
  console.log("It is there");
}
else {
  console.log("It is not there");
}