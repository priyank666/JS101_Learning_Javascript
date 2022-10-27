//given an array find out the number of elements for which both the neigbors are greater than the element?

let arr=[5,6,7,9,8,10];
let bag="";
for(let i=1; i<arr.length-1; i++) {
  if(arr[i] < arr[i-1] && arr[i] < arr[i+1]){
    bag+=arr[i]+" ";
  }
}
console.log(bag);