"use strict";
window.addEventListener("DOMContentLoaded", getTitle);
let title = document.querySelector(".typewritten").textContent;
let i = 0;

function getTitle() {
  //clear the HTML area
  document.querySelector(".typewritten").textContent = "";
  startTypewriter();
}

function startTypewriter() {
  if (i < title.length) {
    document.querySelector(".typewritten").innerHTML +=
      title.charAt(i) + "<span> </span>";
    i++;
    setTimeout(getTitle, 500);
  }
}
