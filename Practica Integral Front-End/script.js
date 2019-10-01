$(document).ready(function () {
    $("#fecha").attr("max", establecerMaxDate());
    $("#fecha").change(function () {
        $("#horaInicio").attr("max", establecerMaxHourInicio());
    })
    $("#horaInicio").change(function () {
        $("#horaFin").attr("min", establecerMinHourFin());
        $("#horaFin").attr("max", establecerMaxHour());
    })
    $("#grupos").change(function(){
        console.log("cambio en los grupos");
        var seleccion = $("#grupos").val();
        if (seleccion == "Seleccionar grupo"){
            $("#equipos").attr("disabled","")
            $("#equipos").empty()
        }else if(seleccion == "FAC"){
            console.log("seleccioné FAC")
            $("#equipos").removeAttr("disabled");
            $("#equipos").empty()
            var optDef = $("<option>",{
                "id": "default"
            });
            var opt1 = $("<option>",{
                "id": "sony1"
            });
            var opt2 = $("<option>",{
                "id": "sony2"
            });
            var opt3 = $("<option>",{
                "id": "sony3"
            });
            $("#equipos").append(optDef, opt1, opt2, opt3);
            $("#default").text("Seleccionar equipo")
            $("#sony1").text("Sony FAC1");
            $("#sony2").text("Sony FAC2");
            $("#sony3").text("Sony FAC3");
        }else{
            console.log("seleccioné HADZ")
            $("#equipos").removeAttr("disabled");
            $("#equipos").empty()
            var optDef = $("<option>",{
                "id": "default"
            });
            var opt1 = $("<option>",{
                "id": "motorola"
            });
            var opt2 = $("<option>",{
                "id": "siemens"
            });
            $("#equipos").append(optDef, opt1, opt2);
            $("#default").text("Seleccionar equipo")
            $("#motorola").text("Motorola HADZ");
            $("#siemens").text("Siemens HADZ");
        }
    })
    $("#enviar").click(function (event) {
        event.preventDefault();
        if (validarGrupo() && validarEquipo() && validarFecha() && validarHoraInicio() && validarHoraFin() && validarResultados()) {
            alert("Revisión registrada correctamente")
        }
    })
})



function validarGrupo() {
    var seleccion = $("#grupos").val();
    console.log(seleccion)
    if (seleccion != "") {
        if (seleccion != "Seleccionar grupo") {
            return true;
        } else {
            alert("Debe seleccionar un grupo");
            return false;
        }
    } else {
        alert("El campo de seleccion está vacío")
        return false;
    }
}

function validarEquipo() {
    var seleccion = $("#equipos").val();
    if (seleccion != "") {
        if (seleccion != "Seleccionar equipo") {
            return true;
        } else {
            alert("Debe seleccionar un equipo");
            return false;
        }
    } else {
        alert("El campo de seleccion está vacío")
        return false;
    }
}

function validarHoraInicio() {
    var horaActual = establecerMaxHour().split(":");
    var horasA = parseInt(horaActual[0]);
    var minutosA = parseInt(horaActual[1]);
    var horaIngresada = $("#horaInicio").val().split(":");
    var horasI = parseInt(horaIngresada[0]);
    var minutosI = parseInt(horaIngresada[1]);
    var regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/

    console.log("corroborando hora inicio")
    console.log(`hora ingresada: ${$("#horaInicio").val()}`)
    console.log(`hora actual: ${establecerMaxHour()}`);

    if ($("#horaInicio").val() != "") {
        console.log("hora inicio no es undefined")
        if (regex.test($("#horaInicio").val())) {
            console.log("formato OK")
            if (horasI > horasA) {
                console.log("hora inicio mayor a hora actual")
                alert("La hora de inicio de revisión sobrepasa la hora actual")
                return false;
            } else if (horasI == horasA) {
                console.log("hora inicio igual a hora actual")
                if (minutosI > minutosA) {
                    console.log("minutos ingresados mayor a minuto actual")
                    alert("La hora de inicio de revisión sobrepasa la hora actual")
                    return false;
                } else if (minutosI > minutosA - 10 && minutosI <= minutosA) {
                    console.log("hora menor a diez minutos antes de lla hora actual")
                    alert("La hora de inicio de revisión no puede ser mayor a diez minutos antes de la hora actual")
                } else {
                    console.log("ingreso valido")
                    return true;
                }
            } else {
                console.log("ingreso valido")
                return true;
            }
        } else {
            alert("El formato de la hora de inicio no coincide con el formato solicitado")
            return false
        }
    } else {
        alert("El campo de hora de inicio está vacío")
        console.log("hora inicio no definida")
        return false
    }


}

