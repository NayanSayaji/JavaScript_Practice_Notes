// do while loop

let i = 0;
while(i<=9){
    console.log(i);
    i++;
} 


// do while loop is same as while loop but here
// the code will execute once always no matter either 
// condition is false
// bcoz the in this do while loop the work is done 
// before checking the condition..
// eg. like given below value of i is 10
// and we'll print value of i on console.
// it'll print value do i++
// that is it'll execute the loop's body first
// then cheking condition at the end..
// in this way the do while loop always executes 
// minimum one time

i = 10;
do {
    console.log(i);
    i++;
} while (i<=9);