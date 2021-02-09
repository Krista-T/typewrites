"use strict";
window.addEventListener("DOMContentLoaded", typeWriterText);
const title = document.querySelector(".typewritten").textContent;
let textDisplay = "";

function typeWriterText() {
  for (let i = 0; i < title.length; i++) {
    setTimeout(() => {
      textDisplay += title.charAt(i);
      document.querySelector(".typewritten").innerHTML = textDisplay;
      console.log(textDisplay);
    }, i * 250);
  }
  // startTimer();
}

// let time;
// function startTimer() {
//   time = setInterval(() => {
//     location.reload();
//   }, 14000);
// }
