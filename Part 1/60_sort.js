// sort method

// ASCII TABLE
// char : ascii value

// !	33	        exclamation mark
// "	34	        quotation mark
// #	35	        number sign
// $	36	        dollar sign
// %	37	        percent sign
// &	38	        ampersand
// '	39	        apostrophe
// (	40	        left parenthesis
// )	41	        right parenthesis
// *	42	        asterisk
// +	43	        plus sign
// ,	44	        comma
// -	45	        hyphen
// .	46	        period
// /	47	        slash


// 0	48	        digit 0
// 1	49	        digit 1
// 2	50	        digit 2
// 3	51	        digit 3
// 4	52	        digit 4
// 5	53	        digit 5
// 6	54	        digit 6
// 7	55	        digit 7
// 8	56	        digit 8
// 9	57	        digit 9



// :	58	        colon
// ;	59	        semicolon
// <	60	        less-than
// =	61	        equals-to
// >	62	        greater-than
// ?	63	        question mark
// @	64	        at sign


// A	65	        uppercase A
// B	66	        uppercase B
// C	67	        uppercase C
// D	68	        uppercase D
// E	69	        uppercase E
// F	70	        uppercase F
// G	71	        uppercase G
// H	72	        uppercase H
// I	73	        uppercase I
// J	74	        uppercase J
// K	75	        uppercase K
// L	76	        uppercase L
// M	77	        uppercase M
// N	78	        uppercase N
// O	79	        uppercase O
// P	80	        uppercase P
// Q	81	        uppercase Q
// R	82	        uppercase R
// S	83	        uppercase S
// T	84	        uppercase T
// U	85	        uppercase U
// V	86	        uppercase V
// W	87	        uppercase W
// X	88	        uppercase X
// Y	89	        uppercase Y
// Z	90	        uppercase Z


// [	91	        left square bracket
// \	92	        backslash
// ]	93	        right square bracket
// ^	94	        caret
// _	95	        underscore
// `	96	        grave accent


// a	97	        lowercase a
// b	98	        lowercase b
// c	99	        lowercase c
// d	100	        lowercase d
// e	101	        lowercase e
// f	102	        lowercase f
// g	103	        lowercase g
// h	104	        lowercase h
// i	105	        lowercase i
// j	106	        lowercase j
// k	107	        lowercase k
// l	108	        lowercase l
// m	109	        lowercase m
// n	110	        lowercase n
// o	111	        lowercase o
// p	112	        lowercase p
// q	113	        lowercase q
// r	114	        lowercase r
// s	115	        lowercase s
// t	116	        lowercase t
// u	117	        lowercase u
// v	118	        lowercase v
// w	119	        lowercase w
// x	120	        lowercase x
// y	121	        lowercase y
// z	122	        lowercase z


// {	123	        left curly brace
// |	124	        vertical bar
// }	125	        right curly brace
// ~	126	        tilde



// sort method sorts the values or characters with respect to it's ASCII value
// for eg 
// [5,8,36,2000,92] this should be sorted like this 
// [5, 8, 36, 92, 2000]
// but in js sort method sorts according to the ASCII value so it'll be like    [ 2000, 36, 5, 8, 92 ]
// we js is not sorting this as numbers it's sorting this as string and string is sorted as ascii code 
// so js takes the 1st character of ascii code and check it's ascii code and sort according to that..
// so as string the 2000 is first bcoz the 1st char of 2000 is 2 and it's ascii code is smaller than of the others..
// likewise it's with remaining numbers..


// sort method don't return new sorted array like filter, map etc., method instead 
// sort method directly mutates the current array or we can say makes changes in the current array

// const numbers = [5,8,36,2000,92];
// numbers.sort();
// console.log(numbers);
// [ 2000, 36, 5, 8, 92 ]

// const userNames = ['saurabh','nayan', 'ruchi', 'dipashri']
// userNames.sort();
// [ 'dipashri', 'nayan', 'ruchi', 'saurabh' ]
// this is sorting the array alphabetically which is correct bcoz of the ASCII code of small laters..
//but there is an issue which is it again make a different kind of sort when we mix the strings of small and capital alphabets.. bcoz capital leters has ASCII code from 65 to 90 and small letters has ASCII code from 97 to 122
// so capital strings will always comes before the small letters

const userNames = ['saurabh','Nayan', 'Ruchi', 'dipashri']
//  here we make two string starting with capital letters so 
userNames.sort();
// [ 'Nayan', 'Ruchi', 'dipashri', 'saurabh' ]
console.log(userNames);



// but still we want to sort our array so we need to do like this..
// sort method also takes a callback function 
// so we'll give a callback function here..
const numbers = [5,8,36,2000,92];
// then we'll pass 2 parameters let's suppose a and b 
// in that case it'll return the subtraction of those numbers

numbers.sort((a,b)=>{
    return a-b;
});
// if the sub or difference is -tive ... this means the a is smaller than b that's why it's result is -ve so keep it same 
// if difference is positive means the a is greater than b then swap those numbers ----> b, a

// 5, 8
// a - b -----> -3 
// a-b -------> diff is negative ----> a,b
// 5, 8 

// 8 , 36
// a - b -----> -28
// a-b -------> diff is negative ----> a,b
// 5, 8, 36

// 36,2000
// a - b -----> -1964
// a-b -------> diff is negative ----> a,b
// 5, 8, 36, 2000

// 2000 , 92
// a - b -----> 1908
// a-b -------> diff is positive ----> a,b
// 5, 8, 36, 2000

// if we want to sort it in descending order then we can do like, we'll just return the b-a;
numbers.sort((a,b)=> {
    return b - a;
});
// output
[ 2000, 92, 36, 8, 5 ]


// we can write it shortly like this as well 
// when any function is just returnnig any expression then we can write it like this
// numbers.sort((a,b)=> a + b);
// numbers.sort((a,b)=> b - a);


// numbers.sort();
console.log(numbers);


// real life use sorting of products according to price
const products = [
    {productId: 1, productName: "mobile", price: 10000},
    {productId: 2, productName: "bag", price: 2300},
    {productId: 3, productName: "laptop", price: 25000},
    {productId: 4, productName: "book", price: 5000},
    {productId: 5, productName: "macbook", price: 215000},
]

// sort this low to high
// products.sort((a,b)=> a.price-b.price);
// but this will sort and store them into same array due to this our main array is changing so well change this into new array using array cloning
// cloning array by using slice method
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
});
console.log(lowToHigh);

// highToLow
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
});
console.log(highToLow);
