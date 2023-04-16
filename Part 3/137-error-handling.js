// error-handling


const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        // suppose I want object with id = 4
        // so data[3] = id 4 
        const id = data[3].id;
        // creating new xhr request
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`
        console.log(URL2);

        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            // storing response of 2nd request
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }
   else{
       console.log("something went wrong");
   }
}

// if there is any network issue 
// internet disconnected 
// this method will work when any network related error occurs 
xhr.onerror = () => {
    console.log("network error");
}
xhr.send();