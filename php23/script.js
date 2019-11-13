$(document).ready(function () {
    $('.filas').click(function (e) {
        var id = $(this)[0].getElementsByTagName('td')[0].innerHTML
        var nombre = $(this)[0].getElementsByTagName('td')[1].innerHTML
        console.log(nombre)
        window.location.href = `consigna2.php?id=${id}&nombre=${nombre}`;
    });
});