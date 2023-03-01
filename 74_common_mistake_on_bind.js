

const user1 = {
    firstName: "nayan",
    age:20,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake

// user1.about();

// we store this about method inside a variable
const myFunc = user1.about; // we haven't called this method we just stored the reference of user1.about inside the myFunc

myFunc(); // undefined undefined
// this is happening bcoz the this keyword which we have mentioned in about method is having the value of window object... 
// this --> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// bcoz when we call the function that time we know the value of this keyword........ means which is objeect is the value of this keyword.

// but here we are just storing the reference inside myFunc that's why it's giving undefined undefined

// we can understand this as follows
// const myFunc = function() {
//         console.log(this.firstName, this.age);
//     };
// we have just assign this function to myFunc variable and it's same as we declare the function expression

// so if we call this myFunc(); then of course this keyword will have the value window object
// because we know this keyword have the value of object inside it's written ...
// so myFunc is now declared in the global scope and every function in global scope is comes inside the window object



// so myFunc is not binded with user1 object 
// for doing that also we need to use bind method

const myFun = user1.about.bind(user1);
// now user1 is the value of this keyword
myFun();