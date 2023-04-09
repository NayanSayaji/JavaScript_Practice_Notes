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
  
  
  ricePromise().then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })