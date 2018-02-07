
 //AL CAMBIAR EL TAMAÑO DE LA VENTANA
$( window ).resize(function() {

    classonwidth($(window).width()); 
 
});
  
//CARGA DE LA PAGINA
$(document).ready(function() {
 
     //ADD CLASS ON NAVBAR
    classonwidth($(window).width());  

    
        $(window).scroll(function() { 
    
          if($(document).scrollTop() > 40) {
    
        $('#IDNAV').addClass('bgcolor02'); 
        $('#IDNAV').removeClass('bgtransparent');
        
    
        }    else {

        $('#IDNAV').addClass('bgtransparent');  
        $('#IDNAV').removeClass('bgcolor02');
        
    
        }
    
    
      });
    
    
    });
    
    //TRAE VARIABLES DE LA URL
    function getQueryVariable(variable)
    {
           var query = window.location.search.substring(1);
           var vars = query.split("&");
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=");
                   if(pair[0] == variable){return pair[1];}
           }
    
           return("-1");
    }
    
    
    //SCROLL TO VIEW
    function FNC_SCROLLTO(IDSECCION) {
      var elmnt = document.getElementById(IDSECCION);
      elmnt.scrollIntoView({block: "start", behavior: "smooth"});
    }
     

    function classonwidth(var_width){

    
        if(var_width <= 740){
    
            $('#IDNAV').addClass('bgcolor02'); 
            $('#IDNAV').removeClass('bgtransparent');
    
        }else{
    
            $('#IDNAV').addClass('bgtransparent');  
            $('#IDNAV').removeClass('bgcolor02');
    
        }
        
    
      }