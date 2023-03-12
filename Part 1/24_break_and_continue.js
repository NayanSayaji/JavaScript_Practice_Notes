// break keyword

// continue keyword

for (let i = 0; i <= 10 ; i++) {
    if(i===4){
        // when value of i will become 4 
        // the execution of for loop will break 
        // due to this break statement with 
        // this if(i===4) condition 
        break;
    }
    console.log(i);
}


for(let i = 1; i <= 10; i++){
    if(i===4){
        // The continue keyword is used to end the 
        // current iteration in a for loop 
        // (or a while loop), and continues to the 
        // next iteration.
        continue;
    }
    // so the value of i become 4 the code written 
    // after the continue statement will be skipped 
    // and it'll directly move towards the next 
    // iteration of loop..

    console.log(i);
}
console.log("hello there");