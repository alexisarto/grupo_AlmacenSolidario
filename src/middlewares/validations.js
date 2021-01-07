var fs = require('fs');
var {check, validationResult, body} = require('express-validator');
var db = require('../database/models');

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
      ],
    userProfileEdit: [
        check('nombre').isLength({min: 2}).withMessage('Debes ingresar un nombre'),
        check('currentContrasenia')
          .isLength({min: 1}).withMessage('Debe ingresar la contraseña para realizar cambios.'),
        check('contrasenia')
          .optional({checkFalsy: true})
          .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
          .isAlphanumeric().withMessage('La contraseña debe ser alfanumérica'),
        body('contrasenia').custom(function(value, {req}) {
          if (req.body.confContrasenia != value) {
            return false;
          } else {
            return true;
          }
        }).withMessage('Las contraseñas deben coincidir')
      ],
      registroUsuario: [
        check('name').isLength({min: 2}).withMessage('Debes ingresar un nombre'),
        check('email').isEmail().withMessage('Debes ingresar una dirección de e-mail válida'),
        check('password')
          .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
          .isAlphanumeric().withMessage('La contraseña debe ser alfanumérica'),
        body('email').custom(function(value) {
          db.Usuario.findAll({
            where: {
              email: value
            }
          })
          .then(function(user){
            if (user.email) {
              return false;
            }
          })
            return true;
        }).withMessage('Usuario ya existente'),
        body('password').custom(function(value, {req}) {
          if (req.body.confContrasenia != value) {
            return false;
          } else {
            return true;
          }
        }).withMessage('Las contraseñas deben coincidir')
      ],
}

module.exports = validations;