// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like objects)
// duplicate keys are not allowed like objects

// difference between map and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key like 
// array, number, string


// object literal
// An object literal is a list of zero or more pairs 
// of property names and associated values of an object,
// enclosed in curly braces ( {} )

// key -> string
// key -> symbol

// const person = {
//     firstName: "nayan",
//     age: 21
// }

// console.log(person.firstName);
// console.log(person["firstName"]);

// for(let key in person){
//     console.log(typeof key);
// }// string , string


// map
// key -> anything (string, number, array, object literal )
const person = new Map();
person.set('firstName', 'Nayan');
person.set('age',21);
person.set(1,'one');
// person.set([1,2,3], 'one two three');
// person.set({numbers: '1,2,3'}, 'one two three');
// console.log(person);

// how to access value in map 
// get() method
// console.log(person.get('firstName')); // firstname is string so it's inside qoutes ' '

// console.log(person.get(1));// 1 is number so no need of qoutes ' '  

// if we want to print only keys then there is a method for that
// keys() method
// for (const key of person.keys()) {
//     console.log(key, typeof key);
// }

for (const key of person) {
    console.log(key);
} 
// this will print the keys and values in form of array so this stores key and value in form of array
// [ 'firstName', 'Nayan' ]
// [ 'age', 21 ]
// [ 1, 'one' ]

// lets check the typeof key and value container in map is it array
for (const key of person) {
    console.log(Array.isArray(key));
} 
// let's destructure the array
for (const [key, value] of person) {
    console.log(key, value);
} 


// we can directly pass a array of key and values in map
const users = new Map([['firstName', 'Nayan'], ['age', '21']]);
console.log(users);


// object
const person1 = {
id:1,
firstName:"ruchi"
}
// object
const person2 = {
id:2,
firstName:"nayan"
}

const userInfo = new Map();
// we want to set that object as a key
userInfo.set(person1,{age:20, gender:'female'});
userInfo.set(person2,{age:21, gender:'male'});
console.log(userInfo);
// object  ==> object       object is mappped with object
// Map(1) {
//     { id: 1, firstName: 'ruchi' } => { age: 20, gender: 'female' }
//   }

 
console.log(person1.id); // accessing object
console.log(userInfo.get(person1).gender);
// this will give the gender of the person1 object from map
console.log(userInfo.get(person2).gender);