// I want following output
//1-*2-*3-*4-*

let x = "";

for (let i = 1; i <= 4; i++) {
  x += i + "-*";
}

console.log(x);