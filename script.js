// index.html
const card = document.querySelector(".card");
const donut = document.querySelector(".main-image");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const button = document.getElementById('btn-main');


//Donut dreht sich nach links o. rechts
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  donut.style.transition = "1s cubic-bezier(.03,.98,.52,.99)";
  donut.style.transform = `rotateZ(${-xAxis}deg)`;
});

//Animate In
card.addEventListener("mouseenter", (e) => {
  title.style.transition = "all 0.5s ease";
  title.style.transform = "translateY(7px)";
  description.style.transition = "all 0.5s ease";
  description.style.transform = "translateY(10px)";
});

//Animate Out 
card.addEventListener("mouseleave", (e) => {
  donut.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";

});

// Slider

let slider = document.getElementById("rangeSlider");
let output = document.getElementById("confirmation");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

// button
function zoom() {
  window.location = './ordered.html'

  // intial idea had an animation but it didn't work as I wanted:

  // button.style.transition = '0.5s ease';
  // button.style.transform = 'scale(30)';
  // window.location = './ordered.html'
  // setTimeout(() => {
  //   button.style.opacity = 0;
  // }, 500)

}






