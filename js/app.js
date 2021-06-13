document.addEventListener('DOMContentLoaded', function(){
    nav();
});
// GUARDAR MENSAJES

function save(){

    const mensaje = document.getElementById('message');
    
    $.ajax({
        type: "POST",
        url: "save.php",
        dataType: "json",
        data: {
            mns: mensaje.value,
            cons: 1,
        }
    }).done(
        console.log("Done"),
        cons= 0,
        mensaje.value = ""
    );

    console.log(mensaje.value);

}
$(document).ready(function() {
    var reload =  setInterval( function(){
  $('#reload').load('chat.php');//actualizas el div
 }, 1000 );
});


// OCULTAR CONETIDO

function select(e){
    const select = document.querySelector(".selec");

    select.classList.remove("selec");
    e.classList.add("selec");
    nav();

}

function nav(){
    var inicio = document.getElementById("ini");
    var iniciar = document.getElementById("ses");

    if(inicio.classList.value == "selec"){
        document.getElementById("chat").hidden = false;
        document.getElementById("sesion").hidden = true;
    }
    else if(iniciar.classList.value == "selec"){
        document.getElementById("chat").hidden = true;
        document.getElementById("sesion").hidden = false;
    }
        
}

// INICIO/REGISTRO DE SESION

function registrar(){
    const usuario = document.getElementById('name');
    const pass = document.getElementById('pass');
    
    $.ajax({
        type: "POST",
        url: "save.php",
        dataType: "json",
        data: {
            usuario: mensaje.value,
            cont: pass.value,
        }
    }).done(
        console.log("Done"),

    );
}