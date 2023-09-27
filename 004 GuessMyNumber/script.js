"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Please guess something";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct answer";
    document.querySelector('body').style.backgroundColor = '#219C90'
    document.querySelector('.number').style.width = '200rem';

    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
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

