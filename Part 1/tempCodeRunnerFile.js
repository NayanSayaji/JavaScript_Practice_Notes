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
// value of that last item and returns a array element
// e.g
console.log(fruits.pop()); // --- pineapple removed
// this will return the value of removed 
// element is array
// storing the removed items into new array
console.log(fruits);
let poppedFruit = fruits.pop(); // mango removed and stored into poppedFruit[]

console.log(fruits);
console.log("popped fruit is",poppedFruit);

// fruits = [ 'apple' ]

// unshift
fruits.unshift("banana");
// fruits = [ 'apple','banana' ]

fruits.unshift("myfruit");
// [ 'myfruit', 'banana', 'apple' ]
console.log(fruits);