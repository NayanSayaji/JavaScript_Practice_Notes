// lexical scope

// Anything related to creating words, expressions, or variables is termed lexical.

// item's lexical scope is the place in which the item got created.

// Another name for lexical scope is static scope.
// The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.

// JavaScript uses lexical scoping to resolve the variable 
// names when a function is created inside another function. 
// It determines the function's parent scope by looking at 
// where the function was created instead of where it was invoked.

// lexical scope (the scope where the invoked variable or function is created..).
// if any variable is written inside the function then it's lexical scope is that function's block only if we try to invoke it from outside then it'll give error.

// const myFunc = function(){
//   // this is the lexical scope of myFunc
//      const name = "myFunc";
// }

// if the function is trying to invoke any function or variable but it's not there in that function's body so it'll go outside and look for that function and likewise if not found then it'll reach to the global scope and if not found there as well then it'll give an error.

// global scope : means global space or a public space.
// global scope 
//  const price = "399 rs" 
//
// const myFunc1 = () => {
//            // myFunc1 function scope    
//     const myFunc2 = function(){    
//          // myFunc2 function scope   
//          console.log("price");             
//     }
// }
// myFunc2 will check for price variable inside it's lexical scope first then it'll look for it outside it which is myFunc1 not found then it'll go to the global scope 

// Local scope means a local region or a restricted region.
//  in js there is not a perticular local scope but is has block and function scope

// block scope : the scope inside the curly braces { }
// block scope is for if-else statements and for loops like.. for , whle, do while etc.,
// eg., if(condition){ 
//        this is the block scope
//        }

// function scope
// the nested function's or variables created inside any function then that functions scope is called as the function scope.


// creating functions inside the multiple functions is also known as the lexical scope chaining or scope chaining 

// Therefore, the scope chain that exists from the variable’s call to the global scope is:

// myFunc3() scope ---> myFunc2() scope ---> myFunc1() scope ---> global scope

const myVar = "value1";
function myApp(){

    function myFunc(){
        const myVar = "value of myFunc"
        console.log("inside myFunc", myVar);
        // here this console.log() will check for the myVar inside it's lexical environment and it is present in it's lexical environment so it's console log "value of myFunc" which is the value of myVar inside myFunc.

        const myFunc2 = function(){
            console.log(var2);
            const var1 = "variable1";
            // an outer scope does not have access to its child scope.
            // console.log(var2);
            // this is not possible
    
            const myFunc3 = () => {
                const var2 = "variable2";
                console.log(var1);
                // An inner (child) scope has access to its parent   (outer) scope,
            }
        }

    }

    console.log(myVar);
    // this will check the myVar inside the lexical environment or scope i.e., inside the myApp function.
    // but it'll not found it inside the lexical invironment then it'll try to find it in the lexical environment of myApp function which is the outer scope i.e., global scope then it'll console.log the value "value1" that is the value of myVar in the global lexical environment or global scope...

    myFunc();
}

myApp();




// Some things to keep in mind:

// Suppose the computer did not find myVar's definition in any of the scopes. In such a case, the computer will return 
// Uncaught ReferenceError: fullName is not defined.

// The global scope is always the last scope of any JavaScript scope chain. In other words, the global scope is where all searches will end.

// An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.

// const price = 100;
// const myFunc1 = () => {
//     const myFunc2 = () => {    
//         const myFunc3 = () => {
//              const myFunc4 = () => {  
//
//                  const funct4 = "func4";
//                  console.log("price"); 
//              }
//          }            
//     }
// }


// in this snippet myFunc 4 can access all the variable or function created inside of myFunc1, myFunc2, myFunc3 and global scope but 
// neither any one of myFunc1, myFunc2, myFunc3 and global scope can access the variable or function created inside of myFunc4