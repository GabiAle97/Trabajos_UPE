$(document).ready(function(){
    mostrarHora();
})

function mostrarHora(){
    var fecha= new Date()
    var dia = fecha.getDate()
    var mes = fecha.getMonth()
    var anio = fecha.getFullYear()
    var horas= fecha.getHours()
    var minutos = fecha.getMinutes()
    var segundos = fecha.getSeconds()
    $("#fecha").text(`${dia} ${mes+1} ${anio}`)
    $("#hora").text(`${horas}:${minutos}:${segundos}`)
    setTimeout("mostrarHora()", 1000);
}