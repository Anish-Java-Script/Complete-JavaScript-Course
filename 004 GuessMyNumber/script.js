"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Please guess something";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct answer";
    document.querySelector("body").style.backgroundColor = "#219C90";
    document.querySelector(".number").style.width = "200rem";
    document.querySelector(".number").textContent = secretNumber;
    if(score > highscore){

      highscore = score;
    }else{
      highscore = highscore;
    }
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high!!!";

      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".check").ariaDisabled = true;
      document.querySelector(".score").textContent = 0;

      document.querySelector(".message").textContent = "you lost the game!!!";
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low !!!";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").ariaDisabled = true;
      document.querySelector(".message").textContent = "you lost the game!!!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value  = '';


});
