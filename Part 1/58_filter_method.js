// filter method

// = = = this triple equal to operator returns true or false value

const numbers = [1,3,2,4,5,6,9];

// const isEven = function(number){
//     return number%2===0;
// }

// // filter method takes callback function as a input
// // and that callback should return a boolean value true or false

// const evenNumbers = numbers.filter(isEven);
// filter function will pass 1 by 1 number to the isEven function from numbers[] array
// // and it will return the values and or array of values on which the callback function returns true value and we'll save those values into variable evenNumbers which will save those values of array
// console.log("evenNumbers : ",evenNumbers);
// // evenNumbers :  [ 2, 4, 6 ]

// we can do this using arrow function as well
// directly by using the anonymous arrow function

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers); 