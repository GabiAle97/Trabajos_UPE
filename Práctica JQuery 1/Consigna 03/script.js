$(document).ready(function(){
    var boton1 = $("#primer-boton");
    var boton2 = $("#segundo-boton");
    var boton3 = $("#tercer-boton");
    boton1.click(function(){
        cambiarClase("#primer-p",boton1)
    })
    boton2.click(function(){
        cambiarClase("#segundo-p",boton2)
    })
    boton3.click(function(){
        cambiarClase("#tercer-p",boton3)
    })
})

function cambiarClase(destino,boton){
    var parrafo = $(destino);
    parrafo.toggleClass("parrafo_resaltado");
    if (parrafo.hasClass("parrafo_resaltado")){
        boton.text("Desactivar Clase")
    }
    else{
        boton.text("Activar Clase")
    }
}