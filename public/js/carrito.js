    window.addEventListener('load', function() {
        let inputqty = document.querySelector('form input#quantity');
        let form = inputqty.parentElement.querySelector('form');
        
        inputqty.addEventListener('change', function() {
            form.submit();
        });
    })
    