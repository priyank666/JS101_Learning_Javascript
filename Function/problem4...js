// Problem-5
// Write a function to convert a character to lower case

function toLower(char){
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

  for(let i=0; i<upper.length; i++){
    if(char == upper[i]) {
      return lower[i];
    }
  }
  return char;
}
console.log(toLower("A"));

// Use this function to convert a given word to lower case.

function convertWordLower(word){
  let glass = "";
  for(let i=0; i<word.length; i++){
    let ganna_juice = toLower(word[i]);
    glass = glass + ganna_juice;
  }
  return glass;
}
console.log(convertWordLower("PETER PARKER"));

// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

function convertArrayLower(arr){
  let box = [];
  for(let i=0; i<arr.length; i++){
    let new_mango = convertWordLower(arr[i]);
    box.push(new_mango);
  }
  return box;
}

let arr = ["MA", "SA", "I", "SCH", "OOL"];
console.log(convertArrayLower(arr));