function validarHoraFin() {
    var horaMinima = establecerMinHourFin().split(":");
    var horasM = parseInt(horaMinima[0]);
    var minutosM = parseInt(horaMinima[1]);
    var horaActual = establecerMaxHour().split(":");
    var horasA = parseInt(horaActual[0]);
    var minutosA = parseInt(horaActual[1]);
    var horaFin = $("#horaFin").val().split(":");
    var horasF = parseInt(horaFin[0]);
    var minutosF = parseInt(horaFin[1]);
    var regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/

    console.log("corroborando hora fin")
    console.log(`hora ingresada: ${$("#horaFin").val()}`)
    console.log(`hora Minima: ${establecerMinHourFin()}`);

    if ($("#horaFin").val() != "") {
        console.log("hora fin no es undefined")
        if (regex.test($("#horaFin").val())) {
            console.log("formato OK")
            if (horasF > horasA) {
                console.log("hora fin mayor a hora actual")
                alert("La hora de fin de revisión sobrepasa la hora actual")
                return false;
            } else if (horasF == horasA) {
                console.log("hora fin igual a hora actual")
                if (minutosF > minutosA) {
                    console.log("minutos ingresados mayor a minuto actual")
                    alert("La hora de fin de revisión sobrepasa la hora actual")
                    return false;
                } else {
                    console.log("ingreso valido")
                    return true;
                }
            } else if (horasF == horasM && minutosF < minutosM) {
                console.log("hora no mayor a diez minutos despues de la hora inicio")
                alert("la hora de fin de revisión debe ser por lo menos 10 minutos superior a la hora de inicio de la revisión")
                return false;
            } else {
                console.log("ingreso valido")
                return true;
            }
        } else {
            console.log("no hay formato correcto")
            alert("El formato de la hora de fin no coincide con el formato solicitado")
            return false;
        }
    } else {
        alert("El campo de hora de inicio está vacío")
        console.log("hora fin no definida")
        return false;
    }
}

function validarResultados() {
    var resultados = $("#resultados").val().split(" ");
    var cantPalabras = resultados.length;
    if (cantPalabras < 5) {
        alert("La casilla 'Resultados' debe tener como mínimo 5 palabras")
        return false;
    } else {
        return true;
    }
}

function validarFecha() {
    var fechaIngresada = $("#fecha").val().split("-");
    var fechaActual = establecerMaxDate().split("-");
    var diaIngresado = fechaIngresada[2]
    var mesIngresado = fechaIngresada[1]
    var anioIngresado = fechaIngresada[0]
    var diaActual = fechaActual[2]
    var mesActual = fechaActual[1]
    var anioActual = fechaActual[0]
    var regex = /^\d{2,4}\-\d{1,2}\-\d{1,2}$/
    if ($("#fecha").val() != "") {
        if (regex.test($("#fecha").val())) {
            if (diaIngresado > diaActual) {
                if (mesIngresado >= mesActual) {
                    if (anioIngresado >= anioActual) {
                        alert("La fecha ingresada sobrepasa la fecha actual. Por favor ingrese una fecha válida")
                        return false;

                    } else {
                        return true;
                    }
                } else {
                    if (anioIngresado > anioActual) {
                        alert("La fecha ingresada sobrepasa la fecha actual. Por favor ingrese una fecha válida")
                        return false;
                    } else {
                        return true;
                    }
                }
            } else {
                if (mesIngresado > mesActual) {
                    if (anioIngresado >= anioActual) {
                        alert("La fecha ingresada sobrepasa la fecha actual. Por favor ingrese una fecha válida")
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    if (anioIngresado > anioActual) {
                        alert("La fecha ingresada sobrepasa la fecha actual. Por favor ingrese una fecha válida")
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        } else {
            alert("La fecha ingresada no cumple con el formato solicitado")
            return false;
        }
    } else {
        alert("El campo de fecha está vacío");
        return false;
    }
}

function establecerMaxDate() {
    var fecha = new Date()
    var dia = addZero(fecha.getDate())
    var mes = addZero(fecha.getMonth() + 1);
    var anio = addZero(fecha.getFullYear())
    var actualDate = `${anio}-${mes}-${dia}`

    return actualDate;

}

function establecerMaxHour() {
    if (establecerMaxDate() == $("#fecha").val()) {
        var fecha = new Date()
        var horas = addZero(fecha.getHours())
        var minutos = addZero(fecha.getMinutes())
        var actualHour = `${horas}:${minutos}`
        return actualHour;
    } else {
        return "";
    }
}

function establecerMaxHourInicio() {
    if (establecerMaxDate() == $("#fecha").val()) {
        var hora = establecerMaxHour().split(":");
        hora[1] = parseInt(hora[1]);
        hora[0] = parseInt(hora[0]);
        if (hora[1] < 10) {

            hora[1] = hora[1] + 50;
            if (hora[0] == 0) {

                hora[0] = 23;
            } else {

                hora[0]--;
            }
        } else {

            hora[1] = hora[1] - 10;
        }
        hora[1] = addZero(hora[1])
        hora[0] = addZero(hora[0])
        var horaMinima = hora.join(":");
        return horaMinima;
    } else {
        return "";
    }



}

function establecerMinHourFin() {
    var hora = $("#horaInicio").val().split(":");
    hora[1] = parseInt(hora[1]);
    hora[0] = parseInt(hora[0]);
    if (hora[1] >= 50) {
        hora[1] = hora[1] - 50;
        if (hora[0] == 23) {
            hora[0] = 0;
        } else {
            hora[0]++;
        }
    } else {
        hora[1] = hora[1] + 10;
    }
    hora[1] = addZero(hora[1])
    hora[0] = addZero(hora[0])
    var horaMinima = hora.join(":");
    return horaMinima;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}