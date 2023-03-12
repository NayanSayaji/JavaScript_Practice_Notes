// Hoisting 


// in javaScript we can call any function before the declaration
// which is created using function declaration
hello();
function hello(){
    console.log("hello");
}
hello();

// but if we created any function using function expression 
// or arrow function then we can't call a function before 
// declaration it throughs a error..
// eg
// hello();
// const hello= function(){
//     console.log("hello");
// }
// ReferenceError: Cannot access 'hello' before initialization
// i.e., Cannot access 'functionName' before initialization


console.log(msg);
var msg = "hello";
// in case of a variable if we try to access any variable
// before declaration of variable which is created variable using var 
// then it'll return undefined 
// but if we try to to access any variable before declaration 
// of variable which is created variable using const let 
// then it'll give error 
console.log(hello1);
const hello1 = "hello1";
//ReferenceError: Cannot access 'hello1' before initialization

