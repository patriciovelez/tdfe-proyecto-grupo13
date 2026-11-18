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
let queryString = new URLSearchParams(location.search);
let id = queryString.get("id");
let imagen = document.querySelector('.relojproimg');
let nombre = document.querySelector('.nombre');
let marca = document.querySelector('.marca');
let descripcion = document.querySelector('.descripcion');
let precio = document.querySelector('.precio');
let categoria = document.querySelector('.categoria');
let stock = document.querySelector('.stock');
let tags = document.querySelector('.tags');
let listaReviews = document.querySelector('.review1');
fetch('https://dummyjson.com/products/' + id )

    .then(function(response) {

        return response.json();

    })

    .then(function(data) {

        console.log(data);
        imagen.innerHTML = `
        <img "src=${data.thumbnail}" alt="${data.title}">
        `;
        nombre.innerHTML = data.title;
        marca.innerHTML = ` Marca: ${data.brand}`;
        descripcion.innerHTML = data.description
        precio.innerHTML = `Precio: ${data.price}`;
        categoria.innerHTML = ` Categoria: <a href="./category.html? categoria=${data.category}"> ${data.category} <a/> `
        

    });
