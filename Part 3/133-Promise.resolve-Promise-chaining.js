// Promise.resolve
// Promise chaining


// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })


// then()
// then method hamesha promise return karta hai

// Promises are a neat way to fix problems brought about by 
// callback hell, in a method known as promise chaining.


// creating a function returning promise
function myPromise(){
    return new Promise((resolve, reject)=>{
      resolve("foo");
    })
  }
  
  // consume promise
  myPromise()
    // here the value parameter is having the value parameter which is having the returned 
    // by the resolve method when promise is resolved successfully
    .then((value)=>{
      console.log(value);
      value += "bar";
      return value;// if we dont return value here then by default it'll return undefined

      // internally this works as 
      // return Promise.resolve(value);
    })
    .then((value) =>{
      // now the value parameter is having the value of the returned promise of above .then function
      console.log(value);
      value += "baaz";
      return value;
    })
    .then(value=>{
      console.log(value);
    })
  
// Promise chaining
// In this method, we defining what we need to do when the first task is complete using the .then handler.

    // Promise
    //   | -----------> resolve
    // .then ---------> return
    //   |
    // .then ---------> return
    //   |
    // .then ---------> return

    // Let me make it simpler: it's similar to giving instructions to someone. 
    // You tell someone to " First do this, then do that, then this other thing, 
    // then.., then.., then..." and so on.

    // The first task is our original promise.
    // The rest of the tasks return our promise once one small bit of work is completed
 
    // Note: don't forget to write the return word inside your .then handler. 
    // Otherwise, it won't work properly. 
    // If you're curious, try removing the return once we finish the steps:



//     Error handling
// We need a way to handle errors when something goes wrong. 
// But first, we need to understand the promise cycle:
// How to use the .finally() handler
// there are three handlers in promises 
// .then .catch and .finally


// There's something called the finally handler which works regardless of whether our promise was resolved or rejected.

// For example: whether we serve no customers or 100 customers, our shop will close at the end of the day

// If you're curious to test this, come at very bottom and write this code: 👇

// .finally(()=>{
//   console.log("end of day")
// })

// the finally block always executes in js 
// regardless promise is resolved or reject 
// it not execute if and only if there are any internal error like 
// execution stops in between or there is an infinite loop before the finally block


// https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/