// setInterval
// console.log("script start");
// // setInterval(() => {
// //   console.log(total);
// //   console.log(Math.random());
// // }, 500);
// console.log("script end");


const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green}, ${blue})`;
  body.style.background = rgb;
}, 1000);

// for stoping the color changing effect after clicking on the button
button.addEventListener("click", () => {
  clearInterval(intervalId);// this will stop the interval after the click event called
  button.textContent = body.style.background;
});

console.log(intervalId);