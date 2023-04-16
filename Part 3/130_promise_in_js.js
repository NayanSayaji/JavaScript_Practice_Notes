// Promise

// The Promise object represents the eventual completion (or failure) of an asynchronous 
// operation and its resulting value.

// A Promise is in one of these 3 states/status:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// old name of promise is futures

// A Promise is a proxy for a value not necessarily known when the promise is created. 
// It allows you to associate handlers with an asynchronous action's eventual success 
// value or failure reason. This lets asynchronous methods return values like synchronous methods:
// instead of immediately returning the final value, the asynchronous method returns 
// a promise to supply the value at some point in the future.


// setTimeout has a callback queue
// likewise promises has a microtask queue



// Successful call completions are indicated by the resolve function call, 
// and errors are indicated by the reject function call.

// You can create a promise using the promise constructor like this:

// let promise = new Promise(function(resolve, reject) {    
//     // Make an asynchronous call and either resolve or reject
// });

// The word 'asynchronous' means that something happens in the future, not right now. 

console.log("script start");
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// we have passed a function ( this function is known as executor function )in promise and there we passed a 
// arrow function with resolve and reject parameters.

// A promise object has the following internal properties:

// 1.   state – This property can have the following values:
// pending: Initially when the executor function starts the execution.
// fulfilled: When the promise is resolved.
// rejected: When the promise is rejected.


// 2.  result – This property can have the following values:

// undefined: Initially when the state value is pending.
// value: When resolve(value) is called.
// error: When reject(error) is called.

// resolve is a method which can be called
// we can pass anything inside resolve which can be a array object value string


// there is a Promise class in js
//  we create new object of promise using new constructor bcoz                                
// this is the executor function which is written inside the promise 


// () => {
//    anything;
// } 
// this kind of array function is known as flat arrow function

const friedRicePromise = new Promise(
    // executor function 
    // resolve is a parameter that show is the promise is completed
    // if promise is not completed then it'll take reject only
    (resolve, reject) => {
    // for checking whether few things are present in the bucket for making rice or not
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve({ value: "friedrice" }); // this shows that when the promise will be completed / resolved 
                                        // then resolve will return a object which has name value and that 
                                        // value is having a value friedrice

                                        // this is not neccessary to name that key as a value 
                                        // you can pass any name to the key and can pass any object through
                                        // resolve
    } else {
        reject("could not do it");
    }
})

// now we have created or produced a promise

// consume means using 
// how to consume 


// call back function of then will have the value of promise after promise is resolved 
// and error for when promise will be rejected

// friedRicePromise.then(
//     // jab promise resolve hoga 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     },
//     // jab promise reject hoga
//     (error)=>{
//         console.log(error);
//     }
// )

// but insted of these two call back function we can add only one callback function and 
// add .catch using the promise chaining

// consuming promise
// whatever 
friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice) => { // this parameter inside .then is the value returned by the resolve function in promise
        console.log("lets eat ", myfriedRice);
    }).catch(
        (error) => { // this error parameter is passed by the reject function in promise
            console.log(error)
        })

        // If at any point in the chain of functions a 
        // value is rejected the chain will skip to the 
        // nearest catch() handler.


setTimeout(() => {
    console.log("hello from settimeout")
}, 0)


// promise is a object and is also a browser functionality 
// so browser will consume the promise
// .then and .catch methods will be added to microtask queue
// means promise will be added to microtask queue



for (let i = 0; i <= 100; i++) {
    console.log(Math.random(), i);
}

console.log("script end!!!!")


// so as browser is having the promise functionality so browser will execute promise
// before that javascript will execute it's code 
// so 
// 1...... at first promise will be saved to the global execution context
// 3......then promise is called but it'll be stored into microtask queue
// 4......then setTimeout will be stored inside callback queue
//so before executing microtask queue and callback queue the whole js file will be execute first
// so the for loop will be executed
// then script end will be printed.
// then it'll check whether the call stack is empty 
// if yes then microtask queue will send that promise for further execution and after that callback queue will send setTimeout 

// first queueMicrotask will execute and then callback queue will execute





// script start
// for loop 100 lines
// script end
// promise will be printed
// then hello from setTimeout


// https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/

// https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/




//                         A promise is made
//                                 |
//                                 |
//                             pending
//                             /      \
//                            /        \
//                     resolve         reject
//                         |              |
//                       .then            |
//                         |             .catch
//                       .then            |
//                            \          / 
//                             \        /
//                              .finally

        
// when promise is resolved it returns a promise again then again call it with .then handler
// and if the promise is rejected then .catch handler for returning error object