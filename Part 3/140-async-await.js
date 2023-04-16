// async await

// Async/await
// There’s a special syntax to work with promises in a more comfortable fashion, 
// called “async/await”. It’s surprisingly easy to understand and use.

// The word “async” before a function means one simple thing: a function always returns a promise. 
// Other values are wrapped in a resolved promise automatically.

// Await
// The keyword await makes JavaScript wait until that promise settles and returns its result.




// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";


// if I add async before function then this function will always return promise

// we write async so this will execute in backgroud 
// browser will execute this in background
// async function getPosts(){    
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }


const getPosts = async() =>{
    const response = await fetch(URL);
    if(!response.ok){
        // if we don't do this then .catch handler will not be execute
        throw new Error("Something went wrong")
    }
    // json() method returns promise
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })


console.log("script end ");

// script start
// getPosts() will execute
// script end 