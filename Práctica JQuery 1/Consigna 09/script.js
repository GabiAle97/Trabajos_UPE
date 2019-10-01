$(document).ready(function(){
    mostrarHora();
});

function mostrarHora(){
    var p = $("#hora");
    var fecha= new Date()
    var horas= addZero(fecha.getHours())
    var minutos = addZero(fecha.getMinutes())
    var segundos = addZero(fecha.getSeconds())
    p.text(horas + ":" + minutos + ":" + segundos);
    setTimeout("mostrarHora()", 5000);
}

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }