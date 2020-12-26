var express = require('express');
const usersController = require('../controllers/usersController');
var {check, validationResult, body} = require('express-validator');
var fs = require('fs');
var guestMiddleware = require('../middlewares/guestMiddleware');
var authMiddleware = require('../middlewares/authMiddleware');
var validations = require('../middlewares/validations')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// *** Crear usuario ***
router.get('/registro', guestMiddleware, usersController.register);
router.post('/registro', validations.userRegister, usersController.store);

// *** Login ***
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validations.userLogin, usersController.processLogin);

// *** Logout ***
router.get('/logout', authMiddleware, usersController.logout);

// *** Mostrar perfil ***
router.get('/mostrar-perfil/:id', usersController.profileDetail);

// *** Editar perfil ***
router.get('/editar-perfil/:id', usersController.profileEdit);
router.post('/editar-perfil/:id', validations.userProfileEdit, usersController.profileUpdate);

router.get('/resetear-contrasenia', usersController.passwordReset);

router.get('/check', function(req, res) {
  if(req.session.usuarioLogueado == undefined) {
    res.send('no estas logueado');
  } else {
    res.send('el usuario logueado es ' + req.session.usuarioLogueado.nombre);
  }
})

module.exports = router;
