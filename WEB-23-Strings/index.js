// given an array of name scount the number of names starting from "a" or "A"

let arr=["Aman", "Anshul", "Pulkit", "Chunnu", "ashwini", "Shweta"];

let count=0;

for (let i=0; i<=arr.length-1; i++) {
    if (arr[i][0]=="a" || arr[i][0]=="A"){
      count++;
    }
}
console.log(count);