// fetch 

const URL = "https://jsonplaceholder.typicode.com/postssss";


// fetch method does the GET reqeust by default we can change it and fetch returns a promise

// by default fetch will be reject if there is any network related error only this case fetch will be rejected

// if we want to add any reject then we should add this inside of any of .then

// fetch(URL)
//     .then(response =>{
//         if(response.ok){
//             return response.json()
//         }else{// if we dont't mention this throw new error here 
//              // then it'll return undefined if anything goes wrong
//              // like url doesn't correct
//             throw new Error("Something went wrong!!!")
//         }
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error =>{
//         console.log("inside catch");
//         console.log(error);
//     })




// now inside URL we can add one more input object where we can mention 
// which method we want do get or post and few more info

// and one more input parameter headers
// Represents response/request headers, allowing you to query them 
// and take different actions depending on the results.
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })


