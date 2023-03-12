// nested if else

// winning number 19

// 19 your guess is right
// 17 too low 
// 20 too high 


let winningNumber = 19;
let userGuess = +prompt("Guess a number");
// prompt function takes the input from user
// but it takes the input as string...
// that's why we have used + before that prompt

if (userGuess === winningNumber) {
    console.log("Your guess is right !!");
} else {
    // nested if else
    if(userGuess < winningNumber){
        console.log("too low !!")
    }else{
    console.log("too high !!");
    }
}