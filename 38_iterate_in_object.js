// how to iterate in object
const person = { 
    name: "Nayan", 
    age: 20,
    "person hobbies " : ["reading","coding","sleeping", "talking with her", "listening to her"]
}

// for in loop 
// Object.keys


// for(let key in person){
//     console.log(key);// key 
//     console.log(person[key]); // value

//     console.log(key, " : ", person[key]); // value
    
//     // template string
//     console.log(`${key}`);// key 
//     console.log(`${person[key]}`); // value

//     console.log(`${key} : ${person[key]}`); // value
// }



console.log(Object.keys(person));

const val = Array.isArray(Object.keys(person));
console.log(val);


for(let key of Object.keys(person)){
    console.log("value of ",person["key"],person[key]); // value
    console.log(`${key} : ${person[key]}`); // value

}















