let formBuscador = document.querySelector(".buscador");
let campoBuscar = document.querySelector(".campoBuscar");
let errorBuscador = document.querySelector(".errorBuscador");

formBuscador.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoBuscar.value ===a  "") {
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

let formLogin = document.querySelector(".formulario-registro");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#contraseña");
let errorLogin = document.querySelector(".errorLogin");

formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let email = inputEmail.value;
    let password = inputPassword.value;

    if (email == "") {
        errorLogin.innerText = "El email es obligatorio";
        return;
    }

    if (password == "") {
        errorLogin.innerText = "La contraseña es obligatoria";
        return;
    }

    if (password.length < 6) {
        errorLogin.innerText = "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    localStorage.setItem("email", email);
    window.location.href = "./index.html";
});