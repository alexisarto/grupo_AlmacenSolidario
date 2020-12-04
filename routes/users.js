var express = require('express');
const usersController = require('../controllers/usersController');
var {check, validationResult, body} = require('express-validator');
var fs = require('fs');
var guestMiddleware = require('../middlewares/guestMiddleware');
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

router.get('/resetear-contrasenia', usersController.passwordReset);

module.exports = router;
