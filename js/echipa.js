//*************************************************************************************************
//VARIABLES AND DECLARATIONS                                                                      *
//*************************************************************************************************
document.addEventListener('DOMContentLoaded', function() {
    var elems_parallaxs = document.querySelectorAll('.parallax');
    var elems_collapsible = document.querySelectorAll('.collapsible');
    var instances_parallaxs = M.Parallax.init(elems_parallaxs);   
    var instances_collapsible = M.Collapsible.init(elems_collapsible);
  });
//----------------------------------------------------------------------------------------------END

