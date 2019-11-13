<?php
    $idPres = $_GET['idPres'];
    $idProd = $_GET['idProd'];
    $nombre = $_GET['nombre'];
    $descripcion = $_GET['descripcion'];
    $stock = $_GET['stock'];
?>

<div class="col-md-6 mx-auto">
    <div class="card card-signin my-5">
        <div class="card-body">
            <h5 class="card-title text-center">Nueva Presentación para <?php echo $nombre ?></h5>
            <form class="form-signin" id="formEditar" action="editar.php" method="POST">
            <input type="hidden" name="presentacion[ID_Presentacion]" value=<?php echo $idPres ?>>
            <input type="hidden" name="presentacion[ID_Producto]" value=<?php echo $idProd ?>>
                <div class="form-label-group">
                    <input type="text" id="nombre" name="presentacion[Descripcion]" value="<?php echo $descripcion ?>" class="form-control"
                        placeholder="Descripción de la presentación"  required
                        autofocus>
                    <label for="nombre">Descripción de la presentación</label>
                </div>
                <div class="form-label-group">
                    <input type="number" id="password" name="presentacion[stock]" value=<?php echo $stock ?> class="form-control"
                        placeholder="Ingrese stock actual"  required>
                    <label for="password">Ingrese stock actual</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                    value="Register account">Registrar</button>
            </form>
            
            <div class="d-flex justify-content-center">
                <a class="btn btn-info" href="consigna4.html">Volver</a>
            </div>
        </div>
    </div>
</div>