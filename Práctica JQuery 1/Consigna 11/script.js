$(document).ready(function () {
    $("tbody tr:nth-child(odd)").each(function(){
        $(this).toggleClass("inpar")
    })

    $("tbody tr:nth-child(even)").each(function(){
        $(this).toggleClass("par")
    })

    $("#invertir").click(function(){
        invertirColores()
    })
    $("#promedio").click(function(){
        generarPromedio()
    })
})

function generarPromedio() {
    var promedio = 0
    $("tbody tr td:nth-child(2)").each(function () {
        promedio = promedio + parseFloat($(this).text())
    })
    promedio = promedio/$("tbody tr td:nth-child(2)").length;
    alert("El promedio de la clase en el primer parcial es de " + promedio + " puntos")

}

function invertirColores() {
    $("tbody tr:nth-child(odd)").each(function(){
        $(this).toggleClass("par")
        $(this).toggleClass("inpar")
    })

    $("tbody tr:nth-child(even)").each(function(){
        $(this).toggleClass("par")
        $(this).toggleClass("inpar")
    })
}