// promisifying the xhr request

const URL = "https://jsonplaceholder.typicode.com/posts";

// creating a function which will return a promise
// this function will take 2 parameters as a input
// method and url
function sendRequest(method, url) {
    // returning promise
    return new Promise(function(resolve, reject) {
        const xhr  = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            // writing resolve if status code is 200
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{// reject statement
                reject(new Error("Something Went wrong"));
            }
        }
        // error if any network error occured
        xhr.onerror = function() {
            reject(new Error("Something went wrong"));
        }

        xhr.send();
    })
}
// we have produced promise


// now let's consume the above promise
sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data)
        return data;
    }) // this .then function is resolved with data bcoz data is returned by this .then
    .then(data=>{
        const id = data[3].id;
        return id;
    }) // this .then function is resolved with id bcoz id is returned by this .then
    .then(id=>{
        // now we created new URL
        const url = `${URL}/${id}ssss`;
        return sendRequest("GET", url);
    }) // this .then function is resolved with sendRequest function again bcoz sendRequest fucntion is returned by this .then
    .then(newResponse => {
        // newResponse is the sendRequest("GET",url)
        // before console this we need to parse this through JSON.parse()
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })// if any .then function is rejected then this .catch will execute directly
    .catch(error =>{
        console.log(error);
    })