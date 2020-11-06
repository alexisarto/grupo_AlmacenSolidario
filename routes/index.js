var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/carrito', function(req, res, next) {
  res.render('productCart');
});

router.get('/detalle-producto', function(req, res, next) {
  res.render('productDetail');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/instituciones', function(req, res, next) {
  res.render('instituciones');
});

router.get('/almacen', function(req, res, next) {
  res.render('almacen');
});

module.exports = router;