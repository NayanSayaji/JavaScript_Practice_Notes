// set and get attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://codprog.com")
console.log(link.getAttribute("href"));

// suppose we want to check the value of type attribute of html element which have form-todo id
const inputElement = document.querySelector(".form-todo");
console.log(inputElement.getAttribute("type"));
// it will print the value of type attribute