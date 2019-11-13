$(document).ready(function () {
    update();
    function update(){ 
        $.ajax({
            type: "POST",
            url: "actualizar.php",
            success: function(data) {
                $('#hora').text(data);
            }
        });
    }
 
    setInterval(update, 10000);
    
});