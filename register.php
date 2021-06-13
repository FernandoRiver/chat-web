<?php

@include 'conexion.php';
session_start();

$opcion = $_POST["op"];
$user = $_POST["user"];
$pass = $_POST["pass"];
echo $_POST["op"];
if($opcion == 1){
    // Enviar mensaje

    $consulta = "insert into usuario(name,pass) value
                ('$user','$pass')";

    $query = mysqli_query($db,$consulta);

    $consulta = "select id from usuario where name = '$user' and pass = '$pass'";
        
    $query = mysqli_query($db,$consulta);
    
    while($res = mysqli_fetch_assoc($query)){
        $_SESSION["id"] = $res["id"];
    }
    echo $_SESSION["id"];
}
if($opcion == 2){

    // Consulta
    $consulta = "select id from usuario where name = '$user' and pass = '$pass'";
            
    $query = mysqli_query($db,$consulta);

    if($query){
        while($res = mysqli_fetch_assoc($query)){
            $_SESSION["id"] = $res["id"];
            echo "id: ".$res["id"];
        }
        echo $_SESSION["id"];
    }
    else
        echo "Error";
}
