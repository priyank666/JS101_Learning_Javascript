// using  the above function, print all the odd numbers between 1 and 15.


function checkNum(num) {

  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
 let jhola = "";
for (let i=1; i<=15; i++){
  let ans = checkNum(i); //calling the number
  if(ans == false){
    jhola+= i + " "; // concatination
  }
}

console.log(jhola);