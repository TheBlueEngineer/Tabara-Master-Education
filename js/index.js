//*************************************************************************************************
//VARIABLES AND DECLARATIONS                                                                      *
//*************************************************************************************************
var second_description_image = document.getElementById("second-description-image");
var second_description_container = document.getElementById("second-description-container");
var second_description_text = document.getElementById("second-description");
var slideIndex = 1;
var OKtext = 1;

document.addEventListener('DOMContentLoaded', function() {
    var elems_parallax = document.querySelectorAll('.parallax');
    var elems_carousel = document.querySelectorAll('.carousel');
    var elems_box = document.querySelectorAll('.materialboxed');
    var instances_parallax = M.Parallax.init(elems_parallax);
    var instances_carousel = M.Carousel.init(elems_carousel);
    var instances_box = M.Materialbox.init(elems_box);
  });
//----------------------------------------------------------------------------------------------END

//*************************************************************************************************
//SLIDESHOW/CAROUSEL                                                                              *
//*************************************************************************************************
function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("slides");
    
    if(n > slides.length){
        slideIndex = 1;
    }
    
    if(n < 1){
        slideIndex = slides.length;
    }
    
    for(i = 0; i < slides.length; i++){
        slides[i].className = slides[i].className.replace(" active", " inactive");
    }
    
    slides[slideIndex-1].className = slides[slideIndex-1].className.replace(" inactive", " active");
    slides[slideIndex-1].style.opacity = "0.99";
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
//----------------------------------------------------------------------------------------------END

//*************************************************************************************************
//SECOND DESCRIPTION FADE IN AND FADE OUT MOUSE OVER EFFECT                                       *
//*************************************************************************************************
second_description_text.onclick = function(){
    if(OKtext){
        second_description_text.style.opacity ="0.05";
        OKtext = 0;
    }
    else{
        second_description_text.style.opacity ="0.6";
        OKtext = 1;
    }
}
//----------------------------------------------------------------------------------------------END