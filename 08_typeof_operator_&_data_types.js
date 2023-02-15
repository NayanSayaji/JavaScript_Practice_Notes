// typeof operator

// data types (primitive data types)
// string "nayan"
// booleans
// undefined
// null 
// BigInt
// Symbol

let age = 21;

let firstName = "Nayan";

console.log(typeof age);
console.log(typeof 21)
console.log(typeof firstName);
console.log(typeof "Nayan");


// converting number to string 
age = age + "";
console.log(typeof age); // "21"
age = 25 + "";
console.log(age + " " +typeof age); // "25"

// converting string to number
// just + symbol before the string and 
// it'll become number
let myStr = + "21";
console.log(typeof myStr);

myStr = "21";
myStr = +myStr;
console.log(typeof myStr);


let Age = 20;
// number to string using String()
Age = String(Age);
console.log(typeof Age);

// string to number using Number()
Age = Number(Age);
console.log(typeof Age);









