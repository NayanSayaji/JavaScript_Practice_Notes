// while_loop_in_arrays

const fruits = ["apple", "pineapple", "mango"];
const fruits2 = [];
let i = 0 ;

while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);