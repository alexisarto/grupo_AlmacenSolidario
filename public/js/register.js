const formulario = document.querySelector('form.registro');

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const regexAlfanum = /^[\w]+$/;

formulario.addEventListener('submit', function(e) {
    let errores = [];
    const name = document.querySelector('#name');
    if (name.value == "") {
        errores.push('El campo nombre es obligatorio');
    } else if (name.value.length < 2) {
        errores.push('El nombre debe tener al menos dos caracteres');
    }
    const email = document.querySelector('#email');
    if (email.value == "") {
        errores.push('El campo email es obligatorio');
    } else if (!regexEmail.test(email.value)) {
        errores.push('Debes ingresar una direccion de email valida');
    }
    const password = document.querySelector('#password');
    if (password.value == "") {
        errores.push('El campo contraseña es obligatorio');
    } else if (password.value.length < 8) {
        errores.push('La contraseña debe tener al menos ocho caracteres');
    } else if (!regexAlfanum.test(password.value)) {
        errores.push('La contraseña debe ser alfanumerica');
    }
    const rePassword = document.querySelector('#rePassword');
    if(rePassword.value == "") {
        errores.push('El campo confirmar contraseña es obligatorio');
    } else if (password.value != rePassword.value){
        errores.push('Las contraseñas deben coincidir');
    }

    if (errores.length > 0) {
        e.preventDefault();
        let ulErrores = document.querySelector('div.errores ul');
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
        }
    } else {
        e.preventDefault();
        console.log(name.value);
        console.log(email.value);
    }
});
