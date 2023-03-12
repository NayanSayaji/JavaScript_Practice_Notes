// spread operator

const array1 = [1,2,3];
const array2 = [4,5,6];

// const newArray = [...array1,...array2, 98,56];
// const newArray = [..."abcd"];
// const newArray = [...123456789];


// console.log(newArray);

// spread operator in objects
// there can not be 2 keys with same name
// if there is then the latest value will be 
// the value of that key
const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key1 : "new Value Of Key1" // this will be the value of key1
}
// { key1: 'newValKey1', key2: 'value2' }
console.log("obj1",obj1);


const obj2 = {
    key2: "new Value Of Key2",
    key3: "value3",
    key4: "value4"
}
console.log("obj2",obj2);
// obj1 and obj2 both are having key2 in it so 
// which value will be the key "key2" will have 
// ans is .... the one which comes in last means 
// if we write {...obj1,...obj2} then 
// value inside the obj2 will be the value of key2
// i.e.,  {key2 : "new Value Of Key2"}
// else value inside the obj1 
// i.e.,  {key2 : "value2"}

// which object is taken 1st it's values will come first and assign first as well. Here obj1 is 1st so it's key value pairs are coming first....

const newObject1 = {...obj1,...obj2};
console.log("1] {...obj1,...obj2}");
console.log(newObject1);

const newObject2 = {...obj2,...obj1};
console.log("2] {...obj2,...obj1}");
console.log(newObject2);

const newObject3 = {...obj2,...obj1, key12 : "roll no", key45 : "roll no"};
console.log('3] {...obj2,...obj1, key12 : "roll no", key45 : "roll no" ');
console.log(newObject3);

const newObject4 ={..."abcd"};
console.log('4] {..."abcd"}');
console.log(newObject4);

const newObject5 ={...["item1","item2"]};
console.log('5] {...["item1","item2"]}');
console.log(newObject5);

const newObject6 ={..."abcdefghijklmnopqrstuvwxyz"};
console.log('6] {..."abcdefghijklmnopqrstuvwxyz"}');
console.log(newObject6);
