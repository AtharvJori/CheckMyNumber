"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' ð Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

// when there is no input
// if (!guess) {
//   //document.querySelector(".message").textContent = " â No number! ";
//   displayMessage("â No number!");
// }
// when player wins
// else if (guess === secretNumber) {
//   displayMessage("ð Correct Number");
//   document.querySelector(".number").textContent = secretNumber;
//   document.querySelector("body").style.backgroundColor = "orange";

//   document.querySelector(".number").style.width = "30rem";

//   if (score > highscore) {
//     highscore = score;
//     document.querySelector(".highscore").textContent = highscore;
//   }
// }
//   // when guess is wrong
//   else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? "ð Too high" : "ð Too low");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       displayMessage("ð¥You lost the game");
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector(".message").textContent = "Start guessing...";
//   displayMessage("Start guessing...");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";

//   document.querySelector(".guess").value = "";

//   document.querySelector("body").style.backgroundColor = "#222";

//   document.querySelector(".number").style.width = "15rem";
// });

let secretNumber = Math.floor(Math.random() * 20);
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "â No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Numberð";
    document.querySelector("body").style.backgroundColor = "orange";

    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "ð Too high" : "ð Too low";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "ð¥You lost the game";
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".highscore").textContent = "0";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
