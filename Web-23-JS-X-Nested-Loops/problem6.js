//last Concept
// Break and Continue Statement. 

//1. What is Continue Statement? 


for (let i = 1; i <= 4; i++) {
  for (let j = 1;  j <= 3; j++) {
    if(j == 2) {
      continue;
    }
      console.log(i, j);
  }
}