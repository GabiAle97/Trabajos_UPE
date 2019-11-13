<?php
    include __DIR__ . '/./conn.php';
    $form = $_POST['presentacion'];
    $query = $conn->query('UPDATE presentaciones SET ID_Producto = '.$form['ID_Producto'].', Descripcion = "'.$form['Descripcion'].'", StockActual = '.$form['stock'].' WHERE presentaciones.ID_Presentacion = '.$form['ID_Presentacion']);
?>
<?php if (!$query) :?>
    <div class="alert alert-warning d-flex justify-content-center" role="alert">
        <strong>No se pudo completar el registro&nbsp;</strong> Vuelve a intentarlo más tarde.
    </div>
    <div class="d-flex justify-content-center">
        <a href="consigna4.html" class="btn btn-info">Volver</a>
    </div>
<?php else :?>
    <div class="alert alert-success d-flex justify-content-center" role="alert">
        <strong>Registro completado!&nbsp;</strong>
    </div>
    <div class="d-flex justify-content-center">
        <a href="consigna4.html" class="btn btn-info">Volver</a>
    </div>
<?php endif; ?>