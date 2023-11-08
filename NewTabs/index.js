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
    const newWindow = window.open('images.html', '_self'); // '_self' targets the current window/tab.
    if (newWindow) {
      // Close the current window if the new window opened successfully.
      window.close();
    }
}

function w3schoolsClicked(){
    window.open("https://www.w3schools.com/js/");
}

function imagesBtnClicked(){
    window.open("images.html");
}