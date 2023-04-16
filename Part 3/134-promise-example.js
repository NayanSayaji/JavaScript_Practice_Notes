const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
// const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }



// changeText(heading1, "one", "red", 1000)
//   .then(()=>{
//       return changeText(heading2, "two", "purple", 1000)
//     })
//   .then(()=>{
//       return changeText(heading3, "three", "green", 1000)
//     })

// but in arrow function we are just returning something then we don't need to 
// write curly braces and return keyword we can simply do this 
//                ()=>changeText(heading2, "two", "purple", 1000)
// instead of
// ()=>{
//       return changeText(heading3, "three", "green", 1000)
//     }

// before we have done this 
changeText(heading1, "one", "red", 1000)
  .then(()=>changeText(heading2, "two", "purple", 1000)) 
  .then(()=>changeText(heading3, "three", "green", 1000))
  .then(()=>changeText(heading4, "four", "orange", 1000))
  .then(()=>changeText(heading5, "four", "orange", 1000))
  .then(()=>changeText(heading6, "four", "orange", 1000))
  .then(()=>changeText(heading7, "four", "orange", 1000))
  .then(()=>changeText(heading8, "four", "orange", 1000))
  .then(()=>changeText(heading9, "four", "orange", 1000))
  .then(()=>changeText(heading10, "four", "orange", 1000))
  .catch((error)=>{ // this will execute if any promise in promise chain rejects
      alert(error); // there is no heading2 now bcoz we have created a error
      // so after executing the first promise window will alert error msg
      // which is returned by reject method directly
  })




  