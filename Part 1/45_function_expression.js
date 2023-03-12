// function expression 
// A function can also be created using an expression 

// when we assign any function to the variables then they are 
// called as function expression

// we can use let var or const anything we want but mostly
// we use const

// if a function dont have any name then its known as
// anonymous function
// function() {
//     // function block
// }
// and we assign that it into the variable then the function 
// have the name of the variable.

const hello = function(){
    console.log("Hello world!");
}
// console.log(hello);

const sumOfTwoNumbers = function(number1, number2){
    return number1+number2;
} 
// const ans = sumOfTwoNumbers(5,9);
// console.log(ans);

const isEven = function(number) {
    return ( number % 2 === 0 )
}
// console.log(isEven(2));

const firstCharacter = function(anyString){
    return anyString[0];
}

const findTarget = function(arr,target) {
    for( let i = 0 ; i < arr.length ; i++){
        if (target === arr[i]) {
            return i;
        }
    }return -1;
}