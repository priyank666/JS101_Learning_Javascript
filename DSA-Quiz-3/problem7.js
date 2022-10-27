let str = "abbrce"
let count = 0;

for(let i=0; i<5; i++) {
  
  if(str[i]=="a" || str[i]=="i" || str[i]=="o" || str[i]=="e" || str[i]=="u"){
    count++;
  }
}
if (count>Math.floor(5/2)){
  console.log("True")
}else {
  console.log("False")
}