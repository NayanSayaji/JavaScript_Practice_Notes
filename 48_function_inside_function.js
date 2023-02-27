// function inside functions

function app(){
    const myFunc = () =>{
        console.log("Hello from myFunc");
    }

    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }
    // arrow function of the multiplication expression
    const mul = (num1, num2) => num1 * num2 ;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(5,9));
}

app();

