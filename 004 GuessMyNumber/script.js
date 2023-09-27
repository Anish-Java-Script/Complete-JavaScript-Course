"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector(".message").textContent = message;

}


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
      displayMessage('Please guess something"');
  } else if (guess === secretNumber) {
    displayMessage('Correct answer');
    document.querySelector("body").style.backgroundColor = "#219C90";
    document.querySelector(".number").style.width = "200rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
    } else {
      highscore = highscore;
    }
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber? "too high!!!" : "too low!!!");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".check").ariaDisabled = true;
      document.querySelector(".score").textContent = 0;

      document.querySelector(".message").textContent = "you lost the game!!!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage('Start guessing...');
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
