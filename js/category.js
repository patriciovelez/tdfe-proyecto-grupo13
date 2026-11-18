let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
let section = document.querySelector(".productoscategoria")

fetch(`https://dummyjson.com/products/category/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });