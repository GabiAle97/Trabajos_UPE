window.onload = function(){
    var boton = $("#removedor");
    boton.click(function(){
        removerFilasPares();
    })
}

function removerFilasPares(){
    var filas = $("#tabla tr:odd");
    filas.remove();
}