'use strict';
// selectiing elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


// variabbles
let currentScore = 0;



// rolling dice functionalities
btnRoll.addEventListener('click', function () {
  // 1. generate randome dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for rolled. 
  if(dice !== 1){
    // if dice is not 1  then, increase the current score
    currentScore = currentScore + dice;
    current0El.textContent = currentScore;  //change latter 

  }else{
    // if dice is 1, switch the player

  }
});
