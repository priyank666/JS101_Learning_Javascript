//check palindrome

let N = 6;
let str = "nrupul";
let bag = "";
for (let i=N-1; i>=0; i--){
  bag = bag + str[i];
}
if(bag == str) {
  console.log("Yes");
} 
else {
  console.log("No");
}