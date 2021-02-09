"use strict";
window.addEventListener("DOMContentLoaded", typeWriterText);
const title = document.querySelector(".typewritten").textContent;
let textDisplay = "";
document.querySelector("#type2").classList.add("hide");

function typeWriterText() {
  for (let i = 0; i < title.length; i++) {
    setTimeout(() => {
      textDisplay += title.charAt(i);
      document.querySelector(".typewritten").innerHTML = textDisplay;
      // console.log(textDisplay);
    }, i * 250);
  }
}

setTimeout(() => {
  document.querySelector("#type2").classList.remove("hide");
  const title2 = document.querySelector("#type2").textContent;
  let textDisplay2 = "";
  for (let i = 0; i < title2.length; i++) {
    setTimeout(() => {
      textDisplay2 += title2.charAt(i);
      document.querySelector("h2").innerHTML = textDisplay2;
      // console.log(textDisplay2);
    }, i * 250);
  }
}, 14000);
