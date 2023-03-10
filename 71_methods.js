// methods

// function inside object

const person = {
    firstName: "ruchi",
    age: 20,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}
// this is a object which is calling the method method (i.e., we can say that about method)

// here the this object is person which is the object which is calling the about function
person.about();

// we get the value of this when we call that function

// now let's take a example

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
// we created a function
// and we set the value personInfo to about key in following objects
// when we call the about method using the objects then this keyword will extract the values of those keys from that objects 


const person1 = {
    firstName: "ruchi",
    age: 20,
    about: personInfo
}
const person2 = {
    firstName: "nayan",
    age: 20,
    about: personInfo
}
const person3 = {
    firstName: "krishiv",
    age: 2,
    about: personInfo
}


person1.about(); // person1 is the object which is calling the about
person2.about(); // person2 calling the about
person3.about(); // person3 calling the about
