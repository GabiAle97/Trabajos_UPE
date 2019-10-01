$(document).ready(function(){
    var primerboton1 = $("#primer-boton-1");
    var primerboton2 = $("#primer-boton-2");
    
    var segundoboton1 = $("#segundo-boton-1");
    var segundoboton2 = $("#segundo-boton-2");

    var tercerboton1 = $("#tercer-boton-1");
    var tercerboton2 = $("#tercer-boton-2");
    
    primerboton1.click(function(){
        cambiarClase("#primer-p",primerboton1,"parrafo_resaltado")
    })
    primerboton2.click(function(){
        cambiarClase("#primer-p",primerboton2,"parrafo_coloreado")
    })

    segundoboton1.click(function(){
        cambiarClase("#segundo-p",segundoboton1,"parrafo_resaltado")
    })
    segundoboton2.click(function(){
        cambiarClase("#segundo-p",segundoboton2,"parrafo_coloreado")
    })

    tercerboton1.click(function(){
        cambiarClase("#tercer-p",tercerboton1,"parrafo_resaltado")
    })
    tercerboton2.click(function(){
        cambiarClase("#tercer-p",tercerboton2,"parrafo_coloreado")
    })
})

function cambiarClase(destino,boton,estilo){
    var parrafo = $(destino);
    parrafo.toggleClass(estilo);
    if (!parrafo.hasClass(estilo)){
        boton.text("Activar Clase")
    }
    else{
        boton.text("Desactivar Clase")
    }
}