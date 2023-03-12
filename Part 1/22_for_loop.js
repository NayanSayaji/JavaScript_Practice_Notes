// intro to for loop 
// print 0 to 9

for (let num = 0; num <=9; num++) {
   // num is declared using let and inside
   //  for loop so it'll be inside the scope
   //  of for loop....... if we try to 
   // print it outside the for loop it'll 
   // throw a error : num is not defined
    console.log(num); 
} 
// num is not defined
console.log(`value of i is ${num}`);

// for tackling this problem 
// if we declare that using the var keyword
// then it'll be accesible in global scope
for (var num1 = 0; num1 <=9; num1++) {
     console.log(num1); 
}
console.log(`value of i is ${num1}`);

// or we can create variable outside the loop

let i = 0 ;
for(;i<10;i++){
    console.log(i);
}