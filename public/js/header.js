window.addEventListener('load', function(){
    let burger = document.querySelector(".icon-burger");
    var links = document.querySelector(".links");

    burger.addEventListener('click', function(){
        links.classList.toggle("show");

    });
});