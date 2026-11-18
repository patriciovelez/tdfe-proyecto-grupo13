const formularioRegistro = document.querySelector(".formulario-registro")


formularioRegistro.addEventListener("submit", function (evento) {
    //frena el envio del formulario; lo vamos a permitir solo si todo esta bien
    evento.preventDefault();

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value ; // el .value es para invocar el valor que puso el usuario
    const repetirPassword = document.querySelector('.repetirPassword').value ; // el .value es para invocar el valor que puso el usuario

    // email obligatorio
    if (email == "") {
        alert("El email no puede estar vacio"); 
        return; // es para que no se envie
    }

    // contraseña obligatoria
    if (password == "") {
        alert("La contraseña es obligatoria");
        return;
    }

    // validar que contraseña tenga al menos 6 caracteres

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    // validar que las contraseñas coincidan
    if (password !== repetirPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // si todo esta bien: redirigir al login

    window.location.href = "./login.html"

});

