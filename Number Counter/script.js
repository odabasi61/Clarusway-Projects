"use strict";

const container = document.querySelector(".container");
let inp = document.querySelector(".inp");
let counter = 0;

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("increase")) {
    counter++;
  } else if (e.target.classList.contains("decrease")) {
    counter--;
  } else if (e.target.classList.contains("reset")) {
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
