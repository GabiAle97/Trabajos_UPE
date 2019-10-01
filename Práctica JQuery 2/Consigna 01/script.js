$(document).ready(function (){
    
    $("#evaluar").on("click", function(){
        comprobar();
    })
}) 

function comprobar(){
    var texto = $("#array").val().toLowerCase();
    var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    var error = false;
    if($("#array").val() != ""){
        for (let index = 0; index < texto.length; index++) {
            if(letras.indexOf(texto[index])==-1){
                error = true;
                alert("Solo se permiten Letras");
            }
        }
    }else{
        error = true;
        alert("No se puede dejar campos vacíos");
    }
    if (!error) {
        evaluar()
    }
}


function evaluar(){
    var palabras = $("#array").val().toLowerCase().split(" ");
    $("#Cantidad").text(`Cantidad de Palabras: ${palabras.length}`)
    $("#PrimerPalabra").text(`Primer palabra: ${palabras[0]}`)
    $("#UltimaPalabra").text(`Última palabra: ${palabras[palabras.length-1]}`)
    $("#OrdenI").text(`Orden de palabras invertido: ${palabras.reverse().join(" ")}`)
    $("#OrdenAZ").text(`Orden de palabras de A a Z: ${palabras.sort().join(" ")}`)
    $("#OrdenZA").text(`Orden de palabras de Z a A: ${(palabras.sort()).reverse().join(" ")}`)
    
}