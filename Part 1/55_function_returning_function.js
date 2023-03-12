// function returning function

function myFunc(){
    // we can return any value is function
    // such as 
    // return "a";
    // return 15;
    // return [1,2,3];

    function hello(){
        return "hello world";
    }
    // we are returnnig a function here 
    // this is function returning function
    return hello;
}

const ans =myFunc();
// now this ans became the function
// function hello(){
//     return "hello world";
// }
// when we call like ans() then this function will be callled
console.log(ans());

// higher order function
// when any function do callback or accepting function as input or a function returning a function then
// this function is knows as higher order function.