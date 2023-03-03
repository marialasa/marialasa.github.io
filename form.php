<?php
    $nombre = $_POST["name"];
    $mail = $_POST["email"];
    $mensaje = $_POST["message"];

    $mensaje = "Este mensaje fue enviado por " . $nombre . ".\r\n";
    $mensaje = "Su email es: " . $mail . ".\r\n";
    $mensaje = "Mensaje: " . $mensaje . ".\r\n";
    $mensaje = "Enviado el " . date("d/m/Y", time());

    $destinatario = "ma.angeleslasa@gmail.com";
    $asunto = "Contacto desde marialasa.com";

    mail($destinatario, $asunto, utf8_decode($mensaje), $header);

    header("Location:exito.html");

    ?>
