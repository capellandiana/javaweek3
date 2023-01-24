// Write a function that will allow you to calculate 
// how many slices of pizza x each person y would get if 
// they shared evenly. The function should return an interpolated 
// string like Each person gets 4.00 slices of pizza; 
// from our 8 slice pizza x being a decimal in 
// case there is no way to split the pizza evenly.

//console.log(sharePizza(8, 2)); 
// Output: Each person gets 4 slices of pizza; from our 8 slice pizza

function sharePizza(x, y) {
    return x / y;
}
// console.log(`each person gets ${(sharePizza)} slices of pizza; from our ${(x)} slice pizza.`)
console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));
//each person gets 4 slices of pizza; from our 8 slice pizza