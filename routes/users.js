var express = require('express');
const usersController = require('../controllers/usersController');
var {check, validationResult, body} = require('express-validator');
var fs = require('fs');
var guestMiddleware = require('../middlewares/guestMiddleware');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// *** Crear usuario ***
router.get('/registro', guestMiddleware, usersController.register);
router.post('/registro', [
  check('nombre').isLength({min: 2}).withMessage('Debes ingresar un nombre'),
  check('email').isEmail().withMessage('Debes ingresar una dirección de e-mail vávlida'),
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
],usersController.store);

// *** Login ***
router.get('/login', usersController.login);
router.post('/login', [
  check('email').isEmail().withMessage('Debes ingresar una dirección de e-mail vávlida'),
  check('contrasenia')
    .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
    .isAlphanumeric().withMessage('La contraseña debe ser alfanumérica')
], usersController.processLogin);

router.get('/resetear-contrasenia', usersController.passwordReset);

module.exports = router;
