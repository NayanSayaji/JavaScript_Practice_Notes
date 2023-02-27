const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {
//     key3: "value3"
// }


console.log(obj1.key1); // value1

// console.log(obj2.key1); // undefined
// obj2.key1 is undefined but we don't it to give undefined instead it should go to obj1 for finding the key1 and if it founds key1 at obj1 then return it ( or ptints it)



// const obj2 = {}; // empty object {}
// there is one more way to create empty object

// The Object.create() is static method creates a new object, using an existing object as the prototype of the newly created object.

// Object. create() method returns a new object with the specified prototype object and properties

const obj2 = Object.create(obj1);
// so here obj2 is created by considering obj1 as a prototype 

console.log(obj2);// {}  --- empty object obj2
// by looking at obj2 declaration we can say that obj1 and obj2 are having some connection

// we can add values into this empty obj
obj2.key3 = "value3";

console.log(obj2.key2); // value2
// so now js didn't found key2 inside obj2 so it goes at obj1 looking for key2 

// this is happening bcoz of created a obj2 using Object.create method
// let's understand why this is happening

obj2.key2 = "unique";
console.log(obj2.key2); // unique
// js founds the key2 inside the obj2 so it returned that value

// 


// __proto__ is a way to inherit properties from an object in JavaScript. __proto__ a property of Object.prototype is an accessor property that exposes the [[Prototype]] of the object through which it is accessed.

// so we can say that obj2 is created and it has the properties of obj1 and obj1 is the prototype of obj2
console.log(obj2);
// {key3: 'value3', key2: 'unique'} // this is obj2
// key2: "unique"
// key3: "value3"
//     [[Prototype]]: Object
//     key1: "value1"
//     key2: "value2"


// when we look try to access obj2 it return key: value pairs in obj2 and return a object [[prototype]] which is the obj1 
// so because of this we can access the obj1 by using obj2


// __proto__ and [[prototype]] both are same...

// officail ecmascript documentation is written as 
// [[prototype]]

// if browser is updated then it shows protype as [[prototype]] else it shows this __proto__

// [[prototype]] will take 









