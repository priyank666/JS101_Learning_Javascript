// Print all the movies except Thor and Avangers..

let arr = ["SpiderMan", "Avangers", "Iron Man", "Ms.Marvel", "Thor", "Black Panther", "Hulk"];



for (i = 0; i<=arr.length-1; i++) {
  if (arr[i]=="Thor" || arr[i] == "Avangers"){
    continue; //skip
  }
  
  console.log(arr[i]);
}
