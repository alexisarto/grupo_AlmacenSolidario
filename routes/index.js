var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

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

router.get('/home', indexController.home);

router.get('/instituciones', indexController.instituciones);

router.get('/almacen', function(req, res, next) {
  res.render('almacen');
});

module.exports = router;