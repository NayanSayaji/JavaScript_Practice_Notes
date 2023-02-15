// function expression 
// when we create any function like variables then they are 
// called as function expression

const hello = function(){
    console.log("Hello world!");
}
console.log(hello);

const sumOfTwoNumbers = function(number1, number2){
    return number1+number2;
} 
const ans = sumOfTwoNumbers(5,9);
console.log(ans);

const isEven = function(number) {
    return ( number % 2 === 0 )
}
console.log(isEven(2));

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