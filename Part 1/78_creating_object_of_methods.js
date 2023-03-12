

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
},
user.is18 = function() {
    return this.age >= 18;
}
    return user;
}

const User1 = createUser('nayan','sayaji','nayansayaji@gmail.com', 20,'tamaswadi');
const User2 = createUser('ruchi','dhamecha','ruchins@gmail.com', 20,'tamaswadi');
// so here we need to create n no.of objects like this so while 
// creating this n no.of objects 
// all objects are having these 2 methods 
user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
},
user.is18 = function() {
    return this.age >= 18;
}
// it's so much space consuming thing bcoz this methods are same 
// in all objects and are crearing multiple times 
// so we can create a special object which will store these methods 
// so now we stored these methods into a separate variable a 
// separate block of memory......
// now we just need to mention the reference of those methods 
// inside that createUser function


const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // storing the reference to that methods in this object
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    // now methods will not be created every time instead because 
    // of this the methods will just called every time object created
    return user;
}

const user1 = createUser('nayan','sayaji','nayansayaji@gmail.com', 20,'tamaswadi');
const user2 = createUser('ruchi','dhamecha','ruchins@gmail.com', 20,'tamaswadi');
console.log(user1.about());
console.log(user2.about());