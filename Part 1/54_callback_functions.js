// callback functions

function myFunc(a){
    console.log(a);
    console.log('Hello world.');
}
myFunc([1,2,3]);// now value of the argument is array


function myFunc2(){
    console.log("inside myFunc2");
}

// now can we pass a function as input in any function and accept it as a parameter.
// this is known as callback function
myFunc(myFunc2);
// we haven't written paranthesis we just passed name


function func2 (name){
    console.log("inside func2");
    console.log(`your name is ${name}`);
}

// there is a convention when we use callback then we name our parameter as callback

function func1(callback){
    console.log("hello there I am a func1..")
    callback("nayan");
//          this name is the value of the parameter of the function which is going to called;
}

// here func2 is a callback parameter which is going to be called
func1(func2);
// hello there I am a func1..
// inside func2
// your name is nayan