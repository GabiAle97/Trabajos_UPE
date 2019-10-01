$(document).ready(function () {
    var boton = $("#reportar");
    boton.click(function () {
        visibilidadForm(boton)
        checkForm();
    })
})

function checkForm() {
    console.log("checkform");
    $("#formulario *").on("change keydown focus", function () {
        if (validarNombre($("#nombre").val().toLowerCase()) &&
            validarEdad($("#edad").val()) &&
            validarMail($("#mail").val()) &&
            validarFecha($("#fechaIncidente").val()) &&
            validarDescripcion($("#descripcion").val())) {
                console.log("exito")
                $("#boton").removeAttr("disabled")
        } else {
            console.log("fracaso")
            $("#boton").attr("disabled", "disabled")
        }
    });
}

function validarDescripcion(descripcion) {
    if (descripcion != '') {
        if (descripcion.length >= 30) {
            $("#descripcion").removeClass("incorrecto");
            $("#descripcion").addClass("correcto");
            $("#mensajeDescripcion").removeClass("visible");
            return true;
        } else {
            $("#mensajeDescripcion").text(`La descripcion no puede tener menos de 30 caracteres`);
            $("#descripcion").removeClass("correcto");
            $("#descripcion").addClass("incorrecto");
            $("#mensajeDescripcion").addClass("visible");
        }
    } else {
        $("#mensajeDescripcion").text(`La descripcion no puede estar vacía`);
        $("#descripcion").removeClass("correcto");
        $("#descripcion").addClass("incorrecto");
        $("#mensajeDescripcion").addClass("visible");
    }

}

function validarFecha(fecha) {
    var RegExPattern = /^\d{2,4}\-\d{1,2}\-\d{1,2}$/;
    var fechaActual = new Date()
    var diaA = fechaActual.getDate();
    var mesA = fechaActual.getMonth() + 1;
    var anioA = fechaActual.getFullYear();
    var fechaf = fecha.split("-");
    var anioI = parseInt(fechaf[0]);
    var mesI = parseInt(fechaf[1]);
    var diaI = parseInt(fechaf[2]);
    console.log(mesA)
    if ((fecha.match(RegExPattern)) && (fecha != '')) {
        if (anioI == anioA) {
            if (mesI == mesA) {
                if (diaI > diaA) {

                    $("#mensajeFecha").text(`La fecha introducida sobrepasa la fecha actual`);
                    $("#fechaIncidente").removeClass("correcto");
                    $("#fechaIncidente").addClass("incorrecto");
                    $("#mensajeFecha").addClass("visible");
                } else {
                    $("#fechaIncidente").removeClass("incorrecto");
                    $("#fechaIncidente").addClass("correcto");
                    $("#mensajeFecha").removeClass("visible");
                    return true;
                }
            } else if (mesI > mesA) {
                $("#mensajeFecha").text(`La fecha introducida sobrepasa la fecha actual`);
                $("#fechaIncidente").removeClass("correcto");
                $("#fechaIncidente").addClass("incorrecto");
                $("#mensajeFecha").addClass("visible");
            } else {
                $("#fechaIncidente").removeClass("incorrecto");
                $("#fechaIncidente").addClass("correcto");
                $("#mensajeFecha").removeClass("visible");
                return true;
            }
        } else if (anioI > anioA) {
            $("#mensajeFecha").text(`La fecha introducida sobrepasa la fecha actual`);
            $("#fechaIncidente").removeClass("correcto");
            $("#fechaIncidente").addClass("incorrecto");
            $("#mensajeFecha").addClass("visible");
        } else if (anioI == 2017) {
            if (mesI < 9) {
                $("#mensajeFecha").text(`La fecha introducida es menor a la fecha minima (01/09/2017)`);
                $("#fechaIncidente").removeClass("correcto");
                $("#fechaIncidente").addClass("incorrecto");
                $("#mensajeFecha").addClass("visible");
            } else {
                $("#fechaIncidente").removeClass("incorrecto");
                $("#fechaIncidente").addClass("correcto");
                $("#mensajeFecha").removeClass("visible");
                return true;
            }
        } else if (aniI < 2017) {
            $("#mensajeFecha").text(`La fecha introducida es menor a la fecha minima (01/09/2017)`);
            $("#fechaIncidente").removeClass("correcto");
            $("#fechaIncidente").addClass("incorrecto");
            $("#mensajeFecha").addClass("visible");
        } else {
            $("#fechaIncidente").removeClass("incorrecto");
            $("#fechaIncidente").addClass("correcto");
            $("#mensajeFecha").removeClass("visible");
            return true;
        }
    } else {
        $("#mensajeFecha").text(`formato no permitido`);
        $("#fechaIncidente").removeClass("correcto");
        $("#fechaIncidente").addClass("incorrecto");
        $("#mensajeFecha").addClass("visible");
    }
}

