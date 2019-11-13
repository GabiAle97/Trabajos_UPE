<?php
    include __DIR__ . '/./conn.php';
        
    $query = $conn->query('SELECT * FROM carreras');
    function fill()
    {
        global $query;
        while ($row = $query->fetch()) {
            echo '<option value ="'.$row['ID'].'">'.$row['nombre'].'</option>';
        }
    }
?>
<option value="0">Seleccione una carrera</option>
<?php fill() ?>