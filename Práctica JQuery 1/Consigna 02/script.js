function myFunction(funcion) {
    var num1 = parseFloat($("#sumar1").val());
    var num2 = parseFloat($("#sumar2").val());
    if (isNaN(num1)){
        mensaje("El primer campo no puede estar vacío");
    }
    else if (num1 % 1 != 0){
        mensaje("Solo se permiten números enteros");
    }
    else{
        switch (funcion) {
            case "sumar":
                if (isNaN(num2)){
                    mensaje("No puede haber campos vacíos");
                }
                else if (num2 % 1 != 0){
                    mensaje("Solo se permiten números enteros");
                }
                else{
                    mensaje(`La suma de ${num1} y ${num2} es ${num1+num2}`);
                }
                break;
            case "restar": 
                if (isNaN(num2)){
                    mensaje("No puede haber campos vacíos");
                }
                else if (num2 % 1 != 0){
                    mensaje("Solo se permiten números enteros");
                }
                else{
                    mensaje(`La resta entre ${num1} y ${num2} es ${num1-num2}`);
                }
                break;
            case "multiplicar":
                if (isNaN(num2)){
                    mensaje("No puede haber campos vacíos");
                }
                else if (num2 % 1 != 0){
                    mensaje("Solo se permiten números enteros");
                }
                else{ 
                    mensaje(`${num1} multiplicado por ${num2} es ${num1*num2}`);
                }
                break;
            case "dividir": 
                if (isNaN(num2)){
                    mensaje("No puede haber campos vacíos");
                }
                else if (num2 % 1 != 0){
                    mensaje("Solo se permiten números enteros");
                }
                else if(num2 == 0){
                    mensaje(`No es posible realizar una division por 0 (cero)`);
                }else{
                    mensaje(`${num1} divido por ${num2} es ${num1/num2}`);
                }
                break;
            case "raiz": 
                if(num1 < 0){
                    mensaje(`No es posible realizar una raiz cuadrada de un numero negativo`);
                }
                else if (isNaN(num2)){
                    mensaje("No puede haber campos vacíos");
                }
                else if (num2 % 1 != 0){
                    mensaje("Solo se permiten números enteros");
                }
                else{
                    mensaje(`La raíz cuadrada de ${num1} (solo se tiene en cuenta el primer numero) es ${Math.sqrt(num1)}`);
                }
                break;
            case "seno": 
                mensaje(`El seno de ${num1} (solo se tiene en cuenta el primer numero) es ${Math.sin(num1)}`);
                break;
            case "coseno": 
                mensaje(`El coseno de ${num1} (solo se tiene en cuenta el primer numero) es ${Math.cos(num1)}`);
                break;
            case "ln": 
                if(num1 <= 0){
                    mensaje(`No es posible calcular el logaritmo natural de un numero menor o igual a 0 (cero)`);
                }else{
                    mensaje(`El logaritmo natural de ${num1} (solo se tiene en cuenta el primer numero) es ${Math.log(num1)}`);
                }
                break;
            default:
                mensaje(`Hubo un error al procesar la operación`);
                break;
        }
    }
}

function mensaje(texto){
    $("#parrafo").text(texto)
}

$(document).ready(function(){
    $("#Sumar").click(function(){
        myFunction("sumar");
    });
    $("#Restar").click(function(){
        myFunction("restar");
    });
    $("#Multiplicar").click(function(){
        myFunction("multiplicar");
    });
    $("#Dividir").click(function(){
        myFunction("dividir");
    });
    $("#Raiz_cuadrada").click(function(){
        myFunction("raiz");
    });
    $("#Seno").click(function(){
        myFunction("seno");
    });
    $("#Coseno").click(function(){
        myFunction("coseno");
    });
    $("#Logaritmo_natural").click(function(){
        myFunction("ln");
    });
})