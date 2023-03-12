// for loop in array

let fruits = ["apple", "pineapple", "mango", "banana"];

console.log(fruits.length); // 4
console.log(fruits[fruits.length-2]);//mango


for (let i = 0; i < fruits.length; i++) {
    // printing values using for loop
    console.log(fruits[i]);
    // printing values in Uppercase
    console.log(fruits[i].toUpperCase());
}

// store values of fruits1 in fruits2 in uppercase form
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);