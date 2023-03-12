// use const for creating array

// we can use const in arrays 
// as array if stored in heap memory and the stack is 
// having the value of the pointer of that heap memory
// so if we will change any value in array it'll 
// make changes in heap memory and not in stack so 
// it'll work..

// we can use push pop here
// but we cant assign values 
// for example we can't assing new values to array using 
// square brackets []

// heap memory ["apple", "pineapple", "mango"]
// stack 0x11

const fruits = ["apple", "pineapple", "mango"];
fruits.push("banana");
console.log(fruits);