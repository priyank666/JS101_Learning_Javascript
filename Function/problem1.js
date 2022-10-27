// using  the above function, count even numbers between 1 and 15.


function checkNum(num) {

  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let count=0;

for (let i=1; i<=5; i++){
  let ans = checkNum(i);
  if(ans == true){
    count++;
  }
}

console.log(count);