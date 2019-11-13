<?php
    include __DIR__ . '/./conn.php';
    
    $query = $conn->query('SELECT * FROM productos');
    function fill()
    {
        global $query;
        while ($row = $query->fetch()) {
            echo '<tr class="filas"><td>'.$row['ID_Producto']."</td><td>".$row['Descripcion'].'</td></tr>';
        }
    }
?>

<div class="container">
    <table class="table table-hover table-bordered table-striped text-center">
        <thead class="thead-default">
            <tr>
                <th>ID</th>
                <th>Descripcion</th>
            </tr>
        </thead>
        <tbody>
            <?php
                fill();
            ?>
        </tbody>
    </table>
</div>