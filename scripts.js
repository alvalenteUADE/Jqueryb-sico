$(document).ready(function() {
 
    $("#ocultar").click(function() {
        $("#imagen").hide(); 
        $("#titulo").text("¡No tenemos ninguna imagen!"); 
        $("#titulo").addClass("text-danger"); 
        $("#titulo").removeClass("text-primary"); 
    });


    $("#mostrar").click(function() {
        $("#imagen").show(); 
        $("#titulo").text("¡Mirá la siguiente imagen!"); 
        $("#titulo").addClass("text-primary"); 
        $("#titulo").removeClass("text-danger"); 
    });
});
