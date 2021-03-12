window.addEventListener('load', function() {
    var form = document.getElementById('eliminar');
    form.addEventListener('submit', function(event) {
    // si es false entonces que no haga el submit
    if (!confirm('Realmente desea eliminar?')) {
        event.preventDefault();
    }
    }, false);
})();
