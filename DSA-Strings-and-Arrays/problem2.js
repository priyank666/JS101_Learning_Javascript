// Given a string of only lower-case English alphabets, print all the charactes in the string taht are Vowels. If no vowels exist print "Not Found".
// Input: "Character"
// Output: "aae"

// Input: "Unicef"
// Output: "uie"

// Input: "rhythm"
// Output: "Not Found"
let str="unicef";
let bag ="";

for(var i=0; i<str.length; i++) {
  if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
    bag+=str[i];
  }
}
if(bag=="") console.log("Not Found")
console.log(bag);


