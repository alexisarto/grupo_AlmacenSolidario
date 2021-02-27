var express = require('express');
const usersController = require('../controllers/usersController');
var {check, validationResult, body} = require('express-validator');
var fs = require('fs');
var guestMiddleware = require('../middlewares/guestMiddleware');
var authMiddleware = require('../middlewares/authMiddleware');
var adminMiddleware = require('../middlewares/adminMiddleware');
var validations = require('../middlewares/validations')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// *** Logout ***
router.get('/logout', authMiddleware, usersController.logout);

// *** Resetear contrasenia ***
router.get('/resetear-contrasenia', usersController.passwordForgot);
router.post('/resetear-contrasenia', usersController.passwordReset);

// *** Crear usuario sql ***
router.get('/crear', guestMiddleware, usersController.crear);
router.post('/crear', validations.registroUsuario, usersController.registro);

// *** Detalle perfil ***
router.get('/detalle-perfil/:id', usersController.detallePerfil);

// *** Modificar perfil ***
router.get('/modificar-perfil/:id', usersController.editarPerfil);
router.post('/modificar-perfil/:id', validations.edicionPerfil, usersController.actualizarPerfil);

// *** Ingresar ***
router.get('/ingresar', guestMiddleware, usersController.formularioLogin);
router.post('/ingresar', validations.loginUsuario, usersController.ingresar);

// *** Listar ***
router.get('/list', adminMiddleware, usersController.list);

// *** Eliminar ***
router.get('/destroy/:id', adminMiddleware, usersController.destroy);

router.get('/carrito', authMiddleware, usersController.carrito);
router.post('/addToCart', authMiddleware, usersController.addToCart);
router.get('/historial', authMiddleware, usersController.history);
router.post('/donar', usersController.donar);
router.post('/shop', authMiddleware, usersController.shop);
router.get('/buy-detail/:id', authMiddleware, usersController.showBuyDetail);

router.post('/modificarCantidad', authMiddleware, validations.carrito, usersController.modificarCantidad);
router.post('/incrementar', authMiddleware, usersController.incrementar);
router.post('/reducir', authMiddleware, usersController.reducir);
router.post('/eliminarItem', authMiddleware, usersController.eliminarItem);

module.exports = router;
