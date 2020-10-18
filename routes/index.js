var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/registro', function(req, res, next) {
  res.render('register');
});

router.get('/carrito', function(req, res, next) {
  res.render('productCart');
});

router.get('/detalle-producto', function(req, res, next) {
  res.render('productDetail');
});

router.get('/agregar-producto', function(req, res, next) {
  res.render('productAdd');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/resetear-contrasenia', function(req, res, next) {
  res.render('passwordReset');
});

module.exports = router;
