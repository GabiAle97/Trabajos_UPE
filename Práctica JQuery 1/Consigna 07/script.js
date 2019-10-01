window.onload = function(){
    var input = $("#input");
    input.keypress(function(e){
        console.log(e.key);
    })
}