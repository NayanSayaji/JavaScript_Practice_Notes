// undefined
// null


let firstName;
console.log(typeof firstName); // end

// firstName = "nayan";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);

// myVariable = "nayan";
// console.log(typeof firstName, firstName);

// console.log(typeof null); 

// it prints object but is should have to null
// so this is the bug of JS


// BigInt
let number = 12345;// normal int
console.log(number);
console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991

let num = BigInt(90071992547405634343115421454991);
let age = BigInt(2**53);
let num1 = 90040991n;
let age1 = 21n;

console.log(num);
console.log(age1);
console.log(age);
console.log(num1);