function validarMail(mail) {
    var listaMail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    var error = false;
    if (mail != "") {
        for (let index = 0; index < mail.length; index++) {

            if (!listaMail.test(mail)) {
                $("#mensajeMail").text(`formato no permitido`);
                $("#mail").removeClass("correcto");
                $("#mail").addClass("incorrecto");
                $("#mensajeMail").addClass("visible");
                error = true;
                break;
            }
        }
        if (!error) {
            if (mail.length <= 120) {
                $("#mail").removeClass("incorrecto");
                $("#mail").addClass("correcto");
                $("#mensajeMail").removeClass("visible");
                return true;
            } else {
                $("#mensajeMail").text(`El mail sobrepasa los 120 caracteres`);
                $("#mail").removeClass("correcto");
                $("#mail").addClass("incorrecto");
                $("#mensajeMail").addClass("visible");
            }
        }
    } else {
        $("#mensajeMail").text(`El campo no puede estar vacío`);
        $("#mail").removeClass("correcto");
        $("#mail").addClass("incorrecto");
        $("#mensajeMail").addClass("visible");
    }

}

function validarEdad(edad) {
    var listaNum = "1234567890";
    var error = false;
    if (edad != "") {
        for (let index = 0; index < edad.length; index++) {

            if (listaNum.indexOf(edad[index]) == -1) {
                $("#mensajeEdad").text(`caracter ${edad[index]} no permitido`);
                $("#edad").removeClass("correcto");
                $("#edad").addClass("incorrecto");
                $("#mensajeEdad").addClass("visible");
                error = true;
                break;
            }
        }
        if (!error) {
            if (edad >= 18 && edad <= 85) {
                $("#edad").removeClass("incorrecto");
                $("#edad").addClass("correcto");
                $("#mensajeEdad").removeClass("visible");
                return true;
            } else {
                $("#mensajeEdad").text(`Solo se permiten edades entre 18 y 85 años`);
                $("#edad").removeClass("correcto");
                $("#edad").addClass("incorrecto");
                $("#mensajeEdad").addClass("visible");
            }
        }
    } else {
        $("#mensajeEdad").text(`El campo no puede estar vacío`);
        $("#edad").removeClass("correcto");
        $("#edad").addClass("incorrecto");
        $("#mensajeEdad").addClass("visible");
    }

}

function visibilidadForm(boton) {
    var form = $("#formulario");
    form.toggleClass("visible");

    if (!form.hasClass("visible")) {
        boton.text("Reportar Incidente");
    } else {
        boton.text("No Reportar Incidente");
    }
}

function validarNombre(nombre) {
    listaNombres = nombre.split(" ");
    var listaLetras = "abcdefghijklmnñopqrstuvwxyz "
    var error = false;
    if (nombre != "") {
        for (let index = 0; index < nombre.length; index++) {
            if (listaLetras.indexOf(nombre[index]) == -1) {
                $("#mensajeNombre").text(`caracter ${nombre[index]} no permitido`);
                $("#nombre").removeClass("correcto");
                $("#nombre").addClass("incorrecto");
                $("#mensajeNombre").addClass("visible");
                error = true;
                break;
            }
        }
        if (!error) {
            if (nombre.length <= 50) {
                if (listaNombres.length >= 2) {
                    for (let index = 0; index < listaNombres.length; index++) {
                        if (listaNombres[index].length < 5) {
                            $("#mensajeNombre").text(`"${listaNombres[index]}"no contiene 5 letras o más`);
                            $("#nombre").removeClass("correcto");
                            $("#nombre").addClass("incorrecto");
                            $("#mensajeNombre").addClass("visible");
                            error = true;

                            break;
                        }
                    }
                    if (!error) {
                        $("#nombre").removeClass("incorrecto");
                        $("#nombre").addClass("correcto");
                        $("#mensajeNombre").removeClass("visible");
                        return true;
                    }
                } else {
                    $("#mensajeNombre").text(`No se permiten menos de 2 palabras`);
                    $("#nombre").removeClass("correcto");
                    $("#nombre").addClass("incorrecto");
                    $("#mensajeNombre").addClass("visible");
                }
            } else {
                $("#mensajeNombre").text(`Se sobrepasó el limite de 50 letras`);
                $("#nombre").removeClass("correcto");
                $("#nombre").addClass("incorrecto");
                $("#mensajeNombre").addClass("visible");
            }
        }
    }
}