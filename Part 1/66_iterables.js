// iterables
// on which we can apply for of loop
// string array are iterables

// string
// const firstName = "nayan";
// for (const char of firstName){ 
// }
// console.log(char);

// array
// const items = ['item1', 'item2', 'item3'];
// for (const item of items) {
//     console.log(item);
// }

// objects
// const users = {key1:'value1', key2: 'value2'}
// for (const item of users) {
//     console.log(item);
// }
// this will give a reference and or TypeError: users is not iterable
// because objects are not iterable
// but we can apply for in loop on object

// array like object
// array like object's are those which has a length property and which is accessible 
// it's index 
// example., string, array

const firstName= "Nayan";
console.log(firstName.length);
console.log(firstName[2]);