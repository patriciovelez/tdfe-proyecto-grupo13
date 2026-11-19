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

let seccionSmartphones = document.querySelector(".productosrandom");

fetch("https://dummyjson.com/products/category/smartphones")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let productos = data.products;
        let smartphones = "";

        for (let i = 0; i < productos.length; i++) {
            smartphones += `<article class="producto">
                                <img src="${productos[i].images[0]}" alt="${productos[i].title}">
                                <h3>${productos[i].title}</h3>
                                <p>${productos[i].description}</p>
                                <p>$${productos[i].price}</p>
                                <div class="verdetalle">
                                    <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
                                </div>
                            </article>`;
        }

        seccionSmartphones.innerHTML = smartphones;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });

let seccionSports = document.querySelector(".productosmasvendidos");

fetch("https://dummyjson.com/products/category/sports-accessories")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let productos = data.products;
        let sports = "";

        for (let i = 0; i < productos.length; i++) {
            sports += `<article class="producto">
                           <img src="${productos[i].images[0]}" alt="${productos[i].title}">
                           <h3>${productos[i].title}</h3>
                           <p>${productos[i].description}</p>
                           <p>$${productos[i].price}</p>
                           <div class="verdetalle">
                               <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
                           </div>
                       </article>`;
        }

        seccionSports.innerHTML = sports;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });