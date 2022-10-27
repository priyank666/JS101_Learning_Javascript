//Problem 2: Use the above function to print the Primes from 2 to a given limit.

 function checkPrime(num) {
     let factor = 0;
       for (let i=1; i<=num; i++){
         if(num%i==0){
           factor++;
         } 
       }
         if(factor==2) {
           return true;
         } 
           return false;
      }

for (let i=2; i<=20; i++) {
  let ans = checkPrime(i);

  if(ans == true) {
    console.log(i, "is prime");
  }
}
   