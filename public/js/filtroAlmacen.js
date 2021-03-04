window.addEventListener('load', function() {
    fetch('http://localhost:3001/api/products/categorias')
    .then(function(response) {
        return response.json()
    })
    .then(function(information) {
        for (let i = 0; i < information.data.length; i++) {
            document.querySelector('form').innerHTML += "<div class=" + information.data[i].categoria + "><a class=categoria href=/products/almacen/" + information.data[i].id + ">-" + information.data[i].categoria + "</a><br></div>";
            fetch('http://localhost:3001/api/products/subcategorias/' + information.data[i].id)
            .then(function(response) {
                return response.json()
            })
            .then(function(informacion) {
                for (let j = 0; j < informacion.length; j++) {
                    if (informacion[j].sub_categoria != "") {
                        document.querySelector("div ." + information.data[i].categoria).innerHTML += "<a class=subcategoria href=/products/almacen/" + information.data[i].id + "/" + informacion[j].id + ">-" + informacion[j].sub_categoria + "</a><br>";
                    }
                }
            })
            .catch(function(error) {
            console.log("Error: " + error);
            })
        }
    })
})
