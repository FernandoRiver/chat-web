<?php
session_start();

@include 'conexion.php';

// Enviar mensaje
$mensaje = $_POST["mns"];
$id = $_SESSION["id"];
if($_POST['cons'] == 1 && $_POST["mns"] != null){
    $consulta = "insert into mensaje(mensaje, usuario_id) values 
                ('$mensaje','$id')";

    $query = mysqli_query($db,$consulta);
    unset($_POST["mensaje"]);
    unset($mensaje);
}