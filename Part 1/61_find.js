// find method

const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// passing a callback function and then array is passed through that callback function
// const ans = myArray.find(isLength3);
// const myArray = ["Hello", "cat", "dog", "lion"];
// this will return cat
// first occurence 


// find method returns the first occurence which satisfy the condition of callback function from that array...
// if not found then returns undefined 

// we can define that callback function as a arrow function as well

const ans = myArray.find((string)=>{string.length === 3});
// cat
console.log(ans);



// realastic example

const users = [
    {userId: 1, userName:"nayan"},
    {userId: 2, userName:"ruchi"},
    {userId: 3, userName:"rohit"},
    {userId: 4, userName:"saurabh"},
    {userId: 5, userName:"dipashri"},
    {userId: 6, userName:"om"},
]

const myUser = users.find((user)=> user.userId === 3);
console.log(myUser);