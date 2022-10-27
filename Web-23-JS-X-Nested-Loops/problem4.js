// Output
//1
//*
//1 2
//* *
//1 2 3
//* * *
//1 2 3 4 
//* * * *

for (let i = 1; i <= 4; i++){

  let bag1 = ""; //numbers
  let bag2 = ""; //stars

  for (let j = 1; j <= i; j++){

    bag1 += j + " ";
    bag2 += "*" + " ";
  }
  console.log(bag1);
  console.log(bag2);
}
