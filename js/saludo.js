let emailGuardado = localStorage.getItem("email");
let menuLogin = document.querySelector(".menuLogin");
let menuRegistro = document.querySelector(".menuRegistro");
let saludo = document.querySelector(".saludo");

if (emailGuardado) {
    
    menuLogin.style.display = "none";
    menuRegistro.style.display = "none";


    saludo.innerHTML = `<span>Bienvenido: ${emailGuardado}</span>
                        <a href="#" class="logout">logout</a>`;

    let botonLogout = document.querySelector(".logout");

    botonLogout.addEventListener("click", function (evento) {
        evento.preventDefault();
        localStorage.removeItem("email");
        window.location.href = "./index.html";
    });
}