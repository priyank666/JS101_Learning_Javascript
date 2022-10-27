// using  the above function, print all the odd numbers between 1 and 15.


function checkNum(num) {

  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

for (let i=1; i<=15; i++){
  let ans = checkNum(i); //calling the number
  if(ans == false){
    console.log(i, "is Odd");
  }
}
 