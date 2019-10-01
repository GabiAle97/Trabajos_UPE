$(document).ready(function () {
    agregarEstilos();
    $("#sort").click(function(){
        sortTable();
    })
    $("#submitBttn").click(function (e) {

        e.preventDefault();
        if (validarNombre() &&
            validarNroDoc() &&
            validarParcial($("#1erParcial"), $("#resultado1erP")) &&
            validarParcial($("#2doParcial"), $("#resultado2doP")) &&
            validarParcial($("#rec1erParcial"), $("#resultadoRec1erP")) &&
            validarParcial($("#rec2doParcial"), $("#resultadoRec2doP"))) {
            ingresarDatos();
            agregarEstilos();

            $("#regEstudiante").modal("hide")
        } else {
            validarNombre()
            validarNroDoc()
            validarParcial($("#1erParcial"), $("#resultado1erP"))
            validarParcial($("#2doParcial"), $("#resultado2doP"))
            validarParcial($("#rec1erParcial"), $("#resultadoRec1erP"))
            validarParcial($("#rec2doParcial"), $("#resultadoRec2doP"))
            $("#errorForm").modal("show");
        }
    });
    $("#nombre").change(function (e) {
        e.preventDefault();
        validarNombre();

    });
    $("#documento").change(function (e) {
        e.preventDefault();
        validarDocumento()
    });
    $("#nroDoc").change(function (e) {
        e.preventDefault();
        validarNroDoc()
    });
    $("#ausente1erP").change(function (e) {
        e.preventDefault();
        validarAusencia($("#1erParcial"), $("#ausente1erP"));
    });
    $("#1erParcial").change(function (e) {
        e.preventDefault();
        validarParcial($(this), $("#resultado1erP"))
    });
    $("#ausente2doP").change(function (e) {
        e.preventDefault();
        validarAusencia($("#2doParcial"), $("#ausente2doP"));
    });
    $("#2doParcial").change(function (e) {
        e.preventDefault();
        validarParcial($(this), $("#resultado2doP"))
    });
    $("#ausenteRec1erP").change(function (e) {
        e.preventDefault();
        validarAusencia($("#rec1erParcial"), $("#ausenteRec1erP"));
    });
    $("#rec1erParcial").change(function (e) {
        e.preventDefault();
        validarParcial($(this), $("#resultadoRec1erP"))
    });
    $("#ausenteRec2doP").change(function (e) {
        e.preventDefault();
        validarAusencia($("#rec2doParcial"), $("#ausenteRec2doP"));
    });
    $("#rec2doParcial").change(function (e) {
        e.preventDefault();
        validarParcial($(this), $("#resultadoRec2doP"))
    });
});

