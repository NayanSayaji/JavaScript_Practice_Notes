// how to clone array 

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];

// way 1 by using the slice method
// this is fasted way
let array3 = array1.slice(0);

// way 2 by using concat to a empty array
let array4 = [].concat(array1);

// new way by using spread operator (...)
// it will spread the values of array1 into array5
// this is most used 
let array5 = [...array1];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2s);


//  how to concatenate two arrays

let array1 = ["item1", "item2"];
// way 1 by using the slice and concat method
// let array2 = array1.slice(0).concat(["item3", "item4"]);

// way 2 by using the concat method
// let array2 = [].concat(array1, ["item3", "item4"]);

// spread operator
// easiest way
let newArray = ["item3", "item4"];
let array2 = [...array1, ...newArray];

console.log(array1===array2);
console.log(array1);
console.log(array2);
