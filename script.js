//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const sneaker = document.querySelector(".main-image");
const title = document.querySelector(".title");
const description = document.querySelector(".description");


//Moving Animation Event
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) * 10;
  sneaker.style.transition = "1s cubic-bezier(.03,.98,.52,.99)";
  sneaker.style.transform = `rotateZ(${-xAxis}deg)`;
});

//Animate In
card.addEventListener("mouseenter", (e) => {
  card.style.transition = "0.1s ease";
  title.style.transition = "all 0.5s ease";
  title.style.transform = "translateY(7px)";
  description.style.transition = "all 0.5s ease";
  description.style.transform = "translateY(10px)";

});
//Animate Out
card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";

});

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}





// const domElements = {
//   button: false,
//   icon: false,
// };

// /*
//  * sets up necessary dom selections and eventlisteners
//  */
// function setup() {
//   // selecting the button via data attribute
//   // could be done via selecting an id or a class as well
//   // but a data attribute is more explicit
//   domElements.button = document.querySelector("[data-js-button]");

//   domElements.icon = document.querySelector("[data-js-icon]");

//   // just checking if the button is correctly selected
//   console.log("button: ", domElements.button);

//   // listening to a click event on the button
//   // executing handleClick() function each time the button is clicked
//   domElements.button.addEventListener("click", handleClick);
// }

// function handleClick(event) {
//   console.log("event: ", event);

//   rotate(domElements.icon);
// }

// function rotate(element) {
//   // toggles class to element passed via parameter
//   // class triggers a css animation
//   element.classList.toggle("is-rotating");
// }

// // execute setup function
// setup();
