for (var i=1; i<=4; i++){
  let sum=0;
  for (var j=1; j<=i; j++){
    if(j%2!==0){
      sum=sum+j;
    }
  }
  console.log(sum);
}