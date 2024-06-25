"use strict";
let chances = 3;

const ds = document.querySelectorAll(".ds"),
  start = document.querySelector(".start"),
  end = document.querySelector(".end"),
  enterBtn = document.querySelector(".enter-btn"),
  restartBtn = document.querySelector(".restart-btn"),
  result = document.querySelector(".result"),
  attempts = document.querySelector(".number-of-attempts"),
  guessNum = document.querySelector(".guess"),
  randomNum = document.querySelector(".random-num"),
  form = document.querySelector("form");

attempts.textContent = chances.toString(); // Changed from chances to chances.toString()

function findTheNum() {
  let random = Math.round(
    Math.random() * (parseFloat(end.value) - parseFloat(start.value)) +
      parseFloat(start.value)
  );
  randomNum.textContent = random;

  if (random === parseFloat(guessNum.value)) {
    result.textContent = "You Won!!!";
  } else {
    result.textContent = "";
    chances--;
    attempts.textContent = chances.toString(); // Changed from chances to chances.toString()

    if (chances === 0) {
      result.textContent = "Game is Over!!!";
      ds.forEach((item) => {
        item.disabled = true;
      });
    }
  }
}

function restartTheGame() {
  ds.forEach((item) => {
    item.disabled = false;
  });
  start.value = "";
  end.value = "";
  guessNum.value = "";
  result.textContent = "";
  randomNum.textContent = "";
  attempts.textContent = "3"; // Changed from 3 to "3"
  chances = 3; // Reset chances to 3
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  findTheNum();
});

restartBtn.addEventListener("click", restartTheGame);
