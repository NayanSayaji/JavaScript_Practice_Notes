// map method

const numbers = [2,4,5,6,1,3,9];

// map aslo takes a callback function as a Input 
// we can create it inside as well as outside of the method

const square = function(number) {
    return number* number;
}

// map function creates a new array we can store it in new varible
const squareNumber = numbers.map(square);
// this map function will pass 1 by 1 numbers of array numbers[] to the square function and the square function will return the square of each number and those all squares will be stored inside the squareNumber variable.


const cube = function(number) {
    console.log(number*number*number);
}
// in this cube function we are not returnig any value.. we are just doing console.log of each cube value so this numbers will be printed but the new array will not contain that value bcoz it's not returning any value and instead of these values that array will be have undefined values bcoz our function is not returning any value.

const cubeNumber = numbers.map(cube);
// after this statement the cubes will get printed bcoz we are executing that function but cubeNumber array don't have those values in it.

console.log(cubeNumber);
// ouput
[
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ]
// so  whenever we are using map function it's crusial to return the values instead of doing console.log 

// we can also use arrow functions in map function 
console.log("Using Arrow Function :");
const squareUsingArrowFunc = numbers.map((number, index)=> {
    return `index : ${index} , value :${number* number}`;
});



// map method realworld example

const users = [
    {firstName: "Nayan", age: "21"},
    {firstName: "Ruchi", age: "20"},
    {firstName: "Rohit", age: "23"},
    {firstName: "Kuki", age: "19"}
]

const userNames = users.map((user)=>{
    return user.firstName
});

console.log(userNames);