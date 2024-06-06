"use strict";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const activeplayer0 = document.getElementById("score--0");
const activeplayer1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
let currentScore, activePL, scores, playing;
const init = function () {
  currentScore = 0;
  activePL = 0;
  scores = [0, 0];
  playing = true;

  diceEl.classList.add("hidden");
  activeplayer0.textContent = 0;
  activeplayer1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
init();
let switchplayer = function () {
  document.getElementById(`current--${activePL}`).textContent = 0;
  activePL = activePL === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
activeplayer0.textContent = 0;
activeplayer1.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dicee = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dicee}.png`;

    if (dicee !== 1) {
      currentScore += dicee;
      document.getElementById(`current--${activePL}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePL] += currentScore;
    document.getElementById(`score--${activePL}`).textContent =
      scores[activePL];
    if (scores[activePL] >= 50) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePL}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePL}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchplayer();
    }
  }
});
btnNew.addEventListener("click", init);
