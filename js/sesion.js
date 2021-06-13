function sesion(e){
    const opcion = e.classList.value;


    if(opcion == "inicio"){
        document.getElementById("iniciar").hidden = false;
        document.getElementById("registrar").hidden = true;
    }
    else if(opcion == "registro"){
        document.getElementById("iniciar").hidden = true;
        document.getElementById("registrar").hidden = false;
    }
}

function registrar(e){
    const user = document.getElementById("name");
    const cont = document.getElementById("cont");
    const cont_con = document.getElementById("cont-con");

    // console.log(user.value);
    if(user.value == "" || cont.value == "" || cont_con == ""){
        alert("Todos los campos necesario");
        
    }
    else if(cont.value == cont_con.value){
        $.ajax({
            type: "POST",
            url: "register.php",
            dataType: "json",
            data: {
                user: user.value,
                pass: cont.value,
                op: 1
            }
        }).done(
            user.value= "",
            cont.value = "",
            cont_con.value = "",
            window.location.href = "index.html"
        );
    }
    else{
        alert("Las contraseñas no coinciden");
    }
}
function iniciar(){
    const user = document.getElementById("user");
    const cont = document.getElementById("pass");

    // console.log(user.value);
    if(user.value == "" || cont.value == ""){
        alert("Todos los campos necesario");
        
    }
    else{
        console.log(user.value);
        console.log(cont.value);
        $.ajax({
            type: "POST",
            url: "register.php",
            dataType: "json",
            data: {
                user: user.value,
                pass: cont.value,
                op: 2
            }
        }).done(
            user.value= "",
            cont.value = "",
            window.location.href = "index.html"
        );
    }
}

function cerrar(){
    $.ajax({
        type: "POST",
        url: "login.php",
        data: {
            op: 1
        }
    }).done(
        window.location.href = "index.html"
    );
}