

// suppose we want to add a new method named as sing so we need to add it inside the userMethods and as well as inside the function where we are creating objects 
const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    },
    // new method added
    sing: function () {
        return 'love me like u do....'
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing; // added here as well 
    return user;
}

const user1 = createUser('nayan','sayaji','nayansayaji@gmail.com', 20,'tamaswadi');
const user2 = createUser('ruchi','dhamecha','ruchins@gmail.com', 20,'tamaswadi');
console.log(user1.about());
console.log(user2.about());