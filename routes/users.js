var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registro', usersController.register);

router.get('/login', usersController.login);

router.get('/resetear-contrasenia', usersController.passwordReset);

module.exports = router;
