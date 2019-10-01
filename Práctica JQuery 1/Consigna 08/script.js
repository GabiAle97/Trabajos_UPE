$(document).ready( function () {

    var boton = $("#removerVocales");
    boton.click(function () {
        removerVocales()
    })
})

function removerVocales() {
    $("#inpQuitarVocales").val($("#inpQuitarVocales").val().replace(/[aeiou]/gi,''));
}