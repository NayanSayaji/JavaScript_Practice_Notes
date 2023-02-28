// OOP starting
// proto, prototype, class
 
const user = {
    firstName: "nayan",
    lastName: "sayaji",
    email: "nayansayaji@gmail.com",
    age: 21,
    address: "House Number, Colony, pincode, state",
    about: function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function () {
        return this.age >= 18;
    }
}

// const aboutUser = user.about();

// suppose we want to create multiple millions objcets like this this so if we type it manually then it become so tidious task to do

// so we'll create a function which will take input firstName, lastName , email, age, address 
// and that 
// 1 ) function will create a object 
// 2 ) and then insert key : value pairs into it 
// 3 ) and then return object

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

const user1 = createUser('nayan','sayaji','nayansayaji@gmail.com', 20,'tamaswadi');
console.log(user1); // user1 object
console.log(user1.about()); // calling about method for user1 object
console.log(user1.is18());  //  calling about method for user1 object

// we store this functions into one variable as well
const about = user1.about();
console.log(about);
const is18 = user1.is18();
console.log(is18);










