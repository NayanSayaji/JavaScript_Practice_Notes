// array desructing 

const myArray = ["value1", "value2"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("Value of myVar1 is ",myVar1);
// console.log("Value of myVar2 is ",myVar2);


// desructuring
let [myVar1, myVar2] = myArray;
console.log("Value of myVar1 is ",myVar1);// value1
console.log("Value of myVar2 is ",myVar2);// value2


// here the myArray is now is divided in form of it's
// elements
// so now 1st item of myArray is assigned to variable
// myVar1 which is the 1st varible in that syntax
// likewise 2nd value to myVar2
// and if the array is having more values than of 
// assining then their is no problem
// only 2 variables will be declared then..
const myArray1 = ["value1", "value2", "value3"];

[myVar1, myVar2] = myArray1;
console.log("Value of myVar1 is ",myVar1);// value1
console.log("Value of myVar2 is ",myVar2);// value2


// now 3rd case if we have only 1 value in array and 
// we are trying to declare more variables with that 
// array then those variables will have value 
// undefined

const myArray2 = ["item1"];

[myVar1, myVar2] = myArray2;
console.log("Value of myVar1 is ",myVar1);// item1
console.log("Value of myVar2 is ",myVar2);// undefined



// now if you are willing to store the value of 3rd 
// element into myVar2 just put a empty space there 
// to skip that 2nd item
const myArray3 = ["name", "age", "value" ];

[myVar1, , myVar2] = myArray2;
console.log("Value of myVar1 is ",myVar1);// name
console.log("Value of myVar2 is ",myVar2);// value


// how to store the remaining values into a separate array
// we can use spread operator
const myArray4 = ["name", "age", "value" , "roll", "javaScript"];

// remaining values of myArray4 will be stored into myNewArray
[myVar1, myVar2, ...myNewArray] = myArray4;
console.log("Value of myVar1 is ",myVar1);// name
console.log("Value of myVar2 is ",myVar2);// age
console.log("Values of myNewAray are ",myNewArray);
//"value" , "roll", "javaScript"