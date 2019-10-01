$(document).ready(function(){
    
    $("#reestablecer").on("click",function(){
        reestablecer();
    })
    asignarVisibilidad();
})

function reestablecer(){
    $(".visible").show(1000);
}

function asignarVisibilidad(){
    for (let i = 0; i < $(".visible").length; i++) {
        $(".visible").eq(i).mouseover(function(){
            $(".visible").eq(i).hide(1000);
        })
    }
}