// change text
// textContent and innerText

// textContent is all text contained by an element and 
// all its children that are for formatting purposes only.

// innerText returns all text contained by an element and all its child elements.
// innerHtml returns all text, including html tags, that is contained by an element.
// eg
{/* <div class="headline">
    <h2 id="main-heading">
        Manage your tasks <span style="display: none">Hello</span>
    </h2>
    <button class="btn btn-headline">Learn More</button>
</div> */}

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
// op : - Manage your tasks Hello

// we can view and change the text of any element using textContent property    
// mainHeading.textContent = "This is new heading";
// console.log(mainHeading.textContent);

// textContent will give all the text inside the element even if the styling of that element is display : none means that element is hidden


// there is a property called innerText which just shows the visible content

mainHeading.textContent = "This is new heading";
console.log(mainHeading.innerText);

{/* <p id="myP">    This element has extra spacing    and contains 
        <span>a span element</span>.
    </p> */}
let text = document.getElementById("myP").innerText;

let text1 = document.getElementById("myP").innerHTML;

let text2 = document.getElementById("demo").textContent;

// The innerText property returns:
// This element has extra spacing and contains a span element.

// The innerHTML property returns:
//    This element has extra spacing    and contains <span>a span element</span>.

// The textContent property returns:
//    This element has extra spacing    and contains a span element.