// arrow functions 
// arrow functions don't have their own this keyword or this value..
// arrow function takes this from surrounding
// means they have the "this" outside their lexical scope or can say as the 1 level up of the lexical scope


const user1 = {
    firstName: "nayan",
    age:20,
    about: () => {
        console.log(this.firstName, this.age);
    }
}

user1.about(user1);//undefined undefined
// now this about function is inside the user1 object and its a arrow function.... 
//so the value of "this" is the window object but there is no firstName and age property inside the window object so it's returning undefined undefined 

