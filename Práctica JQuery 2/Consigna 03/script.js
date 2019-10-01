$(document).ready(function (){
    $("#evaluar").on("click",function(){
        verificar();
    })
})

function verificar(){
    var input = $("#numero").val();
    console.log(input)
    var listaNum = "1234567890";
    var error = false;
    if(!isNaN(input)){
        console.log("no es nan")
        for (let index = 0; index < input.length; index++) {
            if(input.indexOf(listaNum[index])==-1){
                console.log("no es numero")
                error = true;
                alert("Solo se permiten Numeros Enteros");
                break;
            }
        }
        if(!error){
            console.log("es numero")
            if(input>=1 && input<=923){
                alert("El numero ingresado es correcto");
            }
            else{
                alert("El numero ingresado es incorrecto. Ingrese un numero entre 1 y 923")
            }
        }
    }else{
        console.log("es nan")
        alert("El campo está vacío o no se ingresó un numero")
    }
}