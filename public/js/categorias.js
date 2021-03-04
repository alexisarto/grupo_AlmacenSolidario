window.addEventListener('load', function() {
    fetch('http://localhost:3001/api/products/categorias')
    .then(function(response) {
        return response.json()
    })
    .then(function(information) {
        for (let i = 0; i < information.data.length; i++) {
            document.getElementById('select-categoria').innerHTML += "<option value=" + information.data[i].id + ">" + information.data[i].categoria + "</option>";
        }
    })
    .catch(function(error) {
    console.log("Error: " + error);
    })
})