// some method
// this will return true if single element also satisfy the condition 

const numbers = [3,4,5,6,7,11];

// const ans = numbers.some((number)=> number % 2 === 0 );
// true
// console.log(ans);


const products = [
    {productId: 1, productName: "mobile", price: 10000},
    {productId: 2, productName: "bag", price: 2300},
    {productId: 3, productName: "laptop", price: 25000},
    {productId: 4, productName: "book", price: 5000},
    {productId: 5, productName: "macbook", price: 215000},
]


const ans = products.some((cartItem) => cartItem.price > 10000);
console.log(ans);