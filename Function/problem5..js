function add(a,b){
  console.log(a+b);
}

add(10,10);

//or

function add(a,b){
  return a+b; // giving me the answer or return the answer
}
let ans = add(10,5); // ==> 15

if(ans%2==0) {
  console.log("Even");
} else {
  console.log("Odd");
}