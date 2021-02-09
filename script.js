"use strict";
startTypewriter();

let title = document.querySelector("typewriter").textContent;

let index = 0;

function startTypewriter() {
  title.textContent = "";
  if (i < title.length) {
    i++;
    let type = newTxt + title.charAt(i);
    console.log(type);
  }
}
