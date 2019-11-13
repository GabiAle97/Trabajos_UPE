$(document).ready( function () {
    $('.filas').click(function (e) {
        var id = $(this)[0].getElementsByTagName('td')[0].innerHTML
        var nombre = $(this)[0].getElementsByTagName('td')[1].innerHTML
        $.ajax({
            type: "POST",
            url: `consigna2.php?id=${id}&nombre=${nombre}`,
            success: function (data) {
                $('body').html(data);
            }
        });
        
    });
});