<?php
    include __DIR__ . '/./conn.php';
    $nombre = $_GET['nombre'];
    $id = $_GET['id'];
    $query = $conn->query('SELECT * FROM presentaciones WHERE ID_Producto = '.$id);
    function fill()
    {
        global $query;
        global $id;
        global $nombre;
        while ($row = $query->fetch()) {
            echo '<tr class="filas"><td>'.$row['Descripcion']."</td><td>".$row['StockActual'].'</td><td><a id="editar" href="formEditar.php?idPres='.$id.
                                                                                                                                '&idProd='.$row['ID_Presentacion'].
                                                                                                                                '&nombre='.$nombre.
                                                                                                                                '&descripcion='.$row['Descripcion'].
                                                                                                                                '&stock='.$row['StockActual'].'">Editar</td></tr>';
        }
    }
?>


<h1 class="d-flex justify-content-center">
    <?php
    echo $nombre;
?>
</h1>
<div class="container">
    <table class="table table-hover table-bordered table-striped text-center">
        <thead class="thead-default">
            <tr>
                <th>Presentación</th>
                <th>Stock Actual</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php
                fill();
            ?>
        </tbody>
    </table>
</div>

<div class="d-flex justify-content-center">
    <a class="btn btn-info" id="nuevo" href=<?php echo "formNuevo.php?id=".$id."&nombre=".$nombre ?>>Registrar nueva
        presentación</a>
</div>
<div class="d-flex justify-content-center">
    <a class="btn btn-info" href="consigna4.html">Volver</a>
</div>