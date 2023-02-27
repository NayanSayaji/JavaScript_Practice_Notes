// arrow functions

// we can use let var const anything but const is the most used keyword


// when there is no parameters we must need to mention paranthesis
const hello = () =>{
    console.log("Hello world!");
}


// if there is only one parameter then we can avoid writting 
// paranthesis around the parameters....
// const function_name = param => expression
//eg.,
// const isEven = number => ( number % 2 === 0 );

// we can write paranthesis and this is a goood way 
// const function_name = (param) => expression
// const isEven = (number) => ( number % 2 === 0 )


// const function_name = param => {
//   statements
// }
const isEven = (number) => {
    return ( number % 2 === 0 );
}


// const function_name = (param1, paramN) => expression
const sumOfTwoNumbers = (number1, number2)=>{
    return number1+number2;
} 
// there is just a expression so we can write this like as well 
// const function_name = (param1, paramN) => expression

// const sumOfTwoNumbers = (number1, number2) => number1 + number2;
// console.log(sumOfTwoNumbers(5,6));

const firstCharacter = (anyString)=>{
    return anyString[0];
}
// we can write like this as well
// const firstChar = anyString => anyString[0];


// when we have multiple parameters that time we need to write paranthesis around params or it'll throw a error
// const function_name = (param1, paramN) => {
//   statements
// }
const findTarget = (arr,target) => {
    for( let i = 0 ; i < arr.length ; i++){
        if (target === arr[i]) {
            return i;
        }
    }return -1;
}

