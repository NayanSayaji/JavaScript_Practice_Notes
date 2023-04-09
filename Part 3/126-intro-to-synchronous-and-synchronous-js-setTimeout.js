// synchronous programming vs asynchronous programming
// js is a synchronus programming language
// and single threaded


// Synchronous means the code runs in a particular 
// sequence of instructions given in the program,

// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout is a browser functionality
// The setTimeout is a JavaScript function that takes two parameters. 
// The first parameter is another function, and the second is the time 
// after which that function should be executed in milliseconds.

// setTimeout has a callback queue where the calllbacks of the setTimeout waits

console.log("script start");

// setTimeout(() => {
//   console.log("inside setTimeout");
// }, 1000); // here the time given 1000ms == 1sec 
// is the minimum delay time max time can be more than delay as well

// setTimeout add the function into the callBack queue of browser
// where event loop will allow that function to execute after the completion of all code 


// setTimeout gives a id in return

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id); // by doing this cleatTimeout
// the function which is waiting inside the callback queue 
// with the given id was supposed to be execute after the completion of all code 
// will be cleared from that queue and will not be execute 
console.log("Script end");




// resourses to read more :-
// https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/

