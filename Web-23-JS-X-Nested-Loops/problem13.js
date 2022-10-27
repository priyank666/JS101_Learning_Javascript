let num = 18;
let bag = "";

while (num > 0) {
    
    if (num % 2 == 0 && num > 12) {
        
        bag = bag + num + " ";
    }
    
    num--;
}
 console.log(bag)