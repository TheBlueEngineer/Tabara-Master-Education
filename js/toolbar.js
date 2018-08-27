//*************************************************************************************************
//VARIABLES AND DECLARATIONS                                                                      *
//*************************************************************************************************
var dropdown_button = document.getElementById("dropdown-button");
var dropdown_content = document.getElementById("dropdown-content");
var parallax1text = document.getElementById("parallax1-text");
var parallax1subtext = document.getElementById("parallax1-subtext");
var parallax1background = document.getElementById("parallax1-image");
var ok = 0;
//----------------------------------------------------------------------------------------------END

//*************************************************************************************************
//THE DROPDOWN MENU THAT APPEARS ON SMALL DEVICES.                                                *
//*************************************************************************************************
function checkSize(){
    if(window.innerWidth >= 500){
        dropdown_content.classList.add("hidden");
        ok = 0;
    }
}
//*************************************************************************************************
//WHEN THE WINDOWS LOADS DO ...                                                                   *
//*************************************************************************************************
window.onload = function(){
    parallax1text.style.width = "80vw";
    parallax1text.style.left = "10vw";
    parallax1text.style.top = "10vw";
    parallax1text.style.opacity = "1";
    parallax1subtext.style.width = "20vw";
    parallax1subtext.style.left = "40vw";
    parallax1subtext.style.top = "20vw";
    parallax1subtext.style.opacity = "0.8";
    parallax1background.style.opacity = "1";
    window.addEventListener("resize",checkSize);
    dropdown_content.classList.add("hidden");
    ok = 0;
}
//----------------------------------------------------------------------------------------------END

//*************************************************************************************************
//THE DROPDOWN MENU THAT APPEARS ON SMALL DEVICES.                                                *
//*************************************************************************************************
dropdown_button.onclick = function(){
    if(ok == 0) {
        dropdown_content.classList.remove("hidden");
        ok = 1;
    }
    else {
        dropdown_content.classList.add("hidden");
        ok = 0;
    }
}
//----------------------------------------------------------------------------------------------END
