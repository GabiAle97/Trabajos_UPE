<?php
    date_default_timezone_set('America/Argentina/Buenos_Aires');
    $date = getdate();
    $hs = $date['hours'];
    $min = $date['minutes'];
    $sec = $date['seconds'];
    echo date('h:i:s A');
?>