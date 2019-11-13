<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        $intCant = 0;
        $contador = 0;
        while ($contador < 3) {
            miFuncion();
            $contador++;
        }
        function miFuncion()
        {
            global $intCant;
            echo $intCant . "<br>";
            $intCant++;
        }
    ?>
</body>
</html>