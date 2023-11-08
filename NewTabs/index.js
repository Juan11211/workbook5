"use strict";

window.onload = function() {
  let googleBtn = document.getElementById("googleBtn");
  googleBtn.onclick = googleBtnClicked;

  let w3schools = document.getElementById("w3schools");
  w3schools.onclick = w3schoolsClicked;

  let imagesBtn = document.getElementById("imagesBtn");
  imagesBtn.onclick = imagesBtnClicked;
};

function googleBtnClicked() {
  window.open("https://www.w3schools.com/js/")
}

function w3schoolsClicked(){
    window.open("https://www.w3schools.com/js/");
}

function imagesBtnClicked() {
  window.location.href = "images.html";
}


