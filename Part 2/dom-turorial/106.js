// innerHTML

const headline = document.querySelector(".headline");

console.log(headline.innerHTML);

// change innerHTML of element
headline.innerHTML = "<h1> Inner HTML changed. </h1>";

// if you want to add something more with the remaining content in innerHTML then we need to use +=

// in html we dont use double qoutes we use \" else it gives error
headline.innerHTML += "<button class = \"btn\"> Learn More.</h1>";
