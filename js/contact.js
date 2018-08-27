//*************************************************************************************************
//VARIABLES AND DECLARATIONS                                                                      *
//*************************************************************************************************
var dateText = document.getElementById('contract-date');
var dateText2 = document.getElementById('feedback-date');

//QUESTIONS FROM "FEEDBACK"
var radio1 = document.getElementsByName("q1");
var radio2 = document.getElementsByName("q2");
var radio3 = document.getElementsByName("q3");
var radio4 = document.getElementsByName("q4");
var radio5 = document.getElementsByName("q5");
var err_f = document.getElementsByClassName("errors_p2");

//INPUT FROM "CONTRACT"
var input_array = document.getElementsByClassName("contract-input");
var input_health = document.getElementById("input_health");
var input_description = document.getElementById("input_description");
//ERRORS DISPLAYED ON "CONTRACT" 
var error_array = document.getElementsByClassName("errors_p");

//INITIALIZE MATERIALIZE ITEMS
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
//WHEN THE PAGE IS FULLY LOADED DO ...                                                            *
//*************************************************************************************************
window.onload = function(){
    //ACQUIRE DATE TO BE SHOWN IN THE CONTRACT/FEEDBACK
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    }    
    today = mm + '/' + dd + '/' + yy;
    dateText.innerHTML = today;
    dateText2.innerHTML = today;
}
//----------------------------------------------------------------------------------------------END

//*************************************************************************************************
//CHECK IF SUBMIT IS CORRECT FOR CONTRACT                                                         *
//*************************************************************************************************
function validateForm1(){
    var OK = 1;
    for(var i=0; i<input_array.length; i++){
        if(input_array[i].value == ""){
            OK = 0;
            error_array[i].style.display = "block";
        }
        else{
            error_array[i].style.display = "none";
        }
    }
    
    if(OK == 1){
        var messages = "<h1 style='color: #002f00;'>CERERE DE INSCRIERE</h1><p style='font-size: 15px; color: darkgreen; font-weight: 900;'>Numele: "+input_array[0].value+"<br>Prenumele: "+input_array[1].value+"<br>Data nasterii: "+input_array[2].value+"<br>Varsta: "+input_array[3].value+"<br>Sexul: "+input_array[4].value+"<br>Localitatea de domiciliu: "+input_array[5].value+"<br>Scoala de provenienta: "+input_array[6].value+"<br>Profesorul insotitor: "+input_array[7].value+"<br>Email: "+input_array[8].value+"<br>Telefon: "+input_array[9].value+"<br>Probleme de sanatate: "+input_health.value+"<br>Descriere: "+input_description.value+"<br></p>";
        Email.send(input_array[8].value,
                    "tabaramastereducation@gmail.com",
                    "CERERE DE INSCRIERE - "+input_array[0].value+" "+input_array[1].value,
                    messages,
                   "smtp.gmail.com",
                   "tabaramastereducation@gmail.com",
                   "TabaraMasterEducation1");
        alert("Cererea a fost trimisa. Va multumim ca ati ales Tabara Master Education ! ")
    }else{
        return false;
    }
}
//----------------------------------------------------------------------------------------------END

//*************************************************************************************************
//CHECK IF SUBMIT IS CORRECT FOR .FEEDBACK.PHP                                                    *
//*************************************************************************************************
function validateForm2(){
    var OK1, OK2, OK3, OK4, OK5 = 1;
    var answers=[];
    var i;
    
    for(i = 0; i < radio1.length; i++){
        if(radio1[i].checked){
            OK1 = 1;
            answers[0] = radio1[i].value;
            err_f[0].style.display = "none";
            break;
        }
        else{
            OK1 = 0;
            err_f[0].style.display = "block";
        }
    }
    
    for(i = 0; i < radio2.length; i++){
        if(radio2[i].checked){
            OK2 = 1;
            answers[1] = radio2[i].value;
            err_f[1].style.display = "none";
            break;
        }
        else{
            OK2 = 0;
            err_f[1].style.display = "block";
        }
    }
    
    for(i = 0; i < radio3.length; i++){
        if(radio3[i].checked){
            OK3 = 1;
            answers[2] = radio3[i].value;
            err_f[2].style.display = "none";
            break;
        }
        else{
            OK3 = 0;
            err_f[2].style.display = "block";
        }
    }
    
    for(i = 0; i < radio4.length; i++){
        if(radio4[i].checked){
            OK4 = 1;
            answers[3] = radio4[i].value;
            err_f[3].style.display = "none";
            break;
        }
        else{
            OK4 = 0;
            err_f[3].style.display = "block";
        }
    }
    
    for(i = 0; i < radio5.length; i++){
        if(radio5[i].checked){
            OK5 = 1;
            answers[4] = radio5[i].value;
            err_f[4].style.display = "none";
            break;
        }
        else{
            OK5 = 0;
            err_f[4].style.display = "block";
        }
    }
    
    if(OK1==1 && OK2==1 && OK3==1 && OK4==1 && OK5==1) {
        answers[5] = document.getElementById("input_description2").value;
        var messages = "<h1 style='color: #002f00;'>FEEDBACK</h1><p style='font-size: 15px; color: darkgreen; font-weight: 900;'>1). Cum ai aflat despre tabara Master Education?<br>"+answers[0]+"<br>2). De ce ai luat hotararea de a trimite copilul in tabara Master Education?<br>"+answers[1]+"<br>3). Dupa participarea la programul educational  ati fost multumit de:<br>"+answers[2]+"<br>4). In viitor ati opta pentru o alta tabara Master Education?<br>"+answers[3]+"<br>5). Chestionarul a fost completat de:<br>"+answers[4]+"<br>6). In cazul in care copilul dumneavoastra si-a manifestat vreo nemultumire,va rugam sa ne detaliati problema. Pentru un raspuns prompt mentionati si adresa de email sau numarul de telefon:<br>"+answers[5]+"<br></p>";
        Email.send("tabaramastereducation@gmail.com",
                   "tabaramastereducation@gmail.com",
                   "FEEDBACK", 
                   messages,
                   "smtp.gmail.com",
                   "tabaramastereducation@gmail.com",
                   "TabaraMasterEducation1");
        alert("Feedback-ul a fost trimis prin mail. Va multumim pentru review !");
    }
    else{
        return false;
    }
}
//----------------------------------------------------------------------------------------------END