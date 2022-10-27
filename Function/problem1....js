//Problem 1: Create a function to check if a number is Prime or Not.

 function checkPrime(num) {
     let factor = 0;
       for (let i=1; i<=num; i++){
         if(num%i==0){
           factor++;
         } 
       }
         if(factor==2) {
           console.log("Prime Number");
         } else {
           console.log("Not a Prime Number");
         }
   }


checkPrime(5);
checkPrime(10);
checkPrime(13);
checkPrime(15);
checkPrime(20);

