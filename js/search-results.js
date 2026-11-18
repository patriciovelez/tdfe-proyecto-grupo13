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

    // punto 10 (Pato)

    // texto resultados de busqueda para : elTerminoPuestoEnElBuscador
    // leer el termino de la URL

    const querystring = location.search; // retorna la info en formato de cadena de texto
    const parametros = new URLSearchParams(querystring); // el objeto URLSearchParams define metodos utiles para trabajar con los paramteros de una URL
    const valorUsuario = parametros.get("busqueda"); // el metodo .get() permite obtener el valor de una clave dentro de la query string.


    let resultadosDeBusqueda = document.querySelector('.resultadosDeBusqueda');
    
    resultadosDeBusqueda.innerText = `Resultados de busqueda para: "${valorUsuario}" `;
