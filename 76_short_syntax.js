// short syntax for method inside object


// const user1 = {
//     firstName: "nayan",
//     age:20,
//     about: function() {
//         console.log(this.firstName, this.age);
//     }
// }



const user1 = {
    firstName: "nayan",
    age:20,
    // while writing the method we don't need to 
    // write it in key value pair
    // and no need to write the function word as well.
    // just write function_name(){ function body }
    about() {
        console.log(this.firstName, this.age);
    }
}
user1.about();