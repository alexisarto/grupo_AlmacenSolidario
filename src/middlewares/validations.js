var fs = require('fs');
var {check, validationResult, body} = require('express-validator');
var db = require('../database/models');

const validations = {
      registroUsuario: [
        check('name').isLength({min: 2}).withMessage('Debes ingresar un nombre'),
        check('email').isEmail().withMessage('Debes ingresar una dirección de e-mail válida'),
        check('password')
          .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
          .isAlphanumeric().withMessage('La contraseña debe ser alfanumérica'),
        body('email').custom(function(value) {
          return new Promise((resolve, reject) => {
            db.Usuario.findOne({
              where: {
                email: value
              }
            }).then(function(user){
              if (user) {        
                return reject();
              } else {
                return resolve();
              }
            });  
          });
        }).withMessage('Usuario ya existente'),
        body('password').custom(function(value, {req}) {
          if (req.body.confContrasenia != value) {
            return false;
          } else {
            return true;
          }
        }).withMessage('Las contraseñas deben coincidir')
      ],
      edicionPerfil: [
        check('name').isLength({min: 2}).withMessage('Debes ingresar un nombre'),
        check('currentContrasenia')
          .isLength({min: 1}).withMessage('Debe ingresar la contraseña para realizar cambios.'),
        check('password')
          .optional({checkFalsy: true})
          .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
          .isAlphanumeric().withMessage('La contraseña debe ser alfanumérica'),
        body('password').custom(function(value, {req}) {
          if (req.body.confContrasenia != value) {
            return false;
          } else {
            return true;
          }
        }).withMessage('Las contraseñas deben coincidir')
      ],
      loginUsuario: [
        check('email').isEmail().withMessage('Debes ingresar una dirección de e-mail válida'),
        check('password')
          .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
          .isAlphanumeric().withMessage('La contraseña debe ser alfanumérica')
      ],
      productAddForm: [
        check('descripcion').isLength({min: 8, max: 255}).withMessage('La descripcion debe estar entre 8 y 255 caracteres'),
        check('descripcion_completa').isLength({min: 8, max: 255}).withMessage('La descripcion completa debe estar entre 8 y 255 caracteres'),
        check('presentacion')
          .isNumeric().withMessage('La presentacion debe ser un numero')
          .isLength().withMessage('La presentacion no puede quedar vacia'),
        check('precio')
          .isNumeric().withMessage('El precio debe ser un numero')
          .isLength().withMessage('El precio no puede quedar vacio')
      ]
}

module.exports = validations;