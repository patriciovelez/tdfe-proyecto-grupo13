const formularioRegistro = document.querySelector(".formulario-registro")


formularioRegistro.addEventListener("submit", function (evento) {
    //frena el envio del formulario; lo vamos a permitir solo si todo esta bien
    evento.preventDefault();

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value ; // el .value es para invocar el valor que puso el usuario
    const repetirPassword = document.querySelector('.repetirPassword').value ; // el .value es para invocar el valor que puso el usuario

    // email obligatorio
    if (email === "") {
        alert("El email no puede estar vacio"); 
        return; // es para que no se envie
    }

    // contraseña obligatoria
    if (password === "") {
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

let formBuscador = document.querySelector(".buscador");
let campoBuscar = document.querySelector(".campoBuscar");
let errorBuscador = document.querySelector(".errorBuscador");

formBuscador.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoBuscar.value == "") {
        errorBuscador.innerText = "El campo de búsqueda no puede estar vacío";
    } else if (campoBuscar.value.length < 3) {
        errorBuscador.innerText = "El término buscado debe tener al menos 3 caracteres";
    } else {
        this.submit();
    }
});

let listaCategorias = document.querySelector(".listaCategorias");

fetch("https://dummyjson.com/products/category-list")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let categorias = "";

        for (let i = 0; i < data.length; i++) {
            categorias += `<li class="lista">
                               <a href="./category.html?categoria=${data[i]}">${data[i]}</a>
                           </li>`;
        }

        listaCategorias.innerHTML = categorias;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });
