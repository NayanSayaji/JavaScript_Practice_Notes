

// https://www.freecodecamp.org/news/ajax-tutorial/


// How AJAX works
// AJAX makes use of a browser built-in XMLHttpRequest object to request data from a Web Server and HTML DOM to display or use the data.

// XMLHttpRequest Object : It is an API in the form an object whose methods help in transfer of data between a web browser and a web server.

// HTML DOM : When a web page is loaded, the browser creates a Document Object Model of the page.

// Create a XMLHttpRequest Object :
// const xhttp = new XMLHttpRequest();


// Properties of XMLHttpRequest object :

// readystate is a property of the XMLHttpRequest Object which holds the status of the XMLHttpRequest.

// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// The XMLHttpRequest.readyState property returns the state an 
// XMLHttpRequest client is in. An XHR client exists in one of the following states:

// Value	State	            Description
// 0	    UNSENT	            Client has been created. open() not called yet.
// 1	    OPENED	            open() has been called.
// 2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	    LOADING	            Downloading; responseText holds partial data.
// 4	    DONE	            The operation is complete.


// UNSENT
// The XMLHttpRequest client has been created, but the open() method hasn't been called yet.

// OPENED
// open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.

// HEADERS_RECEIVED
// send() has been called and the response headers have been received.

// LOADING
// Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.

// DONE
// The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.


// ```onreadystatechange``` is a property of the XMLHttpRequest Object which defines a function to be called when the readyState property changes.
// ```status``` is a property of the XMLHttpRequest Object which returns the status-number of a request

// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"



// XMLHttpRequest Object Methods : To send a request to a Web Server, we use the open() and send() methods of the XMLHttpRequest object.

// xhttp.open("GET", "content.txt", true);
// xhttp.send();





const URL = "https://jsonplaceholder.typicode.com/posts"; 
// URL where I want to send my HTTP request
// type of requests
// GET, POST, PUT, PATCH, DELETE

const xhr = new XMLHttpRequest();
// console.log(xhr);

// step1
// console.log(xhr.readyState);

// open method will take two things 
// 1st which request u want to do and 2nd on which url you want to send request

// and this will happen asynchronously means browser will do this in background
xhr.open("GET",URL);// 
// console.log(xhr.readyState);

// browser will call this function when the ready state will be changed 
// xhr.onreadystatechange = function(){
//      //this will print the readyState of XMLHTTPRequest
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//      // console.log(xhr.response)
//      // console.log(typeof xhr.response) // typeof this is string
//      // we want this should be in JSON
//         const response = xhr.response;
//      // response got by get request is stored in response variable now
//      // response is a JSON file
//      // there is a library JSON with the help of that we can parse this response and convert it into JSON file
//      // need to use JSON.parse method here for parsing response to JSON 
//         const data = JSON.parse(response);
//      // saved that JSON response into data variable
//         console.log(typeof data); // object
//     }
// }

// instead of  doing this all stuff we can use onload method directly



// this onload function will be execute only when readyState will be 4
xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();