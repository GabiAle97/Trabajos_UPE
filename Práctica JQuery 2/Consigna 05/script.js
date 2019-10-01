function modificarOp() {
    var nuevoOpcion = $("#modifPropio").val();
    if (nuevoOpcion != "") {

        $("option:selected").text(nuevoOpcion);
        alert("Opción modificada con éxito")
    } else {
        alert("No se pueden enviar campos vacíos");
    }
}

function borrarOp() {
    $("option:selected").remove();
    alert("Opción borrada con éxito")
}

function agregarOp() {
    var nuevoOpcion = $("#valor").val();
    var selector = $("#seleccion");
    var length = $("option").length;

    var tagOption = $("<option>",{
        'value' : `value${length+1}`,
        'selected' : ""
    }).text(nuevoOpcion);

    if (nuevoOpcion != "") {
        selector.append(tagOption);
        alert("Opción agregada con éxito")
    } else {
        alert("No se pueden enviar campos vacíos")
    }
}

$(document).ready(function () {
    $("#modificar").click(function () {
        modificarOp();
    })
    $("#agregar").click(function () {
        agregarOp();
    })
    $("#borrar").click(function () {
        borrarOp();
    })

})