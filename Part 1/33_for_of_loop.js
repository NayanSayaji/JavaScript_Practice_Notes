// for of loop 

const fruits = ["apple", "pineapple", "mango"];
const fruits2 = [];

// Syntax
// for (variable of iterable)
//   statement

//      item  of arrayName
for(let fruit of fruits){
    console.log(fruit);
    console.log(fruit.toUpperCase());
    fruits2.push(fruit.toUpperCase());
}