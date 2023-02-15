// arrow functions
// 
// const hello = function(){
//     console.log("Hello world!");
// }

const hello = () =>{
    console.log("Hello world!");
}


const sumOfTwoNumbers = (number1, number2)=>{
    return number1+number2;
} 


const isEven = (number) => {
    return ( number % 2 === 0 )
}


const firstCharacter = (anyString)=>{
    return anyString[0];
}

const findTarget = (arr,target) => {
    for( let i = 0 ; i < arr.length ; i++){
        if (target === arr[i]) {
            return i;
        }
    }return -1;
}