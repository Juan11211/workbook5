"use strict";

window.onload = function() {
    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.border = "1px solid black"; 
    }

    let image = document.getElementsByTagName("img");

    for(let i = 0; i < image.length; i++){
        image[i].classList.add("roundedImage");
    }

    image[0].src = "https://images.unsplash.com/photo-1598153346810-860daa814c4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8fDA%3D";
    image[0].alt = "Ok";

    image[1].src = "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8fDA%3D";
    image[1].alt = "Image 2 Description";

    image[2].src = "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8fDA%3D";
    image[2].alt = "Image 3 Description";

      
};
