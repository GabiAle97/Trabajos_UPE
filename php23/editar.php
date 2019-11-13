<?php
    include __DIR__ . '/./conn.php';
    $form = $_POST['presentacion'];
    $query = $conn->query('UPDATE presentaciones SET ID_Producto = '.$form['ID_Producto'].', Descripcion = "'.$form['Descripcion'].'", StockActual = '.$form['stock'].' WHERE presentaciones.ID_Presentacion = '.$form['ID_Presentacion']);
?>

<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <?php if (!$query) :?>
        <div class="alert alert-warning d-flex justify-content-center" role="alert">
            <strong>No se pudo completar el registro&nbsp;</strong> Vuelve a intentarlo más tarde.
        </div>
        <div class="d-flex justify-content-center">
            <a href="consigna1.php" class="btn btn-info">Volver</a>
        </div>
    <?php else :?>
        <div class="alert alert-success d-flex justify-content-center" role="alert">
            <strong>Registro completado!&nbsp;</strong>
        </div>
        <div class="d-flex justify-content-center">
            <a href="consigna1.php" class="btn btn-info">Volver</a>
        </div>
    <?php endif; ?>
</body>

</html>