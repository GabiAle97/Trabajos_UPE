$(document).ready(function(){
    var boton = $("#agregar");
    boton.click(function(){
        agregarDatos();
    })
})

function agregarDatos(){
    var tabla = $('#tabla'); 
    var nombre = $("#nombre").val();
    var primerParcial = parseInt($("#1er-parcial").val());
    var segundoParcial = parseInt($("#2do-parcial").val());
    
    var fila = $("<tr>").append(
        $("<td>").text(nombre),
        $("<td>").text(primerParcial),
        $("<td>").text(segundoParcial),
        $("<td>").text((primerParcial+segundoParcial)/2)
    )

    tabla.append(fila);
}