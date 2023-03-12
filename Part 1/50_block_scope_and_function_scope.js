// block scope vs function scope 

// let and const are block scope 
// var is function scope 

// if any block is having variables created with let and const then we can access it in that block only..

// block is made up of curly braces { }

// block 
{
    let firstName = "Nayan";
    console.log(firstName);
}

{
    let firstName = "Sonu";
    console.log(firstName);
}


// this is global block or global scope
const firstName = "Ruchi";
console.log(firstName);

// but in case of js var variables can be accessible from anywhere in the file
// in js the whole file is treated as the main function not really but we can say this..

// we don't write blocks like we have written above 
// we write like
// if(true){
//     let firstName = "nayan";
//     console.log(firstName);
// }

// console.log(firstName);
// this will throw error bcoz this is created using let.. 
// if we do this using var then it'll be valid
// if(true){
//     var firstname = "nayan";
//     console.log(firstname);
// }

// console.log(firstname);

function myApp(){
    if (true) {
        var firstName = "Nayan";
        console.log(firstName);
    }

    if (true) {
        console.log(firstName);
    }
    console.log(firstName);
}