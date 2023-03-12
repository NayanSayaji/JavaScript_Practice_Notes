// param destructuring
// When only certain properties of an object or specific indexed array elements are to be used or considered within a function, it can be achieved using the concept of Parameter Destructuring.

// Object
// most used in react

const person = {
    firstName: "Nayan",
    gender: "male"
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj.age); // undefined bcoz age is not present in that object
}

printDetails(person);

// this will create these variables in the local memery of that function.
function printDetails({firstName, gender,age}){
    console.log(firstName);
    console.log(gender); 
    console.log(age);
}
printDetails(person);