const formulario = document.querySelector('form.registro');
const inputs = document.querySelectorAll('.form-control');

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const regexAlfanum = /^[\w]+$/;

const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const rePassword = document.querySelector('#rePassword');

var hayError = false;

const validarFormulario = function(e) {
    document.querySelector('.invalid-form').innerHTML = "";
    switch (e.target.name) {
        case "name":
            var error = e.target.parentElement.querySelector('div.invalid-feedback');
            if (e.target.value == "") {
                nombre.style.marginBottom = "0";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.style.marginBottom = "10px";
                error.innerHTML = "El campo nombre es obligatorio";
                hayError = true;
            } else if (e.target.value.length < 2) {
                nombre.style.marginBottom = "0";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.style.marginBottom = "10px";
                error.innerHTML = 'El nombre debe tener al menos dos caracteres';
                hayError = true;
            } else {
                nombre.style.marginBottom = "20px";
                error.style.marginBottom = "0";
                error.innerHTML = "";
                hayError = false;
            }
            break;
        case "email":
            var error = e.target.parentElement.querySelector('div.invalid-feedback');
            if (e.target.value == "") {
                email.style.marginBottom = "0";
                error.style.marginBottom = "10px";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.innerHTML = "El campo e-mail es obligatorio";
                hayError = true;
            } else if (!regexEmail.test(email.value)) {
                email.style.marginBottom = "0";
                error.style.marginBottom = "10px";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.innerHTML = 'Debes ingresar una direccion de e-mail valida';
                hayError = true;
            } else {
                email.style.marginBottom = "20px";
                error.style.marginBottom = "0";
                error.innerHTML = "";
                hayError = false;
            } 
            break;
        case "password":
            var error = e.target.parentElement.querySelector('div.invalid-feedback');
            if (e.target.value == "") {
                password.style.marginBottom = "0";
                error.style.marginBottom = "10px";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.innerHTML = "El campo contraseña es obligatorio";
                hayError = true;
            } else if (password.value.length < 8) {
                password.style.marginBottom = "0";
                error.style.marginBottom = "10px";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.innerHTML = "La contraseña debe tener al menos ocho caracteres";
                hayError = true;
            } else if (!regexAlfanum.test(password.value)) {
                password.style.marginBottom = "0";
                error.style.marginBottom = "10px";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.innerHTML = "La contraseña debe ser alfanumerica";
                hayError = true;
            } else {
                password.style.marginBottom = "20px";
                error.style.marginBottom = "0";
                error.innerHTML = "";
                hayError = false;
            }
            if (password.value != rePassword.value) {
                rePassword.style.marginBottom = "0";
                rePassword.parentElement.querySelector('div.invalid-feedback').style.marginBottom = "10px";
                rePassword.parentElement.querySelector('div.invalid-feedback').style.color = "red";
                rePassword.parentElement.querySelector('div.invalid-feedback').style.fontSize = "12px";
                rePassword.parentElement.querySelector('div.invalid-feedback').innerHTML = 'Las contraseñas deben coincidir';
                hayError = true;
            } else {
                rePassword.style.marginBottom = "20px";
                rePassword.parentElement.querySelector('div.invalid-feedback').style.marginBottom = "0";
                rePassword.parentElement.querySelector('div.invalid-feedback').innerHTML = "";
                hayError = false;
            }
            break;
        case "confContrasenia":
            var error = e.target.parentElement.querySelector('div.invalid-feedback');
            if (e.target.value == "") {
                rePassword.style.marginBottom = "0";
                error.style.marginBottom = "10px";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.innerHTML = "El campo confirmar contraseña es obligatorio";
                hayError = true;
            } else if (password.value != rePassword.value){
                rePassword.style.marginBottom = "0";
                error.style.marginBottom = "10px";
                error.style.color = "red";
                error.style.fontSize = "12px";
                error.innerHTML = 'Las contraseñas deben coincidir';
                hayError = true;
            } else {
                rePassword.style.marginBottom = "20px";
                error.style.marginBottom = "0";
                error.innerHTML = "";
                hayError = false;
            }
            break;
    }

};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', function(e) {
    var formError = document.querySelector('.invalid-form');
    
    if (hayError || (nombre.value == "" || email.value == "" || password.value == "" || rePassword.value == "")) {
        e.preventDefault();
        formError.style.color = "red";
        formError.style.fontSize = "12px";
        formError.innerHTML = "Para registrarte debes completar todos los campos del formulario";
    }
});