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
        $post = $_POST;
        $suma = 0;
        foreach ($post as $key => $value) {
            $suma = $suma + $value;
        }
        echo $suma
    ?>
</body>
</html>