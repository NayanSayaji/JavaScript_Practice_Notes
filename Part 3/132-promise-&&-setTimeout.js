// promise && setTimeout 


// I want to resolve / reject promise after 2 seconds 


function myPromise(){
    return new Promise((resolve, reject)=>{
        // here we created a variable value if it's false then it'll be rejected if true then resolved
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        // and it'll resolve or reject after the delay of 2 seconds 
        },2000)
    })
}

// now we consume promise 


// myPromise()
//     .then(()=>{
//         console.log("resolved")
//     })// when promise will resolved
//     .catch(()=>{
//         console.log("rejected")
//     })// when promise will rejected

// simple way of writting
myPromise()
    .then(()=>{console.log("resolved")})// when promise will resolved
    .catch(()=>{console.log("rejected")})// when promise will rejected