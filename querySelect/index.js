"use strict"

window.onload = function(){

    let imageGroup = document.getElementsByClassName("imageGroup");

    let imageGroupBorder = imageGroup.length; 

    for(let i = 0; i < imageGroupBorder; i++){
        imageGroup[i].style.border = "2px solid red"
    }


    let images = document.querySelectorAll("img:not([alt])");

    for(let i = 0; i < images.length; i++){
        images[i].alt = "grafitti images"
    }

}

