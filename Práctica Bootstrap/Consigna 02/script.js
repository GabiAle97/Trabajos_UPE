$(document).ready(function(){
    $("#imagen1").click(function(){
        armarModal("imagen1.jpg","Imagen 1");
    })

    $("#imagen2").click(function(){
        armarModal("imagen2.jpg","Imagen 2");
    })

    $("#imagen3").click(function(){
        armarModal("imagen3.jpg","Imagen 3");
    })

    $("#imagen4").click(function(){
        armarModal("imagen4.jpg","Imagen 4");
    })
})

function armarModal(imagen,label){
    $("#modalFotosLabel").text(label);
    $("#imagenExp").attr("src",imagen);
}