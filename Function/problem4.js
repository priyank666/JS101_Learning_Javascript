// write a function to reverse the string..

function reverse(str){

let new_str = "";

for (let i=str.length-1; i>=0; i--){
  new_str+= str[i];
}
 return new_str;
}

let rev = reverse("ALONE");

console.log(rev);
