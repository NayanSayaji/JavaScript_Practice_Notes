// new keyword

// New keyword in JavaScript is used to create an instance of an 
// object that has a constructor function. On calling the 
// constructor function with ‘new’ operator, the following actions are taken:

// new keyword did this 
// 1) creates an empty object and this variable is points to that object 
// this = {} 
// and we  have passed key value pair to that object

// 2) return this { this is a variable which points to that newly created object...}

// 3) The new object’s internal ‘[[Prototype]]’ (__proto__) 
// property is set the same as the prototype of the constructing function.


function createUser(firstName, age){
    // this = {}; // but we don't need to write this manually js automatically assumes this variable here
    this.firstName = firstName;
    this.age = age;
}
// we can call this function as 
// createUser(".nayan", 20);

// creating a method and saving it in prototype of the createUser function

// this is the prototype of the constructing function that is 
// prototype of the createUser Function

// so the about function or method will be added into the 
// prototype of createUser function
createUser.prototype.about = function(){
    console.log(this.firstName," " ,this.age)
}

// printing the prototype of createUser
console.log(createUser.prototype)
//  {about: ƒ, constructor: ƒ}  
//       about: ƒ ()  
//       constructor: ƒ createUser(firstName, age)
//       [[Prototype]]: Object



// using new keyword I'm creating a new instance of object which 
// will create by the constructing function createUser and storing 
// it in user1 variable
  
const user1 = new createUser("nayan", 20);
// now new keyword will automatically make the link of __proto__  
// of user1 object to the methods stored in prototype of createUser function  
// means the manually work done by this line will be automatically done by new keyword
// Object.create(createUser.prototype);

// in simple terms 

console.log(user1);
// createUser {firstName: 'nayan', age: 20}
//    age: 20
//    firstName: "nayan"
//    [[Prototype]]: Object // __proto__ of user1 object  
//       about: ƒ ()  
//       constructor: ƒ createUser(firstName, age)
//       [[Prototype]]: Object

// we can see that the __proto__ of user1 object is same as the 
// prototype property of constructing function of user1 object 
// which is the createUser()... so it's shown the property of new keyword
// that is
// new object’s internal ‘[[Prototype]]’ (__proto__) property is 
// set the same as the prototype of the constructing function.


// so user1 is not having the about method in it but 
//user1's __proto__ is having the createUser's prototype property and about() is there in 
// createUser's prototype property  
// so directly __proto__ is having it's reference so user1 can 
// also access the function written in the prototype of createUser() function
user1.about();// nayan   20