function ingresarDatos() {
    var tabla = $('#tabla');
    var nombre = $("#nombre").val();
    var tipoDocumento = $("#documento option:selected").text()
    var nroDoc = $("#nroDoc").val()
    var primerParcial = $("#1erParcial").val();
    var segundoParcial = $("#2doParcial").val();
    var rec1erParcial = $("#rec1erParcial").val();
    var rec2doParcial = $("#rec2doParcial").val();
    var final = 0;
    var resultado = "";


    console.log("primer parcial: " + primerParcial)
    console.log("segundo parcial: " + segundoParcial)
    console.log("primer recuperatorio: " + rec1erParcial)
    console.log("segundo recuperatorio: " + rec2doParcial)

    if (primerParcial == "AUSENTE") {
        console.log("primer parcial ausente")
        if (rec1erParcial == "AUSENTE") {
            console.log("pimer recuperatorio ausente")
            final = "AUSENTE"

            resultado = "AUSENTE"
        } else {
            console.log("primer recuperatorio presente: " + rec1erParcial);
            if (segundoParcial == "AUSENTE") {
                console.log("segundo parcial ausente")
                if (rec2doParcial == "AUSENTE") {
                    console.log("segundo recuperatorio ausente")
                    final = "AUSENTE"

                    resultado = "AUSENTE"
                } else {
                    console.log("segundo recuperatorio presente: " + rec2doParcial)
                    final = (parseInt(rec1erParcial) + parseInt(rec2doParcial)) / 2;
                    console.log("final = " + final);
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                }
            } else {
                console.log("segundo parcial presnte: " + segundoParcial);
                if (rec2doParcial == "AUSENTE") {
                    console.log("segundo recuperatorio ausente")
                    final = (parseInt(rec1erParcial) + parseInt(segundoParcial)) / 2;
                    console.log("final = " + final);
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                } else {
                    console.log("segundo recuperatorio presente: " + rec2doParcial)
                    final = (parseInt(rec1erParcial) + parseInt(rec2doParcial)) / 2;
                    console.log("final = " + final);
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                }
            }
        }
    } else {
        console.log("primer parcial presente: " + primerParcial)
        if (rec1erParcial == "AUSENTE") {
            console.log("primer recuperatorio ausente")
            if (segundoParcial == "AUSENTE") {
                console.log("segundo parcial ausente")
                if (rec2doParcial == "AUSENTE") {
                    console.log("segundo recuperatorio ausente")
                    final = "AUSENTE"

                    resultado = "AUSENTE"
                } else {
                    console.log("segundo recuperatorio presente: " + rec2doParcial)
                    final = (parseInt(primerParcial) + parseInt(rec2doParcial)) / 2;
                    console.log("final = " + final);
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                }
            } else {
                console.log("segundo parcial presente: " + segundoParcial)
                if (rec2doParcial == "AUSENTE") {
                    console.log("segundo recuperatorio ausente")
                    final = (parseInt(primerParcial) + parseInt(segundoParcial)) / 2;
                    console.log("final = " + final)
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                } else {
                    console.log("segundo recuperatorio presente: " + rec2doParcial)
                    final = (parseInt(primerParcial) + parseInt(rec2doParcial)) / 2;
                    console.log("final = " + final)
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                }
            }
        } else {
            console.log("primer recuperatorio presente: " + rec1erParcial)
            if (segundoParcial == "AUSENTE") {
                console.log("segundo parcial ausente");
                if (rec2doParcial == "AUSENTE") {
                    console.log("segundo recuperatorio ausente")
                    final = "AUSENTE"

                    resultado = "AUSENTE"
                } else {
                    console.log("segundo recuperatorio presente: " + rec2doParcial)
                    final = (parseInt(rec1erParcial) + parseInt(rec2doParcial)) / 2;
                    console.log("final = " + final)
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                }
            } else {
                console.log("segundo parcial presente: " + segundoParcial)
                if (rec2doParcial == "AUSENTE") {
                    console.log("segundo recuperatorio ausente")
                    final = (parseInt(rec1erParcial) + parseInt(segundoParcial)) / 2;
                    console.log("final = " + final)
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                } else {
                    console.log("segundo recuperatorio presente: " + rec2doParcial)
                    final = (parseInt(rec1erParcial) + parseInt(rec2doParcial)) / 2;
                    console.log("final = " + final);
                    if (final >= 7) {

                        resultado = "PROMOCIONA"
                    } else if (final >= 4) {

                        resultado = "A FINAL"
                    } else {

                        resultado = "RECURSA"
                    }
                }
            }
        }
    }

    var fila = $("<tr>").append(
        $("<td>").text(nombre),
        $("<td>").text(tipoDocumento),
        $("<td>").text(nroDoc),
        $("<td>").text(primerParcial),
        $("<td>").text(segundoParcial),
        $("<td>").text(rec1erParcial),
        $("<td>").text(rec2doParcial),
        $("<td>").text(final),
        $("<td>").text(resultado)
    )

    tabla.append(fila);
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tabla");
    switching = true;

    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 0; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function agregarEstilos() {
    var notas;
    for (let n = 4; n < 9 && n > 3; n++) {

        notas = $(`#tabla tr td:nth-child(${n})`)
        console.log(notas[0])
        for (let i = 0; i < notas.length; i++) {
            if (parseInt(notas[i].innerHTML) >= 7) {
                notas[i].setAttribute("class", "td-nota-promocionado")
            } else if (parseInt(notas[i].innerHTML) >= 4) {
                notas[i].setAttribute("class", "td-nota-aprobado")
            } else {
                notas[i].setAttribute("class", "td-nota-reprobado")
            }
            if (notas[i].innerHTML == "AUSENTE") {
                notas[i].setAttribute("class", "td-nota-ausente")
            }

        }

    }
    notas = $(`#tabla tr td:nth-child(9)`);
    for (let h = 0; h < notas.length; h++) {
        if (notas[h].innerHTML == "PROMOCIONA") {
            notas[h].setAttribute("class", "td-nota-promocionado")
        } else if (notas[h].innerHTML == "A FINAL") {
            notas[h].setAttribute("class", "td-nota-aprobado")
        } else if (notas[h].innerHTML == "RECURSA") {
            notas[h].setAttribute("class", "td-nota-reprobado")
        } else {
            notas[h].setAttribute("class", "td-nota-ausente")
        }

    }
}

function validarNombre() {
    var nombre = $("#nombre").val();
    var regexp = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{3,29} *){2,}/
    if (nombre != "") {
        if (regexp.test(nombre)) {
            if ($("#nombre").hasClass("invalido")) {
                $("#nombre").toggleClass("invalido");
                $("#nombre").toggleClass("valido");
            } else if (!$("#nombre").hasClass("valido")) {
                $("#nombre").addClass("valido")
            }
            $("#resultadoNom").text("")
            return true;
        } else {
            if ($("#nombre").hasClass("valido")) {
                $("#nombre").toggleClass("invalido");
                $("#nombre").toggleClass("valido");
            } else if (!$("#nombre").hasClass("invalido")) {
                $("#nombre").addClass("invalido")
            }
            $("#resultadoNom").text("El formato del nombre ingresado no coincide con el solicitado");
            return false;
        }
    } else {
        if ($("#nombre").hasClass("valido")) {
            $("#nombre").toggleClass("invalido");
            $("#nombre").toggleClass("valido");
        } else if (!$("#nombre").hasClass("invalido")) {
            $("#nombre").addClass("invalido")
        }
        $("#resultadoNom").text("El campo de Nombre no puede estar vacío")
        return false;
    }
}



