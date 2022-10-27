// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

function lastIndex(animals,search){
  let index;
  for (let i=0; i<animals.length; i++){
    if(animals[i] == "Dodo"){
      index = i;
    }
  }
  return index;
}
console.log(lastIndex(animals,"Dodo"));
