
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

    .then(function(producto) {

        console.log(producto);
        imagen.innerHTML = `
        
        `
    });