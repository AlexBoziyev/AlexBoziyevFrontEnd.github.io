"use strict";
document.querySelector(".message").textContent = "Guess my number 😀 ";
let score = 50;
let highscore = 0;
let number = Math.trunc(Math.random() * 100) + 1;
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number ☹️";
  } else if (guess === number) {
    document.querySelector(".message").textContent =
      "You answeres right, yuhuuu 😀😊😁";
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").style.color = "#000000";
    document.querySelector("body").style.backgroundColor = "#00FF00";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > number) {
    document.querySelector(".message").textContent = "Too high ☹️ ";
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost ☹️ ";
      document.querySelector(".number").textContent = number;
      document.querySelector(".message").style.color = "#000000";
      document.querySelector("body").style.backgroundColor = "#FF0000";
      document.querySelector(".number").style.width = "30rem";
    }
  } else if (guess < number) {
    document.querySelector(".message").textContent = "Too low ☹️ ";
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost ☹️ ";
      document.querySelector(".number").textContent = number;
      document.querySelector(".message").style.color = "#000000";
      document.querySelector("body").style.backgroundColor = "#FF0000";
      document.querySelector(".number").style.width = "30rem";
    }
    document.querySelector(".score").textContent = score;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Guess my number 😀 ";
  document.querySelector(".score").textContent = 50;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").style.color = "#FFFFFF";
});
btnGems.addEvenListener("click", function () {});
