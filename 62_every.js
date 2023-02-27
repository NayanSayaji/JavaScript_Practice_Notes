// every method 

const numbers = [2,4,6,8,10];

// callback function in every method returns the boolean true or false 
// and every method also returns true or false based on the callback function

//              if number is % 2 ===0 so it's even else odd
const ans = numbers.every((number)=>number % 2 === 0);

// callback function ====> true / false (boolean)

// every method ====> true / false (boolean)
// every method will return true only when condition is satisfy for every element 


console.log(ans);



const userCart = [
    {productId: 1, productName: "mobile", price: 10000},
    {productId: 2, productName: "bag", price: 2300},
    {productId: 3, productName: "laptop", price: 25000},
    {productId: 4, productName: "book", price: 5000},
    {productId: 5, productName: "notebook", price: 2000},
]

// cartItem is a parameter we can say that it helps us to traverse through this userCart array
const isTrue = userCart.every((cartItem)=> cartItem.price < 30000);
console.log("isTrue :",isTrue);