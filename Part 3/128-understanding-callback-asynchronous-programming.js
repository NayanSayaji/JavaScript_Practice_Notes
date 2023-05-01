// understand callback

// A callback is a function that is passed inside another function, 
// and then called in that function to perform a task.

// function myFunc(callback) {
//   console.log("Function is doing task 1 ");
//   callback();
// }

// function myFunc2() {
//    console.log("function is doing task 2..")
// }

// here we created a arrow function while calling myFunc
// eg., myFunc(()=>{}) here also this is working as a callback bcoz we have passed a anonymous function as a argument there
//  -------
// myFunc(() => {
//   console.log("function is doing task 2");
// });

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  // checking if typeOf number1 and number2 is number or not 
  // if yes only then call the callback function
    if (typeof number1 === "number" && typeof number2 === "number") {
      onSuccess(number1, number2);
    } else {
      onFailure();
    }
  }
  
  function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
  }
  
  function onFail(){
      console.log("Wrong data type");
      console.log("please pass numbers only")
  }
  getTwoNumbersAndAdd(4, 4,addTwoNumbers, onFail);
  Footer