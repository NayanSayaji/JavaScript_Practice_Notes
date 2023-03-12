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



// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Conditional Operators
// Type Operators

// Arithmetic Operators
// Operator	    Description
// +	        Addition
// -	        Subtraction
// *	        Multiplication
// **	        Exponentiation (ES2016)
// /	        Division
// %	        Modulus (Division Remainder)
// ++	        Increment
// --	        Decrement


// Assignment Operators
// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// The Addition Assignment Operator (+=) adds a value to a variable.

// Assignment
// let x = 10;
// x += 5;

// Operator	Example	        Same As
// =	        x = y	        x = y
// +=	        x += y	        x = x + y
// -=	        x -= y	        x = x - y
// *=	        x *= y	        x = x * y
// /=	        x /= y	        x = x / y
// %=	        x %= y	        x = x % y
// **=	        x **= y	        x = x ** y



// Comparison Operators
// Operator	Description
// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	        less than or equal to
// ?	        ternary operator


// JavaScript Logical Operators
// Operator	    Description
// &&	        logical and
// ||	        logical or
// !	        logical not



// JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers.

// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
//
// Operator	    Description             Example	    Same as	        Result	    Decimal
// &	        AND	                    5  & 1	    0101 & 0001	    0001	        1
// |	        OR	                    5 | 1	    0101 | 0001	    0101	        5
// ~	        NOT	                    ~ 5	        ~0101	        1010	        10
// ^	        XOR	                    5 ^ 1	    0101 ^ 0001	    0100	        4
// <<	        left shift	            5 << 1	    0101 << 1	    1010	        10
// >>	        right shift	            5 >> 1	    0101 >> 1	    0010	        2
// >>>	        unsigned right shift	5 >>> 1	    0101 >>> 1	    0010	        2


// Conditional Operators
// Type Operators



