// difference between dot and bracket notation


const person = { 
    name: "Nayan", 
    age: 22,
    "person hobbies " : ["reading","coding","sleeping"]
}
//diff 1 
console.log(person["person hobbies "]); 
// allowed

// console.log(person.person hobbies); 
// not allowed we cant use spaces between names for that we need to write it in form of string [" "]

// diff 2
// if we have to add a different key from an variable and we want store it in object then for eg.,
const key = "email";
// from this we want to make "email" as a key

// if we do like this
person.key = "rns@gmail.com";
console.log(person);
// or 
person["key"] = "rns@gmail.com";
console.log(person);
// this will make  
// key : "rns@gmail.com"
// but what we want is 
// email : "rns@gmail.com"

// so instead what we do is 
person[key] = "rns@gmail.com";
console.log(person);