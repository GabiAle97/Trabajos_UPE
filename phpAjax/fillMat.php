<?php
    $key= $_POST['key'];
    include __DIR__ . '/./conn.php';
        
    $query = $conn->query('SELECT * FROM materias WHERE materias.ID_Carrera ='.$key);
    function fill()
    {
        global $query;
        while ($row = $query->fetch()) {
            echo '<option value ="'.$row['ID'].'">'.$row['nombre'].'</option>';
        }
    }
?>

<?php fill() ?>