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

window.onload = () => {
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active')
  }, 500)
}

// Slider

let slider = document.getElementById("rangeSlider");
let output = document.getElementById("confirmation");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

// Transition
function zoom() {
  button.style.transition = '0.5s ease';
  button.style.transform = 'scale(30)';
  window.location = './ordered.html'
  setTimeout(() => {
    button.style.opacity = 0;
  }, 500)
  // setTimeout(() => {
  //   window.location = './ordered.html'
  // }, 600)
  // window.location = './ordered.html'
}


// const state = {
//   animations: ['zoom'],
//   view: 'slide'
// }

// const fade = Vue.component('zoom', {
//   template: '#page',
//   methods: {
//     enter(el, done) {
//       TweenMax.fromTo(el, 1, {
//         autoAlpha: 0,
//         scale: 1.5,
//       }, {
//         autoAlpha: 1,
//         scale: 1,
//         transformOrigin: '50% 50%',
//         ease: Power4.easeOut,
//         onComplete: done
//       });
//     },
//     leave(el, done) {
//       TweenMax.fromTo(el, 1, {
//         autoAlpha: 1,
//         scale: 1,
//       }, {
//         autoAlpha: 0,
//         scale: 0.8,
//         ease: Power4.easeOut,
//         onComplete: done
//       });
//     }
//   }
// })





