// fill method
// value, start, end

// const myArray = new Array(10).fill(0);
// [
//     0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0 
// ]

const myArray = [1,2,3,4,5,6,7,8,9,10];

// fill method changes the current array 

//       value, start, end
myArray.fill(0,2,5);
console.log(myArray);
[
    1, 2, 0, 0,  0,
    6, 7, 8, 9, 10 
  ]