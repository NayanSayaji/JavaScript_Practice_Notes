// reduce method

const numbers =[1,2,3,4,5,15];

// suppose we need to sum the above array

// first parameter will have the first value of array by default and currentValue 2nd parameter will have the first+1 indexed value..
// and this will keep increasing by 1 index
// for next function call;

// and the value returned by this is stored into the accumulator or the first parameter

// const sum = reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// });

// for understanding the operation behind reduce method we need to trace it's working

// accumulator          currentValue        return
//      1                    2                  3
//      3                    3                  6
//      6                    4                  10
//      10                   5                  15
//      15                   15                 30

// console.log(sum);
// 15

// suppose we want to sum all the numbers but I want to start adding this all with a initial value then we can add initial value as well
const sum = reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
// console.log(sum);

// real world example
const userCart = [
    {productId: 1, productName: "mobile", price: 10000},
    {productId: 2, productName: "bag", price: 2300},
    {productId: 3, productName: "laptop", price: 25000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return currentProduct.price + totalPrice;
});

// at beginning current value is having the complete object which is present at 0th index of array and then we selected the currentProduct.price that we just need the price from that object

//   totalPrice        currentValue        return
//      0                  { }              12000
//      12000             2300              14300
//      14300             25000             39300
//      39300  