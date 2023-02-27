// important array methods..

const numbers = [5,4,8,6,32,15];

// function multiplyBy2(number, index) {
//     console.log("index is ", index);
//     console.log(`${number}*2 = ${number*2}`);
// }

// multiplyBy2(numbers[0], 0);

// // for performing that operation on each Element  
// for (let i = 0; i < numbers.length; i++) {
//     multiplyBy2(numbers[i], i);
// }


// function printAll(number, index) {
//     console.log(`index is ${index} and number is ${number}`);
// }

// forEach is a method of arrays but we can say it works as loop 

// // for each takes a call back means this takes a function as input
// numbers.forEach(printAll);
// above we are declaring function outside the forEach
// but
// we can define anonymous function inside for each as well
// numbers.forEach(function(number,index){
//         console.log(`index is ${index} and number is ${number}`);   
// })

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })


// array of objects
const users = [
    {firstName: "Nayan", age: "21"},
    {firstName: "Ruchi", age: "20"},
    {firstName: "Rohit", age: "23"},
    {firstName: "Kuki", age: "19"}
]


// users.forEach(function(user){
//     console.log(user.firstName);
// });
// we can create anonymous function using arrow function in forEach method
users.forEach((user, index)=>{
    console.log(user.firstName, index);
})



// // we can do this using for of loop a
// for(let user of users){
//     console.log(user.firstName);
// }
// // forEach is a old method than of for of loop