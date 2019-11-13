$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "fillCar.php",
        success: function (data) {
            $('#seleccionCar').html(data);
        }
    });
    $('#seleccionCar').change(function () { 
        if ($('#seleccionCar').val()>0) {
            $('#seleccionMat').attr("disabled", false);
            dataString= 'key='+$('#seleccionCar').val()
            console.log(dataString)
            $.ajax({
                type: "POST",
                url: "fillMat.php",
                data: dataString,
                success: function (data) {
                    console.log(data)
                    $('#seleccionMat').html(data);
                }
            });
        } else {
            $('#seleccionMat').attr("disabled", true); 
            $('#seleccionMat').empty();  
        }
        
    });
});