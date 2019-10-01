$(document).ready(function () {
    $("#submitCorreo").click(function (event) {
        event.preventDefault();
        var email = $("#email").val()
        validar(email);
    })
})

function validar(email) {
    var permitidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if(permitidos.test(email)){
        $("#mensaje").addClass("alert-success");
        $("#mensaje").removeClass("alert-warning")
        $("#mensaje").removeClass("alert-danger")
        $("#mensaje").text("Se ha enviado un link de recuperacion de contraseña a su Email");
        $("#mensaje").fadeIn();
        setTimeout(() => {
            $("#mensaje").fadeOut();
        }, 4000);
    }else{
        $("#mensaje").removeClass("alert-success");
        $("#mensaje").addClass("alert-danger")
        $("#mensaje").text("El email introducido no existe, o tiene errores de formato");
        $("#mensaje").fadeIn();
        setTimeout(() => {
            $("#mensaje").fadeOut();
        }, 4000);
    }
}