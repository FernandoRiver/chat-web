<?php
session_start();
@include 'conexion.php';

    // Consulta
$consulta = "select name, mensaje from usuario 
inner join mensaje on mensaje.usuario_id = usuario.id order by mensaje.id desc";

$query_usuario = mysqli_query($db,$consulta);

    $cont = 15;
    while($cont){
        $res = mysqli_fetch_assoc($query_usuario);

?>

        <span ><?php echo $res["name"]; ?>: </span>
        <span><?php echo $res["mensaje"]; ?></span>

<?php
        echo "</br>";
        $cont--;
}
?>
