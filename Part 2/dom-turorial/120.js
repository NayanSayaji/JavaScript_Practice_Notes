// event loop
console.log("Script Begin >>>>>>");

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let num = 0;
        
        for (let i = 0; i <= 100000000; i++) { 
            num += i; 
        }
        console.log(e.currentTarget.textContent , num);
    })
})

let outerVar = 0 ;
for (let i = 0 ; i <= 100000000; i++) { 
    outerVar += i; 
}
console.log("value of outerVar is :", outerVar);

console.log("Script End >>>>>>");   