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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const winner = document.querySelector(".winner");
const congrats = document.querySelector(".congrats");
const anime = document.querySelector(".anime");
const last = document.querySelector(".last");
console.log(secretNumber);

let attempt = 0;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // if there is no input
  if (guess < 1 || guess > 20) {
    alert("Number must be between 1 and 20!");
  } else if (!guess) {
    displayMessage("⛔️ No number!");
  }
  // if player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    winner.classList.remove("hidden");
    congrats.classList.remove("hidden");
    anime.classList.add("hidden");
    document.querySelector(".check").disabled = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // if player is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      attempt++;
      document.querySelector(".score").textContent = score;
      document.querySelector(".attempt").textContent = attempt;
      if (attempt === 4) {
        document.querySelector(".last").classList.remove("hidden");
      }
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".attempt").textContent = "sorry!";
      document.querySelector(".last").classList.add("hidden");
      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  attempt = 0;
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".attempt").textContent = attempt;
  document.querySelector(".guess").value = "";

  if (!congrats.classList.contains("hidden")) {
    congrats.classList.add("hidden");
  }
  if (!winner.classList.contains("hidden")) {
    winner.classList.add("hidden");
  }
  if (anime.classList.contains("hidden")) {
    anime.classList.remove("hidden");
  }
  if (!last.classList.contains("hidden")) {
    last.classList.add("hidden");
  }
});