function validarDocumento() {
    var selector = $("#documento").val();
    console.log(selector)
    var inputDoc = $("#nroDoc");
    if (selector == "dni") {
        inputDoc.attr("min", "1000000");
        inputDoc.attr("title", "Ingrese su DNI (de 7 a 8 dígitos)")
        return true;
    } else if (selector == "lcle") {
        inputDoc.attr("min", "100000");
        inputDoc.attr("title", "Ingrese su LC/LE (de 6 a 8 dígitos)")
        return true;
    } else {
        $("#resultadoTipoDoc").text("Ha ocurrido un error. Por favor, ingrese una opción válida")
        return false;
    }
}

function validarNroDoc() {
    var tipoDoc = $("#documento").val();
    var inputDoc = $("#nroDoc");
    var regex = /^[0-9]+$/
    if (inputDoc != "") {
        if (regex.test(inputDoc.val())) {
            if (tipoDoc == "dni") {
                if (inputDoc.val() < 1000000 || inputDoc.val() > 99999999) {
                    if ($(inputDoc).hasClass("valido")) {
                        $(inputDoc).toggleClass("invalido");
                        $(inputDoc).toggleClass("valido");
                    } else if (!$(inputDoc).hasClass("invalido")) {
                        $(inputDoc).addClass("invalido")
                    }
                    $("#resultadoDoc").text("El DNI ingresado no entra en el rango de 7 a 8 dígitos")
                    return false;
                } else {
                    if ($(inputDoc).hasClass("invalido")) {
                        $(inputDoc).toggleClass("invalido");
                        $(inputDoc).toggleClass("valido");
                    } else if (!$(inputDoc).hasClass("valido")) {
                        $(inputDoc).addClass("valido")
                    }
                    $("#resultadoDoc").text("")
                    return true;
                }
            } else {
                if (inputDoc.val() < 100000 || inputDoc.val() < 99999999) {
                    if ($(inputDoc).hasClass("valido")) {
                        $(inputDoc).toggleClass("invalido");
                        $(inputDoc).toggleClass("valido");
                    } else if (!$(inputDoc).hasClass("invalido")) {
                        $(inputDoc).addClass("invalido")
                    }
                    $("#resultadoDoc").text("El LC/LE ingresado no entra en el rango de 6 a 8 dígitos")
                    return false;
                } else {
                    if ($(inputDoc).hasClass("invalido")) {
                        $(inputDoc).toggleClass("invalido");
                        $(inputDoc).toggleClass("valido");
                    } else if (!$(inputDoc).hasClass("valido")) {
                        $(inputDoc).addClass("valido")
                    }
                    $("#resultadoDoc").text("")
                    return true;
                }
            }
        } else {
            if ($(inputDoc).hasClass("valido")) {
                $(inputDoc).toggleClass("invalido");
                $(inputDoc).toggleClass("valido");
            } else if (!$(inputDoc).hasClass("invalido")) {
                $(inputDoc).addClass("invalido")
            }
            $("#resultadoDoc").text("El campo Nro Documento solo admite números")
            return false;
        }
    } else {
        if ($(inputDoc).hasClass("valido")) {
            $(inputDoc).toggleClass("invalido");
            $(inputDoc).toggleClass("valido");
        } else if (!$(inputDoc).hasClass("invalido")) {
            $(inputDoc).addClass("invalido")
        }
        $("#resultadoDoc").text("El campo Nro Documento no puede estar vacío")
        return false;
    }
}

