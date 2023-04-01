// Event Bubbling 
// event capturing 

const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", ()=>{
    console.log("you clicked on child");
});
parent.addEventListener("click", ()=>{
    console.log("you clicked on parent");
});
grandParent.addEventListener("click", ()=>{
    console.log("you clicked on grandParent");
});
document.body.addEventListener("click", ()=>{
    console.log("you clicked on document.body");
});
// here if we click on child then it will invoked for it's parent as well bcoz the outer layer which haves the same events 
// this is event bubbliing 
// if we call a event on child if the event is present for the parent as well then it'll get called for that parent as well and if the grandparent will also have the same event then it'll be called for that as well 

// the above events are normal events 

// there is a type of events which is capturing events

// For event capturing, we set the handler capture option to true: elem.addEventListener(event, handler, true). By default, it is set to bubbling: false.

// For event capturing, we set the handler capture option to true: elem.addEventListener(event, handler, true). By default, it is set to bubbling: false.