var fs = require('fs');
var {check, validationResult, body} = require('express-validator');

const validations = {
    userRegister: [
        check('nombre').isLength({min: 2}).withMessage('Debes ingresar un nombre'),
        check('email').isEmail().withMessage('Debes ingresar una dirección de e-mail válida'),
        check('contrasenia')
          .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
          .isAlphanumeric().withMessage('La contraseña debe ser alfanumérica'),
        body('email').custom(function(value) {
          let usersJSON = fs.readFileSync(__dirname + '/../data/users.json', {encoding: 'utf-8'});
          let users;
          if (usersJSON == "") {
            users = [];
            } else {
              users = JSON.parse(usersJSON);
            }
            for (let i = 0; i < users.length; i++) {
              if (users[i].email == value) {
                return false;
              }
            }
            return true;
        }).withMessage('Usuario ya existente'),
        body('contrasenia').custom(function(value, {req}) {
          if (req.body.confContrasenia != value) {
            return false;
          } else {
            return true;
          }
        }).withMessage('Las contraseñas deben coincidir')
      ],
    userLogin: [
        check('email').isEmail().withMessage('Debes ingresar una dirección de e-mail válida'),
        check('contrasenia')
          .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
          .isAlphanumeric().withMessage('La contraseña debe ser alfanumérica')
      ]
}

module.exports = validations;