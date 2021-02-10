window.addEventListener('load', function(){
    console.log("hola")
    let burger = document.querySelector(".icon-burger");
    var links = document.querySelector(".links");

    burger.addEventListener('click', function(){
        links.classList.toggle("show");

    });
});