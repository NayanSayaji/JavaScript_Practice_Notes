// objects reference type
// arrays are good but not sufficient 
// for real world Data
// objects store key value Pairs
// objects don't have index

// how to create objects

// const person = { name : "Nayan",  age:22};
const person = { 
    // we can write in this format as well
    // key's inside the qoutes
    // "name" : "Nayan", 
    // "age"  : 22,
    name: "Nayan", 
    age: 22,
    hobbies : ["reading","coding", "talking with h", "listening to her"]
}
// keys are stored as string by default

console.log(person);

// how to access data from objects
// in bracket notation need write keys inside the qoutes 
console.log(person["name"]); // bracket notation
console.log(person.name);// dot notation
console.log(person.age);
console.log(person.hobbies);

// how to add key value pair to abjects 
person["gender"] = "male";
person.gender = "male";

console.log(person);
