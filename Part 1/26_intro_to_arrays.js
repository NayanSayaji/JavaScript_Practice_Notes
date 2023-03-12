// intro to arrays
// reference type 
// how to create arrays 

// collection of items
// which have indexes starting from 0
// indexes = [ 0, 1, 3, 4, ..........]

let fruits = ["apple", "mango", "pineapple"];
let numbers = [1,2,3,4,5];
let mixed= [1,2,2.34,"mango", "computer", null, undefined];

console.log(fruits);
console.log(numbers);
console.log(mixed);

// we can change any element in array by using the 
// index
// fruits array before changing 
// fruits = ["apple", "mango", "pineapple"];
//               0        1          2
fruits[1] = "banana";
console.log(fruits);
// after change
// fruits = ["apple", "banana", "pineapple"];



console.log(typeof fruits);
// object

let object = {}; // object literal

// how to check the given object is array
// Array.isArray() method
console.log(Array.isArray(fruits));
// true
console.log(Array.isArray(object));
// false

// array indexing









