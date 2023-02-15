// primitive vs reference data types


// Primitive Datypes
// Examples of such data types are numbers, strings, 
// booleans, null, and undefined.

// When you declare a primitive data type in 
// JavaScript, it is stored on a stack. A stack is a 
// simple data structure that the computer uses to 
// store and retrieve data quickly.

// A primitive data type on the stack is identified  
// by the variable name you used for declaration in 
// your program. With each primitive data type you 
// create, data is added to the stack.

// To implement this, say we declare a variable, 
// numOne, and give it a value of 50. We go on to 
// create another variable, numTwo, and assign it 
// the same value of 50. So both variables have the 
// same value.

// What happens on the stack is that, the computer 
// creates room for numOne and stores its assigned 
// value on the stack. When numTwo is created, the 
// computer again creates room, and stores 50 on the 
// stack. It does not matter that both variables are 
// assigned the same value.

//   stack
//  _______   variable names
// |______| 
// |______|   
// |__50__|   num2
// |__50__|   num1

let num1 = 50;
let num2 = num1;

console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);
num1++;
console.log("after icreamenting num1")
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);

//   stack after increment
//  _______   variable names
// |______| 
// |______|   
// |__50__|   num2 value of num2 will not change as it present on the stack memory of that variable
// |__51__|   num1




// reference types
// Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.
// this include arrays, functions, collections, and all 
// other types of objects.

// in reference datatypes the value of any reference data type is stored into the heap memory and the pointer to the 
// memory location is stored into the stack memory of that variable
// so if we have 2 reference datatypes and we assign the value of first object to 2nd then this value is stored on the 
// heap memory as it is the reference data type.. 
// and 
// in the stack memory where the memory for those 2 objects is allocated will have the pointer pointing to 
// heap memory location
// lets take a example  
// obj1 = { name:"nayan", age: '21' }
// obj2 = obj1
//    Stack memory                   heap memory
//  having pointer to heap   having value of the objects
//  _________________           _______________________
// |________________|          |  {memory location}   |
// |________________|          |         01xf         |  
// |________________|          |                      |
// |________________|          |     value of obj1 &  |
// |________________|          |      obj2            |
// |________________|          |    name:"nayan"      |
// |_obj2__{01xf}___|  ___     |    age: 21           |
// |_obj1__{01xf}___|  __|---->|______________________|
// both the memory locations have the same pointer which is pointing to the heap memory location 


// like
// Now, we could create a variable, object1, and assign an object to it. What if like before, we create another 
// variable object2, and assign it to object1. Does that mean another object will be created on the heap? 
// The answer is no.
// let object1 = {
//     name:'Nayan',
//     age:20
//     };
//     let object2 = object1;
    
//     //updating object1,
//     object1.age = 21;
    
//     console.log(object2); 

// Since the object already exists on the heap, object2 and object1 will both point to the same object.
// If we log both variables to the console, we see that the change affected them both. This is because they are 
// pointing to the same object on the heap – and updating one variable of course affects the other.

// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1 ", array1);
console.log("array2 ", array2);
array1.push("item3");
console.log("after adding new item to array :");
console.log("array1 ", array1);
console.log("array2 ", array2);