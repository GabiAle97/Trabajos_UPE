<?php
    include __DIR__ . '/./conn.php';
    $nombre = $_GET['nombre'];
    $id = $_GET['id'];
    $query = $conn->query('SELECT * FROM presentaciones WHERE ID_Producto = '.$id);
    function fill()
    {
        global $query;
        while ($row = $query->fetch()) {
            echo '<tr><td>'.$row['Descripcion']."</td><td>".$row['StockActual'].'</td></tr>';
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
    <a class="btn btn-info" href="consigna1.php">Volver</a>
</div>