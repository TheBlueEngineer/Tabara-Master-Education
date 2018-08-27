//*************************************************************************************************
//VARIABLES AND DECLARATIONS                                                                      *
//*************************************************************************************************
var collapsibles = document.getElementsByClassName('collapsible-header');
var tabaratext1 = document.getElementById("text1");
var tabaratext2 = document.getElementById("text2");
var i, lastCol;
var OK1 = 1, OK2 = 1;

document.addEventListener('DOMContentLoaded', function() {
    var elems_parallaxs = document.querySelectorAll('.parallax');
    var elems_collapsible = document.querySelectorAll('.collapsible');
    var elems_materialbox = document.querySelectorAll('.materialboxed');
    var instances_parallaxs = M.Parallax.init(elems_parallaxs);
    var instances_collapsible = M.Collapsible.init(elems_collapsible);
    var instances_materialbox = M.Materialbox.init(elems_materialbox);
  });
//----------------------------------------------------------------------------------------------END

//*************************************************************************************************
//CLICK ON COLLAPSIBLES                                                                           *
//*************************************************************************************************
function reset_collapsible(){
    for(i=0; i<collapsibles.length; i++){
        collapsibles[i].style.backgroundColor = "#ebfaeb";
        collapsibles[i].style.color = "#003300";
    }
}

function current_collapsible(i){
    reset_collapsible();
    
    if(lastCol == i){
        collapsibles[i].style.backgroundColor = "#ebfaeb";
        collapsibles[i].style.color = "#003300";
        lastCol = -1;
    }
    else{
        collapsibles[i].style.backgroundColor = "#003300";
        collapsibles[i].style.color = "#ebfaeb";  
        lastCol = i;
    }
}
//----------------------------------------------------------------------------------------------END

//*************************************************************************************************
//CLICK ON THE TEXT IN FRONT OF CAMP IMAGES                                                       *
//*************************************************************************************************
tabaratext1.onclick = function(){
    if(OK1){
        tabaratext1.style.opacity ="0.05";
        OK1 = 0;
    }
    else{
        tabaratext1.style.opacity ="0.7";
        OK1 = 1;
    }
}

tabaratext2.onclick = function(){
    if(OK2){
        tabaratext2.style.opacity ="0.05";
        OK2 = 0;
    }
    else{
        tabaratext2.style.opacity ="0.7";
        OK2 = 1;
    }
}
//----------------------------------------------------------------------------------------------END