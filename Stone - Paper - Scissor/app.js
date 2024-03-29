"use strict";

const yourChoice = document.getElementById("your-choice");
const select = document.querySelector(".select");
const pcChoice = document.getElementById("pc-choice");
let userSelect; // our choice
let pcRandom; // pc choice

// to write the score
const scoreYou = document.getElementById("you");
const scorePc = document.getElementById("pc");
const domTopScore = document.querySelector(".top-score");

// modal selectors:
const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

// final message:
const final = document.getElementById("final");

// we make choice:
select.addEventListener("click", (e) => {
  // console.log(e.target.className);
  // console.log(e.target.getAttribute("alt")); by using target we get it on the console. both these work here.
  if (e.target.getAttribute("alt")) {
    // to avoid to get null
    userSelect = e.target.getAttribute("alt");
    yourChoice.innerHTML = `<img src='./assets/${userSelect}.png'></img>`;
    pc();
  }
});

const pcArr = ["stone", "paper", "scissor"];

// pc is making choice:
function pc() {
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcChoice.innerHTML = `<img src='./assets/${pcRandom}.png'></img>`;
  result();
}

function result() {
  switch (userSelect) {
    case "stone":
      if (pcRandom == "paper") {
        lost();
      } else if (pcRandom == "scissor") {
        win();
      }
      break;

    case "paper":
      if (pcRandom == "scissor") {
        lost();
      } else if (pcRandom == "stone") {
        win();
      }
      break;

    case "scissor":
      if (pcRandom == "stone") {
        lost();
      } else if (pcRandom == "paper") {
        win();
      }
      break;

    default:
      break;
  }

  if (userSelect == pcRandom) {
    resultDiv.classList.add("active");
    resultDiv.innerHTML = "It is a draw";
    containerEl.style.boxShadow = "3px 3px 10px 1px #FFC538";
    resultDiv.style.backgroundColor = "#FFC538";
  }

  if (scoreYou.innerText == "10") {
    final.innerHTML = `💃 You Win🕺`;
    document.querySelector(".modal").style.backgroundColor = "#5AB7AC";
    modalBtn.style.color = "#5AB7AC";
    topScoreCheck();
  }

  if (scorePc.innerText == "10" || scoreYou.innerText == "10") {
    modal();
  }
}

function lost() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Lost";
  containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
  resultDiv.style.backgroundColor = "#fb778b";
  scorePc.innerText++;
}

function win() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You win";
  containerEl.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
  resultDiv.style.backgroundColor = "#5AB7AC";
  scoreYou.innerText++;
}

function modal() {
  modalEl.classList.add("show");
}

modalBtn.addEventListener("click", () => {
  modalEl.style.display = "none";
  window.location.reload();
});

// get highscore from local storage
let storagedScore = localStorage.getItem("highScore");
let topScore; // the value which will be displayed on screen

// if localstorage is empty (0 - 0)
if (storagedScore) {
  topScore = `10 - ${storagedScore}`;
} else {
  topScore = `0 - 0`;
}

domTopScore.innerText = topScore;

function topScoreCheck() {
  storagedScore || localStorage.setItem("highScore", +scorePc.innerText);
  if (storagedScore >= scorePc.innerText) {
    localStorage.setItem("highScore", +scorePc.innerText);
  }
}
