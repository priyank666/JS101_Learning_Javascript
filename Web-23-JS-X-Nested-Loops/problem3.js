// chunnu is asking munnu to plant seeds as per following details.

// farm1 ==> *  //farm = i
// farm2 ==> **  // seed = j
// farm3 ==> ***
// farm4 ==> ****

for (let farm = 1; farm <= 4; farm++){

  let bag = "";
  
  for (let seed = 1; seed <= farm; seed++){

    bag += "*" + " ";
  }
  console.log(bag);
}