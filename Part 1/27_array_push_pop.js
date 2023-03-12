// array push pop
// array is mutable means we can change array values
// array shift unshift

let fruits = ["apple", "mango", "pineapple"];
console.log(fruits);

//push

// fruits.push("banana");
// console.log(fruits);


//pop

// fruits.pop();
// pop() removes last item and returns the 
// value of that last item
// e.g
console.log(fruits.pop());
// this will return the value of removed 
// element is array
// storing the removed items into new array
console.log(fruits);
let poppedFruit = fruits.pop();

console.log(fruits);
console.log("popped fruit is",poppedFruit);

// fruits = [ 'apple' ]

// unshift
fruits.unshift("banana");
// fruits = [ 'apple','banana' ]

fruits.unshift("myfruit");
// [ 'myfruit', 'banana', 'apple' ]
console.log(fruits);


// shift
// is same as pop but ,
// this is used to remove item/ element from start
// this also removes and returns the item like pop
// fruits.shift();
let removeFruit = fruits.shift();
console.log(fruits);
console.log("removed fruit is : ",removeFruit);


// unshift and shift is same as 
//  push    &   pop
// but as shift and unshift is slower than push pop
// because shift and unshift functions need to 
// shift those all elements into memory first and 
// after that add or remove element from it so it 
// takes much time as compare to push pop