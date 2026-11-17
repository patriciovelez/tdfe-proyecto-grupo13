let formBuscador = document.querySelector(".buscador");
let campoBuscar = document.querySelector(".campoBuscar");
let errorBuscador = document.querySelector(".errorBuscador");

formBuscador.addEventListener("submit", function(event) {
    event.preventDefault();

    if (campoBuscar.value == "") {
        errorBuscador.innerText = "El campo de búsqueda no puede estar vacío";
    } else if (campoBuscar.value.length < 3) {
        errorBuscador.innerText = "El término buscado debe tener al menos 3 daracteres";
    } else {
        this.submit();
    }
});