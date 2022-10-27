let str = "Naman"
let line1 = ""
for (i = str.length-1; i >= 0; i--) {
  line1 = line1 + str[i]
}
let line2=""
for (i=0; i<str.length; i++) {
  line2 = line2 + str[i]
}
if(line1 == line2 ) {
  console.log("Yes");
}
else {
  console.log("No");
}