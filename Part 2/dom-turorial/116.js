// intro to events in JS

// important events are mouseEvents keyboardEvents and inputEvents

// mouse events
// click

// three ways to add events 
// 1..directly in the html using inline js
{/* <button class="btn btn-headline" onclick="console.log('you clicked me')" >Learn More</button> */}

// 2..  we can add a function to the btn.onclick property
const btn = document.querySelector(".btn-headline");
// console.log(btn); //  this will show in html format or the well reprentation of objects passed
// console.dir(btn);// this will print in form of the object form

// btn.onclick =() =>{
//     console.log("You clicked me...")
// }

// 3..
// method ----> addEventListener();
// function clickMe(){
//     console.log("You clicked Me.....")
// }
// btn.addEventListener("click",clickMe);

// addEventListener takes take 2 parameters
// first is event to be done
// and a function

// this is the most used way 
btn.addEventListener("click",()=>{
    console.log("You clicked Me.....")
});