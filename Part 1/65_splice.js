// splice method
// it used when deleting anything from array or inserting anything into array

// start, how many values to  delete, insert value

const myArray = ['item1', 'item2', 'item3', 'item4']

// delete
// myArray.splice(1, 1);
// [ 'item1', 'item3', 'item4' ]

//splice method also returns the deleted item so we can store it into different array
// const deletedItem = myArray.splice(1, 1); //[ 'item2' ]
// console.log(deletedItem);

// insert item
//             start, delete , insert
// myArray.splice(1, 0, 'inserted item');
// console.log(myArray);


// insert and delete at same time

const deletedItem  = myArray.splice(1,2,'inserted item1', 'inserted item2');
// this means start from index 1 and delete 2 items and then insert 'inserted item1', 'inserted item2'

console.log("deleted items",deletedItem);
console.log(myArray);