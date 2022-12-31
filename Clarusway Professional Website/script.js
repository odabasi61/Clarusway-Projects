"use strict";

const assist = document.querySelector(".assistant");
const pop = document.querySelector(".popup");

assist.addEventListener("click", function () {
  pop.classList.toggle("hidden");
});
