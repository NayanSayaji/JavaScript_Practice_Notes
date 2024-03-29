// function returning promise

// as we have returning callbacks or setTimeouts from a function
// likewise a function returns promise

function ricePromise(){
    const bucket = ['coffee', 'chips','vegetables','salts','rice'];
    // returning a promise 
    return new Promise((resolve,reject)=>{
      if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
          resolve({value:"friedrice"});
      }else{
          reject("could not do it");
      }
    })
  }
  
  // now using a function returning promise 
  // we will call ricePromise() function and .then this will
  // execute when the promise will be resolved 
  // and after that .catch execute when the promise will be rejected 

  // here we don't have promise name so we cant use
  // promiseName.then() but we have a function which returns a promise
  // so let's call that promise and use .then() method on that
  ricePromise().then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })