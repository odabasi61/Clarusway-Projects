"use strict";

const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
let inp = document.querySelector(".inp");
let counter = 0;

// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("increase")) {
//     counter++;
//   } else if (e.target.classList.contains("decrease")) {
//     counter--;
//   } else if (e.target.classList.contains("reset")) {
//     counter = 0;
//   }
//   if (counter > 0) {
//     inp.style.color = "yellow";
//   }
//   if (counter < 0) {
//     inp.style.color = "red";
//   }
//   if (counter === 0) {
//     inp.style.color = "white";
//   }
//   inp.value = counter;
// });

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      counter++;
    } else if (styles.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      inp.style.color = "yellow";
    }
    if (counter < 0) {
      inp.style.color = "red";
    }
    if (counter === 0) {
      inp.style.color = "white";
    }
    inp.value = counter;
  });
});
