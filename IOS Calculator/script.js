"use strict";

// DIGITAL CLOCK

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Add a leading zero to the hours/minutes if they are less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Compose the string for display
  var currentTime = hours + ":" + minutes;

  // Update the time display
  document.getElementById("clock").innerHTML = currentTime;
}

// Call the updateClock function every 1 second
setInterval(updateClock, 1000);

// CALCULATION FUNCTIONS

// const display = document.querySelector(".display");
// const ac = document.querySelector(".ac");
// const nums = document.querySelector(".nums");

// display.textContent = 0;

// ac.addEventListener("click", function () {
//   display.textContent = 0;
// });

// nums.addEventListener("click", function () {
//   display.textContent = Number(result.value);
// });
