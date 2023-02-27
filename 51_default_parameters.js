// default parameters

// before es6 we used to do like this for setting up the default parameters
// function addTwo(a,b){
//     // we used to check that whether the parameter given is null means undefined
//     // if it is then we set the any default value to it
//     // like b = 0 ;
//     if(typeofb === "undefined"){
//         b = 0;
//     }
//     return a+b;
// }

// in es6 and higher versions we mention like this parameter and its default value
// ( a, b = 0)
function addTwo(a,b=0){
    return a+b;
}

// if we pass the argument for that default parameter then that default value will be overwrite by that value..
// here a = 4 & b = 8 bcoz we passed the value of b 
// 8 + 4 = 12
var ans = addTwo(4,8);
console.log(ans);

// here the value of a = 8 & value of b = 0 bcoz we haven't passed it's value this time so it'll be default 0
// 8 + 0 = 8
var ans = addTwo(8);
console.log(ans);