// clone using Object.assign

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = obj;
// obj2 is having the memory address on obj
// if we change obj then obbj2 will change automatically and vise versa

// because of this issue we use cloning
// using spread operator
// const obj2 = {...obj};

// using Object.assign
const obj2 = Object.assign({}, obj);
obj.key3 = "value3"; // this will be added in obj only 
console.log(obj);
// { key1: 'value1', key2: 'value2', key3: 'value3' }
console.log(obj2);
// { key1: 'value1', key2: 'value2' }
