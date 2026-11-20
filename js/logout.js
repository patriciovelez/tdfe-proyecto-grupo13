document.querySelector(".saludo").addEventListener("click", function (evento) {
    evento.preventDefault();
    localStorage.removeItem("email");
    document.querySelector(".saludo").innerHTML = "";
    document.querySelector(".menuingreso").style.display = "";
    document.querySelector(".menuregistro").style.display = "";
});