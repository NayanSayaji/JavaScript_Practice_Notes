// rest parameters
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
//... is the rest parameter (triple dots)
// function functionname(...parameters) {
//     statement;
// }

function myFunc(a, b, c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFunc(3, 4, 5);

// suppose I passed more arguments then they will not used bcoz that function can hold 3 parameters only.
myFunc(3, 4, 5, 6, 7, 8);


// suppose I want to store the rest parameters into 3rd parameter c as a array then it can be like 
// now here all the rest parameters will assign into c and c will be the array of all rest parameters..

function myFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc(3, 4, 5, 6, 7, 8, 9);
// a is 3        
// b is 4        
// c is 5,6,7,8,9
// now this is printing like c is 5,6,7,8,9
// if we want to print that then we need to change the statement like     
// console.log(`c is `,c);
// by using template string ${ } we are printing just values of that array 
// and using this (`c is `,c) we are directly printing array
function myFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `, c);
}
myFunc(3, 4, 5, 6, 7, 8, 9);
// a is 3
// b is 4
// c is  [ 5, 6, 7, 8, 9 ]


// function to add all numbers
function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}

const ans = addAll(7, 8, 9, 4, 5, 6, 2, 1, 3);
console.log("Addition of all Numbers is :", ans);