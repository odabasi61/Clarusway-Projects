"use strict";

// pop-up window
const closeModal = document.querySelector(".close-modal");
const got = document.querySelector(".got");
const overlay = document.querySelector(".overlay");
const popUp = document.querySelector(".pop-up");

const closePopup = function () {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModal.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);
got.addEventListener("click", closePopup);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popUp.classList.contains("hidden")) {
    closePopup();
  }
});

// game
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const winner = document.querySelector(".winner");
const congrats = document.querySelector(".congrats");
const anime = document.querySelector(".anime");

let attempt = 5;
let score = 5;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // if there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");
  }
  // if player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    winner.classList.remove("hidden");
    congrats.classList.remove("hidden");
    anime.classList.add("hidden");
  }
  // if player is wrong
  else if (guess !== secretNumber) {
    if (score > 1 && attempt > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      attempt--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".attempt").textContent = attempt;
      // if (attempt > 0 && attempt < 2) {
      //   document.querySelector(".last").classList.remove("hidden");
      // }
    }
  } else if (score === 1 && attempt === 1) {
    displayMessage("💥 You lost the game!");
    document.querySelector(".score").textContent = 0;
    document.querySelector(".attempt").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  attempt = 5;
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".attempt").textContent = attempt;
  document.querySelector(".guess").value = "";
});
