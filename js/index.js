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

let listaCategorias = document.querySelector(".listaCategorias");

fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let categorias = "";

        for (let i = 0; i < data.length; i++) {
            categorias += (algo)
        }

        listaCategorias.innerHTML = categorias;
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });