$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "listado.php",
        success: function (data) {
            $('body').html(data);
            $('.filas').click(function (e) {
                var id = $(this)[0].getElementsByTagName('td')[0].innerHTML
                var nombre = $(this)[0].getElementsByTagName('td')[1].innerHTML
                $.ajax({
                    type: "POST",
                    url: `presentaciones.php?id=${id}&nombre=${nombre}`,
                    success: function (data) {
                        $('body').html(data);
                        $('#editar').click(function (e) {
                            e.preventDefault();
                            $.ajax({
                                type: "POST",
                                url: $(this).attr("href"),
                                success: function (data) {
                                    $('body').html(data);
                                    $('#formEditar').on('submit', function (event) {
                                        event.preventDefault();
                                        var form = $(this);
                                        var url = form.attr('action');

                                        $.ajax({
                                            type: "POST",
                                            url: url,
                                            data: form.serialize(), // serializes the form's elements.
                                            success: function (data) {
                                                $('body').html(data);
                                            }
                                        });
                                    });
                                }
                            });

                        });
                        $('#nuevo').click(function (e) {
                            e.preventDefault();
                            $.ajax({
                                type: "POST",
                                url: $(this).attr("href"),
                                success: function (data) {
                                    $('body').html(data);
                                    $('#formNuevo').on('submit', function (event) {
                                        event.preventDefault();
                                        var form = $(this);
                                        var url = form.attr('action');

                                        $.ajax({
                                            type: "POST",
                                            url: url,
                                            data: form.serialize(), // serializes the form's elements.
                                            success: function (data) {
                                                $('body').html(data);
                                            }
                                        });
                                    });
                                }
                            });

                        });
                    }
                });
            });
        }
    });

});