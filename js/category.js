
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
let categoria = queryString.get("categoria");
let section = document.querySelector('.productoscategoria');
let titulo_cat = document.querySelector('.titulodecat')

fetch ('https://dummyjson.com/products/category/' + categoria) 
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        titulo_cat.innerHTML = `${categoria}`
        for (i=0; i < data.products.length; i++){
            section.innerHTML += `
            <article class="producto">
                <a href="./product.html?id=${data.products[i].id}">

                    <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">

                </a>
                <h3>${data.products[i].title}</h3>
                <p>${data.products[i].description}</p>
                <p>Precio: ${data.products[i].price}</p>
                <div class="verdetalle">
                    <h3 ><a href="./product.html?id=${data.products[i].id}">Ver Detalles</a></h3>
                </div>
            </article>
            `
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })

