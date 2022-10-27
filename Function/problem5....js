//Problem 5: Write a function to replace spaces in a given string with - .

function replace(str) {

  let bag="";
  for(let i=0; i<=str.length-1; i++) {
    
    if(str[i] == " ") {
      bag+="-";
    }
    else {
      bag+=str[i];
    }
  }
  console.log(bag);
}

replace("I am Iron Man");
replace("Everywhere i go i see his face");
replace("Wakanda Forever");
replace("With great power comes great responsibility");