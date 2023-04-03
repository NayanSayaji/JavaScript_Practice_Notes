// change text
// textContent and innerText

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);


// we can view and change the text of any element using textContent property    
// mainHeading.textContent = "This is new heading";
// console.log(mainHeading.textContent);

// textContent will give all the text inside the element even if the styling of that element is display : none means that element is hidden


// there is a property called innerText which just shows the visible content

mainHeading.textContent = "This is new heading";
console.log(mainHeading.innerText);