function validarAusencia(nota, checkbox) {
    var ausente = checkbox.prop("checked");
    if (ausente) {
        nota.attr("type", "text")
        nota.val("AUSENTE")
        nota.attr("disabled", "disabled");
    } else {
        nota.attr("type", "number")
        nota.val("")
        nota.removeAttr("disabled");
    }
}

function validarParcial(nota, resultado) {
    var regex = /^[0-9]+$/;
    if (nota.val() != "AUSENTE") {
        if (nota.val() != "") {
            if (regex.test(nota.val())) {
                if (nota.val() > 0 && nota.val() <= 10) {
                    if ($(nota).hasClass("invalido")) {
                        $(nota).toggleClass("invalido");
                        $(nota).toggleClass("valido");
                    } else if (!$(nota).hasClass("valido")) {
                        $(nota).addClass("valido")
                    }
                    resultado.text("")
                    return true;
                } else {
                    if ($(nota).hasClass("valido")) {
                        $(nota).toggleClass("invalido");
                        $(nota).toggleClass("valido");
                    } else if (!$(nota).hasClass("invalido")) {
                        $(nota).addClass("invalido")
                    }
                    resultado.text("El valor de la nota no entra en el rango de 1 a 10")
                    return false;
                }
            } else {
                if ($(nota).hasClass("valido")) {
                    $(nota).toggleClass("invalido");
                    $(nota).toggleClass("valido");
                } else if (!$(nota).hasClass("invalido")) {
                    $(nota).addClass("invalido")
                }
                resultado.text("El campo 1er Parcial solo admite números")
                return false;
            }
        } else {
            if ($(nota).hasClass("valido")) {
                $(nota).toggleClass("invalido");
                $(nota).toggleClass("valido");
            } else if (!$(nota).hasClass("invalido")) {
                $(nota).addClass("invalido")
            }
            resultado.text("El campo 1er Parcial no puede estar vacío")
            return false;
        }
    } else {
        return true;
    }
}