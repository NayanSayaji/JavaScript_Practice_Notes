// Sets ( it is iterable)
// store data
// sets also have its own methods
// No index-based access
// order is not gauranteed
// unique items only ( no duplications allowed )

// const numbers = new Set();
// console.log(numbers);//Set(3) { 1, 2, 3 }

// we can add values like this
// numbers.add(4);
// Set can store element with different values
// numbers.add(['item1','item2']);
// numbers.add(['item1','item2']);
// this will store both arrays differently bcoz in js this is stored at different locations

// if we create a array and then we make changes in it and we'll try to store it again then it'll not saved

// const items = ['item1', 'item2'];
// numbers.add(items);
// numbers.add(items);

// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }


const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);

console.log(uniqueElements);// Set(5) {1, 2, 4, 5, 6}

// we can't use length property in set instead we can use for of property
let length = 0;
for (const it of uniqueElements) {
    length++;
}
console.log(length); //5



