<?php
    include __DIR__ . '/./conn.php';
    $nombre = $_GET['nombre'];
    $id = $_GET['id'];
    $query = $conn->query('SELECT * FROM presentaciones WHERE ID_Producto = '.$id);
    function fill()
    {
        global $query;
        global $nombre;
        global $id;
        while ($row = $query->fetch()) {
            echo '<tr><td>'.$row['Descripcion']."</td><td>".$row['StockActual'].'</td><td><a href="consigna4.php?idPres='.$id.
                                                                                                                            '&idProd='.$row['ID_Presentacion'].
                                                                                                                            '&nombre='.$nombre.
                                                                                                                            '&descripcion='.$row['Descripcion'].
                                                                                                                            '&stock='.$row['StockActual'].'">Editar</td></tr>';
        }
    }
?>

<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <!-- Required meta tags -->
    <script src="script.js"></script>
    <link rel="stylesheet" href="clases.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
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
            <a class="btn btn-info" href=<?php echo "consigna3.php?id=".$id."&nombre=".$nombre ?>>Registrar nueva presentación</a>
        </div>
  </body>
</html>