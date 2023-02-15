// computed properties

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// we want to do like this 
// want to create the object with key values pairs 
// of few variables
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }


// const obj = {
//     key1 : value1,
//     key2 : value2
// };
// but in this above case key1 and key2 will become the key itself instead of objkey1 and objkey2
// so we kept them key inside brackets
// const obj = {
//     [key1] : value1,
//     [key2] : value2
// };


// create and empty object and then add key and value pairs into it 
const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);