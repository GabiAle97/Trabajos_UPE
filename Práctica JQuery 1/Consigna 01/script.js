$(document).ready(function(){
    var parrafo =$("#parrafo")
    var boton = $("#boton")
    console.log(boton)
    boton.click(function(){
        parrafo.toggleClass("visible");
        if (parrafo.hasClass("visible")){
            boton.text("Ocultar párrafo")
        }
        else {
            boton.text("Mostrar párrafo")
        }
    });
})