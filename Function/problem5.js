// using the above function, check if a string is palindrome or not.
let s = "naman";

function reverse(str){

let new_str = "";

for (let i=str.length-1; i>=0; i--){
  new_str+= str[i];
}
 return new_str;
}

let rev = reverse(s);

if(s === rev) {
  console.log(s, "is a palindromic string");
} else {
    console.log(s, "is not a palindromic string");
}