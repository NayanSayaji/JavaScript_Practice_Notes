// function declaration 
// A function created with a function declaration is a Function 
// object and has all the properties, methods and behavior of 
// Function objects. See Function for detailed information on functions.

// By default, functions return undefined. To return any other 
// value, the function must have a return statement that 
// specifies the value to return.

// Syntax
function name(params) {
    // function body
}

function hello(){
    console.log("Hello world!");
}
hello();// calling function hello

// calling a function , invoke a function, run all are same

//                        parameters
function sumOfTwoNumbers(number1, number2){
    return number1+number2;
}     
// undefined + undefined = NaN (not a number)
//                              arguments
const returnedValue = sumOfTwoNumbers(5,5);
console.log(returnedValue);


// const returnedValue = sumOfTwoNumbers(5,);
// const returnedValue = sumOfTwoNumbers();

// if we don't pass the number of arguments required then it'll return NaN(Not a Number) bcoz if the argument is not passed then it'll be undefined
// so any number + undefined = undefined



// function of even odd 
// input : number
// output: true of false

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

function isEven(number) {
    return ( number % 2 === 0 );
    // number % 2 is equal to the remainder i.e,  5 % 2 = 1
    // and the whole expression 
    // number % 2 === 0 will check whether the remainder is
    // equal to 0 or not and return true if it is 0 else false. 
}

console.log(isEven(5));



// function 
// input : string
// output : firstCharacter

function firstCharacter(anyString){
    return anyString[0];
}

console.log(firstCharacter("nayan"));



// function
// input : array, target (number)
// output : index of target if found it in array

function findTarget(arr,target) {
    for( let i = 0 ; i < arr.length ; i++){
        if (target === arr[i]) {
            return i;
        }
    }return -1;
}

const myArray = [21,5,6,4,7];
const ans = findTarget(myArray,7);
console.log(ans);